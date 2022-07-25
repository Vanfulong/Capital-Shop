import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const Hero1 = require("../../assets/images/hero1.webp");
const Hero2 = require("../../assets/images/hero2.webp");
const Hero = () => {
  return (
    <div className="w-full ">
      <Swiper
        navigation={true}
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={Hero1} alt="" />
            <div className="absolute top-0 left-0 text-5xl w-[50%] h-[100%] flex flex-col justify-center items-center ">
              <p className="text-3xl md:text-5xl font-clicker text-red-600">
                Fashion Sale
              </p>
              <p className="text-sm md:text-5xl font-bold md:mt-6 md:mb-3">
                Minimal Menz Style
              </p>
              <p className="hidden md:block text-xs md:text-lg px-1 md:px-[20%] text-center">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus dignissimos facilis neque nulla earum.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={Hero2} alt="" />
            <div className="absolute top-0 right-0 text-5xl w-[50%] h-[100%] flex flex-col justify-center items-center ">
              <p className="text-3xl md:text-5xl font-clicker text-red-600">
                Fashion Sale
              </p>
              <p className="text-sm md:text-5xl font-bold md:mt-6 md:mb-3">
                Minimal Menz Style
              </p>
              <p className="hidden md:block text-xs md:text-lg px-1 md:px-[20%] text-center">
                Consectetur adipisicing elit. Laborum fuga incidunt laboriosam
                voluptas iure, delectus dignissimos facilis neque nulla earum.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
