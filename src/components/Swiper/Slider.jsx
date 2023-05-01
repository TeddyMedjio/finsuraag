// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import slide from "../../../public/img/family.jpg";
import slide2 from "../../../public/img/family2.jpg";

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
        <SwiperSlide>
          <div className="relative container mx-auto ">
            <div className="  max-w-[500px] absolute left-0 top-0 mt-[40%] lg:mt-[20%] text-center lg:text-left  ">
              <h1 className="text-brand-blue font-bold text-5xl">
                Finanzielle Sicherheit
              </h1>
              <p className=" text-4xl text-black mt-5 mb-10">
                Sichere dich und deine Familie für unsichere Zeiten ab
              </p>
              <Link
                href="/barbora-regielova"
                className="font-bold uppercase transition-all duration-300 ease bg-brand-blue hover:bg-brand-red text-white py-3 px-3 hover:px-7 rounded cursor-pointer tracking-widest "
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          <Image src={slide} height="100%" alt="image de la notaire" />
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative container mx-auto">
            <div className="  max-w-[550px] absolute right-0 top-0 mt-[40%] lg:mt-[20%] text-center lg:text-left  ">
              <h1 className="text-brand-blue font-bold text-5xl">
                Schutz im Alltag
              </h1>
              <p className=" text-4xl text-black mt-5 mb-10">
                Schütze dich und deine Gegenstände vor Risiken im Alltag
              </p>
              <Link
                href="/barbora-regielova"
                className="font-bold uppercase transition-all duration-300 ease bg-brand-blue hover:bg-brand-red text-white py-3 px-3 hover:px-7 rounded cursor-pointer tracking-widest "
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          <Image src={slide2} height="100%" alt="image de la notaire" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
