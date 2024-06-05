import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <Navbar/>
      <section className="min-h-screen px-6 pb-6 pt-16 max-md:pb-14 sm:px-14">
        <div className="mx-auto w-full max-w-screen-xl">{children}</div>
      </section>
      <Footer/>
    </main>
  );
};
export default layout;
