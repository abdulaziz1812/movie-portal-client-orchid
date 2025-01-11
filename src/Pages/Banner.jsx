import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import banner01 from "../assets/banner01.jpg";
import banner02 from "../assets/banner02.jpg";
import banner03 from "../assets/banner03.jpg";
import banner04 from "../assets/banner04.jpg";

const Banner = () => {
  return (
    <div>
      <div className=" overflow-hidden object-cover ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            clickable: true,
          }}
          loop={true}
          spaceBetween={20}
          className="h-[680px] "
        >
          <SwiperSlide>
            <img
              src={banner01}
              alt="banner01"
              className="w-full h-full object-top object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner02}
              alt="banner02"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner03}
              alt="banner03"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={banner04}
              alt="banner04"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
