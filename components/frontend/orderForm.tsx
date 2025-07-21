import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardStackDemo } from './card-stack';
import { useProductState } from '@/store/store';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useForm } from 'react-hook-form';
import { baseUrl, OrderTypes } from '@/types/types';
import { useState } from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { Branch } from '@prisma/client';

export function OrderDialogForm({
  fetchedBranches,
}: {
  fetchedBranches: Branch[];
}) {
  const [loading, setLoading] = useState(false)
  // Bring The Cart Array Using Zustand
  const { productCartArray } = useProductState();
  console.log(productCartArray);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderTypes>();
  const [branch, setBranch] = useState('');
  // console.log(branch);
  async function handleOrder(orderData: OrderTypes) {
    console.log(orderData.orderItems, 'clicked')
    orderData.branchId = branch;
    const orderDetails = {
      email: orderData.email,
      firstName: orderData.firstName,
      lastName: orderData.lastName,
      phone: orderData.phone,
      branchId: orderData.branchId,
      orderItems: productCartArray,
    };
    console.log(orderDetails, 'Ntuu.....sse..........!!!!!');
    try {
      setLoading(true)
      const response = await fetch(`${baseUrl}/api/v1/orderAPI`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(orderDetails)
      })
      console.log(response);
      if(response.ok) {
        setLoading(false)
        console.log(response);
        toast.success('Order Was Made Successfully')
      } else {
        console.log(response);
        // console.log(orderData);
        setLoading(false)
        toast.error('Failed To Make An Order')
      }
    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error('Internet Error, Please Try Again...!!!')
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full text-red-600 border border-slate-600 hover:bg-slate-600 hover:text-white">
          Continue to Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <form onSubmit={handleSubmit(handleOrder)} className='space-y-4'>
          <DialogHeader>
            <DialogTitle>Proceed With Your Order</DialogTitle>
            <DialogDescription>
              <div className="h-[8rem] border-t border-b p-4 md:p-6">
                <div className="w-full flex items-center justify-center">
                  <CardStackDemo productsInCart={productCartArray} />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email Address
            </Label>
            <Input
              {...register('email', { required: true })}
              id="email"
              className="col-span-3"
            />
            {errors.email && (
              <p className="text-xs text-red-600">Email Is Required</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="firstName" className="text-right">
              First Name
            </Label>
            <Input
              {...register('firstName', { required: true })}
              id="firstName"
              className="col-span-3"
            />
            {errors.firstName && (
              <p className="text-xs text-red-600">Your FirstName Is Required</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lastName" className="text-right">
              Last Name
            </Label>
            <Input
              {...register('lastName', { required: true })}
              id="lastName"
              className="col-span-3"
            />
            {errors.lastName && (
              <p className="text-xs text-red-600">Your Last Is Required</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">
              Phone
            </Label>
            <Input
              {...register('phone', { required: true })}
              id="phone"
              type="text"
              placeholder="e.g.0759268262"
              className="col-span-3"
            />
            {errors.phone && (
              <p className="text-xs text-red-600">Phone Is Required</p>
            )}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="branch" className="text-right">
              Branch
            </Label>
            <Select onValueChange={(branch) => setBranch(branch)}>
              <SelectTrigger className="w-[284px]">
                <SelectValue placeholder="Select Branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Branches</SelectLabel>
                  {fetchedBranches.map((branchItem, branchItemIndex) => {
                    return (
                      <SelectItem key={branchItemIndex} value={branchItem.id}>
                        {branchItem.name}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            {
              loading ? (
                <Button type="submit"><Loader2 className='animate-spin'/></Button>
              ):(
                <Button type="submit">Save changes</Button>
              )
            }
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
