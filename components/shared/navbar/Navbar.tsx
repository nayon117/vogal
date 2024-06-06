"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import MobileNav from "./MobileNav";
import useCart from "@/lib/hooks/useCart";

const Navbar = () => {
  const cart = useCart();
  return (
    <nav className=" fixed z-50 flex  w-full items-center justify-between gap-4 p-4  sm:px-12">
      <Link className="flex items-center gap-1" href="/">
        <p className="text-2xl font-semibold max-sm:hidden">Vogal</p>
      </Link>

      <div className="flex gap-2">
        {navbarLinks.map((item) => {
          return (
            <Link
              key={item.route}
              href={item.route}
              className=" flex items-center justify-start gap-4 bg-transparent md:p-2 "
            >
              <p className="text-xs font-medium text-black max-lg:hidden">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="flex items-center">
        <div className="mr-2">
          <Image
            src="/assets/icons/search.svg"
            alt="login"
            width={20}
            height={20}
          />
        </div>
        <SignedOut>
          <div className="mr-2 flex gap-2">
            <Link href="/sign-in">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-6 w-6 mr-2",
              },
              variables: {
                colorPrimary: "#144272",
              },
            }}
          />
        </SignedIn>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/icons/heart.svg"
            alt="login"
            width={20}
            height={20}
          />
         <Link href={`/cart`} className="flex items-center">
         <Image
            src="/assets/icons/cart.svg"
            alt="login"
            width={20}
            height={20}
          />
          <p>({cart.cartItems.length})</p>
         </Link>
  
        </div>
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
