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
            </div>
        </section>
    )
}
export default HomePage;