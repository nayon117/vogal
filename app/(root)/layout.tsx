import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <section className="min-h-screen">
        <div className="mx-auto w-full max-w-screen-xl">{children}</div>
      </section>
    </main>
  );
};
export default layout;
