"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import FeaturedCard from "./FeaturedCard";
import { topSeller } from "@/constants";

const TopSeller = () => {
  return (
    <section className="mt-12">
      <div>
        <h1 className="mb-6 text-center text-2xl font-semibold">Top Sellers</h1>
      </div>
      <Swiper spaceBetween={50} slidesPerView={4}>
        {topSeller?.map((item) => (
          <SwiperSlide key={item.id}>
            <FeaturedCard
              id={item.id}
              title={item.title}
              price={item.price}
              imgSrc={item.imgSrc}
              colors={['#808000', '#000000']}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
export default TopSeller;
