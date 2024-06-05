"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import CardItem from "./CardItem";

const TopCategories = () => {
  return (
    <section className="mt-16">
      <div>
        <h1 className="text-center text-lg font-semibold">
          Explore Top Categories
        </h1>
      </div>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <CardItem
            imgSrc="/assets/images/SB1.webp"
            title="Spring Forward"
            btnText="Discover More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            imgSrc="/assets/images/sb2.webp"
            title="Bold Moves"
            btnText="Discover More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            imgSrc="/assets/images/SB3.webp"
            title="Online Exclusives"
            btnText="Shop Now"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            imgSrc="/assets/images/SB1.webp"
            title="Spring Forward"
            btnText="Discover More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            imgSrc="/assets/images/sb2.webp"
            title="Bold Moves"
            btnText="Discover More"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardItem
            imgSrc="/assets/images/SB3.webp"
            title="Online Exclusives"
            btnText="Shop Now"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default TopCategories;
