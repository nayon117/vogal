import InfoBar from "@/components/shared/InfoBar";
import NewArrival from "@/components/shared/NewArrival";
import News from "@/components/shared/News";
import TopCategories from "@/components/shared/TopCategories";
import TopSeller from "@/components/shared/TopSeller";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="">
      <div className="">
        <Image
          src="/assets/images/banner.png"
          alt="banner image"
          width={1920}
          height={1080}
        />
        <TopCategories />
        <NewArrival />
        
        {/* Explore section */}
        <div>
          <div className="mx-auto mt-12 p-4">
            <div className="text-center text-2xl font-semibold">
              There&apos;s More to Explore
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {/* Women Section */}
              <div className="relative">
                <Image
                  src="/assets/images/w.webp"
                  alt="Women"
                  width={400}
                  height={400}
                  className=" object-cover"
                />
                <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black">
                  WOMEN
                </button>
              </div>
              {/* Men Section */}
              <div className="relative">
                <Image
                  src="/assets/images/m.webp"
                  alt="Men"
                  width={400}
                  height={400}
                  className=" object-cover"
                />
                <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black">
                  MEN
                </button>
              </div>
              <div className="flex flex-col">
                {/* Shoes Section */}
                <div className="relative">
                  <Image
                    src="/assets/images/ss.webp"
                    alt="Shoes"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                  <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black">
                    SHOES
                  </button>
                </div>
                {/* Accessories Section */}
                <div className="relative">
                  <Image
                    src="/assets/images/acc.jpg"
                    alt="Accessories"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                  <button className="absolute bottom-4 left-4 bg-white px-4 py-2 text-black">
                    ACCESSORIES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TopSeller />
        <News />
        <InfoBar />
      </div>
    </section>
  );
};
export default HomePage;
