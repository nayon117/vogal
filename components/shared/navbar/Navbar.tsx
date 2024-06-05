"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className=" fixed z-50 flex  w-full items-center justify-between gap-4 p-4  sm:px-12">
      <Link className="flex items-center gap-1" href="/">
        <p className=" max-sm:hidden">
         Vogal
        </p>
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
        <SignedOut>
          <div className="flex gap-2">
          <Image
                  src="/assets/icons/search.svg"
                  alt="login"
                  width={20}
                  height={20}
                />
            <Link href="/sign-in">
                <Image
                  src="/assets/icons/account.svg"
                  alt="login"
                  width={20}
                  height={20}
                />
            </Link>
            <Image
                  src="/assets/icons/heart.svg"
                  alt="login"
                  width={20}
                  height={20}
                />
            <Image
                  src="/assets/icons/cart.svg"
                  alt="login"
                  width={20}
                  height={20}
                />
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#144272",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
