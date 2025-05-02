"use client"
import { BookmarkX, CircleMinus, CirclePlus, Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { motion } from "framer-motion"
import { useProductState } from "@/store/store"

export default function ProductCart() {
  const { handleRemoveProductFromCart, handleClear, productCartArray, handleQuantityIncrement, handleQuantityDecrement } = useProductState();
  console.log(productCartArray);

  const subTotal = productCartArray.reduce((acc, productInCart) => {
    return (
      acc + Number(productInCart.price) * productInCart.numberOfProducts
    )
  }, 0)
  return (
    <>
      <section className="max-w-sm flex-col space-y-4 md:space-y-0 md:flex md:flex-row md:justify-between md:items-center md:gap-8 md:max-w-7xl md:px-4 container mx-auto py-8">
        <motion.div
          className="w-full md:w-[70%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between">
            <motion.h3
              className="py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-4xl text-red-600 font-semibold">Welcome To Your Cart</h3>
            </motion.h3>
            <Button onClick={()=>handleClear()} className="text-red-600 hover:text-white border border-red-600 hover:bg-red-600 shadow-lg"><BookmarkX className="w-6 h-6 text-red-600 hover:text-white" /> Clear Your Cart</Button>
          </div>
          {/* Table */}
          <table className="table-auto w-full">
            <thead>
              <tr className="">
                <th className="text-gray-400 text-left text-sm md:text-lg">Product</th>
                <th className="text-gray-400 text-left text-sm md:text-lg">Quantity</th>
                <th className="text-gray-400 text-left text-sm md:text-lg">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                productCartArray.map((productCart) => {
                  
                  return (
                    <motion.tr
                      className="border-b border-red-600"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      whileHover={{
                        backgroundColor: "rgba(239, 68, 68, 0.05)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      <td>
                        <motion.div
                          className="flex gap-4 p-2 md:p-4"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <motion.div
                            className="bg-gray-400 rounded-md h-10 w-12 md:h-12 md:w-12"
                            whileHover={{
                              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                            }}
                          >
                            <img src="/placeholder.png" className="w-full h-full object-fit-contain" alt="" />
                          </motion.div>
                          <div className="">
                            <h3 className="text-red-600 text-xs md:text-md font-semibold">{productCart.name}</h3>
                            <p className="text-xs md:text-lg text-gray-400">{productCart.numberOfProducts} Items</p>
                          </div>
                        </motion.div>
                      </td>
                      <td>
                        <div className="mx-4 md:mx-0">
                          <div className="flex items-center space-x-2 py-2">
                            <Button onClick={()=>handleQuantityDecrement(productCart.id )} className='text-red-600 text-md'><CircleMinus /></Button>
                              <p className='text-red-600'>{productCart.numberOfProducts}</p>
                            <Button onClick={()=>handleQuantityIncrement(productCart.id)} className='text-red-600 text-md'><CirclePlus /></Button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="flex items-center justify-end gap-4">
                          <div className="">
                            <h3 className="text-red-600">${productCart.price}</h3>
                          </div>
                          <div className="">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                              <Button onClick={()=>handleRemoveProductFromCart(productCart.id)} className="bg-gray-400 rounded-full shadow-lg hover:shadow-2xl hover:bg-red-600">
                                <Trash2 className="shadow-2xl" />
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  )
                })
              }
            </tbody>
          </table>
        </motion.div>
        <motion.div
          className="w-full md:w-[30%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {/* <MagicCardDemo /> */}
          <motion.div
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Card className="bg-[#1a1f24] text-white space-y-4">
              <CardHeader className="">
                <motion.h2
                  className="text-xl font-semibold text-red-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  Card Total
                </motion.h2>
                <motion.div
                  className="flex justify-between items-center w-full border-b border-white py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <div className="">
                    <h3>Subtotal</h3>
                  </div>
                  <div className="">
                    <h3>${subTotal.toFixed(2)}</h3>
                  </div>
                </motion.div>
              </CardHeader>
              <CardContent className="space-y-2">
                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="">
                    <h3>Tax</h3>
                  </div>
                  <div className="">
                    <h3>$0</h3>
                  </div>
                </motion.div>
                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <div className="">
                    <h3>Shipping in US</h3>
                  </div>
                  <div className="">
                    <h3>$19</h3>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full border-b border-white py-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <p>We only charge shipping when you have 2kg items</p>
                </motion.div>
              </CardContent>
              <CardFooter className="flex-col space-y-2">
                <motion.div
                  className="w-full flex justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="">
                    <h3>Total</h3>
                  </div>
                  <div className="">
                    <h3>$599</h3>
                  </div>
                </motion.div>
                <motion.div
                  className="w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button className="w-full text-red-600 border border-red-600 hover:bg-red-600 hover:text-white">
                    Continue to Payment
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
