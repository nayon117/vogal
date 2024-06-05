"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import useCart from "@/lib/hooks/useCart";
import { Button } from "../ui/button";

interface CardProps {
  _id: string;
  title: string;
  price: number;
  imgSrc: string;
  colors?: string[];
}

const FeaturedCard = ({ _id,title, price, colors, imgSrc }: CardProps) => {
  const [hover, setHover] = useState(false);
  const cart = useCart();

  return (
    <Card
      className="relative overflow-hidden border-none"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={imgSrc}
            alt="card image"
            width={400}
            height={400}
            className={`mx-auto cursor-pointer object-cover transition-transform duration-300 ${hover ? "scale-105" : "scale-100"}`}
          />
          {hover && (
            <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-4 bg-black py-2 opacity-50">
              <Heart className="size-6 cursor-pointer text-white hover:text-red-500" />
             <Button 
              onClick={() => {
                cart.addItem({
                  _id,
                  title,
                  price,
                  quantity: 1,
                  imgSrc
                });
              }}
             > <ShoppingCart className="size-6 cursor-pointer text-white hover:text-green-500" /></Button>
              <Eye className="size-6 cursor-pointer text-white hover:text-blue-500" />
            </div>
          )}
        </div>
        <CardTitle className="mx-auto pt-3 text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center">${price}</p>
        <div className="mt-2 flex justify-center space-x-2">
          {colors?.map((color, index) => (
            <span
              key={index}
              className="size-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeaturedCard;
