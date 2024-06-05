"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants";

import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const NavContent = () => {
  return (
    <section className="flex h-full flex-col gap-6 pt-10">
      {navbarLinks.map((item) => {
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className="flex items-center justify-start gap-2 bg-transparent p-2 "
            >
              <p className="text-xs font-medium text-black">{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/menu.svg"
          width={20}
          height={20}
          alt="menu"
          className="ml-2 sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left" className="border-none">
        <Link className="flex items-center gap-1" href="/">
          <p className="font-bold">Vogal</p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className="flex flex-col gap-3">
              <SheetClose asChild>
                <Link href="/sign-in">
                  <Button className="min-h-[41px] w-full rounded px-4 py-3 shadow-none">
                    <span className="text-orange-500">Login</span>
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="/sign-up">
                  <Button className="min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                    Sign Up
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
