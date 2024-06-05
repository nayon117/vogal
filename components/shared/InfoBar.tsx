import React from "react";
import "tailwindcss/tailwind.css";
import { Package, MessageCircle, RotateCcw, Shield } from "lucide-react";

const InfoBar = () => {
  return (
    <div className="bg-black py-4 text-white">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center space-x-2">
          <Package className="size-6" />
          <div>
            <div className="font-bold">FREE DELIVERY</div>
            <div>For all orders over $120</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <MessageCircle className="size-6" />
          <div>
            <div className="font-bold">24/7 HELP CENTER</div>
            <div>Dedicated 24/7 support</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <RotateCcw className="size-6" />
          <div>
            <div className="font-bold">SATISFIED OR REFUNDED</div>
            <div>Free returns within 14 days</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="size-6" />
          <div>
            <div className="font-bold">100% SECURE PAYMENTS</div>
            <div>Accept all payment methods</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
