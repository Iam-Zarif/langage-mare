// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SectionTitle from "../../../../SectionTitle/SectionTitle";
import Button from "../../../../Button/Button";
const PopularClasses = () => {
  return (
    <div className="container mx-auto">
      <hr className="w-1/3 mx-auto"/>
        <SectionTitle subHeading={"Check it Out"} heading={"Most Popular Classes"}></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE4z-dQLNA0CUqj4hasRGombTEaDrX5nYzKp_xQRAZ9ehLhCScSqOTsBX1SyeCjQ1m3k&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
               <Button name={"Buy Now"}></Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE4z-dQLNA0CUqj4hasRGombTEaDrX5nYzKp_xQRAZ9ehLhCScSqOTsBX1SyeCjQ1m3k&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE4z-dQLNA0CUqj4hasRGombTEaDrX5nYzKp_xQRAZ9ehLhCScSqOTsBX1SyeCjQ1m3k&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE4z-dQLNA0CUqj4hasRGombTEaDrX5nYzKp_xQRAZ9ehLhCScSqOTsBX1SyeCjQ1m3k&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE4z-dQLNA0CUqj4hasRGombTEaDrX5nYzKp_xQRAZ9ehLhCScSqOTsBX1SyeCjQ1m3k&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE4z-dQLNA0CUqj4hasRGombTEaDrX5nYzKp_xQRAZ9ehLhCScSqOTsBX1SyeCjQ1m3k&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularClasses;
