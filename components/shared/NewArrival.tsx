import { newArrival } from "@/constants";
import FeaturedCard from "./FeaturedCard";
import { Button } from "../ui/button";

const NewArrival = () => {
  return (
    <section className="mt-16">
      <div>
        <h2 className="text-center text-2xl font-bold">New Arrivals</h2>
        <h3 className="text-center">We have your occasion covered</h3>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 ">
        {newArrival?.map((item) => (
          <FeaturedCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imgSrc={item.imgSrc}
            colors={['#808000', '#000000']}
          />
        ))}
      </div>
      <Button className="mx-auto mt-6 block">Discover More</Button>t
    </section>
  );
};
export default NewArrival;
