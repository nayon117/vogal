import React from "react";
import "tailwindcss/tailwind.css";
import { Package, MessageCircle, RotateCcw, Shield } from "lucide-react";

const InfoBar = () => {
  return (
    <div className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Package className="size-6" />
          <div>
            <div className="font-bold">FREE DELIVERY</div>
            <div>For all orders over $120</div>
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <MessageCircle className="size-6" />
          <div>
            <div className="font-bold">24/7 HELP CENTER</div>
            <div>Dedicated 24/7 support</div>
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <RotateCcw className="size-6" />
          <div>
            <div className="font-bold">SATISFIED OR REFUNDED</div>
            <div>Free returns within 14 days</div>
          </div>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
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
