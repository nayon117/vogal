import Image from "next/image";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="bg-[#fafcfe]">
      <div className="flex flex-col-reverse items-center justify-between gap-4 md:flex-row">
        <div className="flex-1 p-2">
          <h3 className="font-medium text-black">New Collection</h3>
          <h1 className="mt-2 text-2xl  font-semibold md:text-4xl lg:text-6xl">
            Luxery Brands <br /> without labels
          </h1>
          <Button className="mt-5 text-white">Shop Now</Button>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/images/banner.webp"
            alt="banner image"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;
