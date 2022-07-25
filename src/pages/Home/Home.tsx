import CategoryBanner from "../../components/Category/Category";
import Hero from "../../components/Hero/Hero";
import { Category } from "../../components/Header/Header";
import { useEffect, useLayoutEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Lazy } from "swiper";
import { product, Product } from "../../@types/type";
import axiosClient from "../../apis/axiosClient";
import Card from "../../components/Card/Card";
import { useLocation } from "react-router-dom";

const CustomerImage = require("../../assets/images/customer.webp");
const Delivery = require("../../assets/images/services1.png");
const Secure = require("../../assets/images/services2.png");
const Money = require("../../assets/images/services3.png");
const Support = require("../../assets/images/services4.png");

const Home = () => {
  document.title = "Capital Shop";
  const [itemActive, setItemActive] = useState<number>(1);
  const [Products, setProducts] = useState<Product[]>([product]);
  useEffect(() => {
    const test = async () => {
      const res: Product[] = await axiosClient.get(
        `categories/${itemActive}/products?offset=0&limit=10`
      );
      setProducts(res);
    };
    test();
    //
  }, [itemActive]);
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="font-jost">
      <Hero />
      <CategoryBanner />
      <div className="px-2 md:px-20">
        <div className="flex flex-row justify-between items-center border-b border-gray-300 md:mb-9">
          <div>
            <p className="text-xl md:text-3xl font-medium pb-4">
              Trending This Week
            </p>
          </div>
          <div className="hidden md:grid grid-cols-4 gap-5 ">
            {Category.map((item) => (
              <button
                className={`${item.id === 5 ? "hidden" : ""} ${
                  itemActive === item.id ? "border-b-4" : ""
                } border-primary pb-4 text-center transition-all duration-200`}
                key={item.id}
                onClick={() => {
                  setItemActive(item.id);
                }}
              >
                <p className="text-lg font-medium">{item.name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="md:px-20">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          navigation={true}
          spaceBetween={10}
          rewind={true}
          lazy={true}
          modules={[Navigation, Autoplay, Lazy]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {Products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="py-7">
                <Card product={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-10 bg-[#f3ead8] px-2 py-6 md:p-20 flex flex-col items-center justify-center">
        <p className="text-xl md:text-3xl font-semibold">
          Customer Testimonial
        </p>
        <p className="text-lg md:text-2xl font-normal md:px-[25%] text-center mt-3 md:mt-10 mb-6">
          Everybody is different, which is why we offer styles for every body.
          Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos
          facilis neque nulla earum.
        </p>
        <div className="flex items-center">
          <img src={CustomerImage} alt=" customer image" className="mr-6" />
          <div>
            <p className="text-base">Petey Cruiser</p>
            <p className="text-lg">Designer at Colorlib</p>
          </div>
        </div>
      </div>
      <div className="px-2 md:px-20 py-10">
        <p className="text-xl md:text-3xl font-bold text-center">
          You May Like
        </p>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={4}
          navigation={true}
          spaceBetween={10}
          rewind={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {Products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="py-7">
                <Card product={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 px-2 md:px-20 py-32 bg-[#f6f6f6] ">
        <div className="grid-cols-1 flex flex-col items-center">
          <img src={Delivery} alt="" />
          <p className="text-base md:text-xl font-medium mt-6">
            Fast & Free Delivery
          </p>
          <p className="text-sm md:text-base font-normal text-[#57667e] mt-2">
            Free delivery on all orders
          </p>
        </div>
        <div className="grid-cols-1 flex flex-col items-center">
          <img src={Secure} alt="" />
          <p className="text-base md:text-xl font-medium mt-6">
            Secure Payment
          </p>
          <p className="text-sm md:text-base font-normal text-[#57667e] mt-2">
            Free delivery on all orders
          </p>
        </div>
        <div className="grid-cols-1 flex flex-col items-center">
          <img src={Money} alt="" />
          <p className="text-base md:text-xl font-medium mt-6">Money Back</p>
          <p className="text-sm md:text-base font-normal text-[#57667e] mt-2">
            Free delivery on all orders
          </p>
        </div>
        <div className="grid-cols-1 flex flex-col items-center">
          <img src={Support} alt="" />
          <p className="text-base md:text-xl font-medium mt-6">
            Online Support
          </p>
          <p className="text-sm md:text-base font-normal text-[#57667e] mt-2">
            Free delivery on all orders
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
