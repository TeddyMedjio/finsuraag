// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import family from "../../../public/img/family.jpg";
import family2 from "../../../public/img/family2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        // effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className=" z-40">
          <div className="relative container mx-auto z-[45]">
            <div className=" max-w-[550px] md:max-w-full lg:max-w-[550px] absolute left-0 top-0 mt-[20%] md:mt-[40%] lg:mt-[15%] text-center lg:text-left">
              <h1 className="text-brand-blue font-bold text-[56px]">
                Finanzielle Sicherheit
              </h1>
              <p className=" text-[40px] text-black mt-5 mb-10">
                Sichere dich und deine Familie für unsichere Zeiten ab
              </p>
              <Link
                href="/"
                className="text-xl font-bold uppercase transition-all duration-300 ease bg-brand-blue hover:bg-brand-red text-white py-3 px-3 hover:px-7 rounded cursor-pointer tracking-widest "
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          <div className="absolute left-0 top-0 bg-white w-full h-full opacity-70 z-[41] lg:hidden"></div>
          <Image src={family} height="auto" alt="image d'une famille" />
        </SwiperSlide>

        <SwiperSlide className="family2 z-40">
          <div className="relative container mx-auto z-[45]">
            <div className="max-w-[550px] md:max-w-full lg:max-w-[650px] absolute right-0 top-0 mt-[20%] md:mt-[40%] lg:mt-[15%] text-center lg:text-left  ">
              <h1 className="text-brand-blue font-bold text-[56px]">
                Schutz im Alltag
              </h1>
              <p className=" text-[40px] text-black mt-5 mb-10">
                Schütze dich und deine Gegenstände vor Risiken im Alltag
              </p>
              <Link
                href="/"
                className="text-xl font-bold uppercase transition-all duration-300 ease bg-brand-blue hover:bg-brand-red text-white py-3 px-3 hover:px-7 rounded cursor-pointer tracking-widest "
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          <div className="absolute left-0 top-0 bg-white w-full h-full opacity-40 z-[41] lg:hidden"></div>
          <Image src={family2} height="auto" alt="image d'une famille" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
