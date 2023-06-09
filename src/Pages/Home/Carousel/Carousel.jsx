
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

const Carousel = () => {
  return (
    <div className="my-10">
      <Swiper
      autoplay 
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="container mx-auto lg:w-full lg:h-[700px]"
            src="https://www.questionpro.com/blog/wp-content/uploads/2016/07/bigstock-Foreign-Language-School-For-Ad-103361030.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="container mx-auto lg:w-full lg:h-[700px]"
            src="https://toranomon-ls.com/wp-content/uploads/2023/05/2.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="container mx-auto lg:w-full lg:h-[700px]"
            src="https://eunice-university.eu/wp-content/uploads/2022/07/EUNICE-european-languages-online-courses.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="container mx-auto lg:w-full lg:h-[700px]"
            src="https://resources.reed.co.uk/courses/coursemedia/228114/e446e8f6-b738-4293-b562-2513c22f16d1_cover.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="container mx-auto lg:w-full lg:h-[700px]"
            src="https://images.squarespace-cdn.com/content/v1/5a9850b95417fc1f5c48bde0/1678589815864-PTOI46205FZ075GO1WVO/Presentation22.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="container mx-auto lg:w-full lg:h-[700px]"
            src="https://images.vexels.com/content/198604/preview/language-course-education-cover-design-a4073d.png"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
