import NewArrival from "@/components/shared/NewArrival";
import TopCategories from "@/components/shared/TopCategories";
import Image from "next/image";

const HomePage = () => {
    return (
        <section className=''>
            <div className=''>
               <Image 
               src='/assets/images/banner.png'
               alt="banner image"
                width={1920}
                height={1080}
               />
               <TopCategories/>
               <NewArrival/>
            </div>
        </section>
    )
}
export default HomePage;