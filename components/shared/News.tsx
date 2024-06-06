"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import CardItem from "./CardItem";
import { blogs } from "@/constants";

const News = () => {
  return (
    <section className="mt-12">
      <div>
        <h2 className="text-center text-2xl font-semibold">News & Articles</h2>
      </div>
      <div className="mt-6">
        <Swiper spaceBetween={50} slidesPerView={3}>
          {blogs?.map((item, index) => (
            <SwiperSlide key={index}>
              <CardItem title={item.title} imgSrc={item.imgSrc} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default News;
