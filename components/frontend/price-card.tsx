"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTheme } from "next-themes";
import { MagicCard } from "../magicui/magic-card";

export function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <Card className="p-0 max-w-sm w-full shadow-none border-none">
      <MagicCard
        gradientColor={theme === "dark" ? "red" : "green"}
        className="p-0"
      >
        <CardHeader className=" border-b border-border p-4 [.border-b]:pb-4">
          <CardTitle>Cart Total</CardTitle>
          <CardDescription className="flex justify-between border border-b border-red-600">
            <div className="">
                <h3>Subtotal</h3>
            </div>
            <div className="">
                <h3>$589</h3>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 border-b border-red-600">
            <div className="flex justify-between">
              <div className="">
                <h3>Tax</h3>
              </div>
              <div className="">
                <h3>$0</h3>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3>Shipping in US</h3>
              </div>
              <div className="grid gap-2">
                <h3>$19</h3>
              </div>
              <div className="">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga placeat sapiente, asperiores iste.</p>
              </div>
            </div>
        </CardContent>
        <CardFooter className="flex-col p-4 border-t border-border [.border-t]:pt-4">
            <div className="flex justify-between">
                <div className="">Total</div>
                <div className="">$599</div>
            </div>
          <Button className="w-full border border-1 border-red-600 text-red-600">Continue to Payment</Button>
        </CardFooter>
      </MagicCard>
    </Card>
  );
}
