// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SectionTitle from "../../../../SectionTitle/SectionTitle";
import Button from "../../../../Button/Button";
import "./PopularClasses.css"; // Create a CSS file for custom styles

const PopularClasses = () => {
  return (
    <div
      className="container mx-auto"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <hr className="w-1/3 mx-auto" />
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Most Popular Classes"}
      />
      <Swiper
        autoplay
        slidesPerView={1} // Display one card at a time on mobile
        spaceBetween={10} // Reduce the space between cards
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-10 "
      >
        <SwiperSlide>
          <div className="card bg-base-100 shadow-xl pt-10">
            <figure>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE4z-dQLNA0CUqj4hasRGombTEaDrX5nYzKp_xQRAZ9ehLhCScSqOTsBX1SyeCjQ1m3k&usqp=CAU"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes, whose shoes does he choose?</p>
              <div className="card-actions">
                <Button name={"Buy Now"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://example.com/image2.jpg"
                alt="Card 2"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card 2</h2>
              <p>Description for Card 2</p>
              <div className="card-actions">
                <Button name={"Buy Now"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://example.com/image3.jpg"
                alt="Card 3"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card 3</h2>
              <p>Description for Card 3</p>
              <div className="card-actions">
                <Button name={"Buy Now"} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Add more SwiperSlides for other cards */}
        {/* Example: */}
        {/* <SwiperSlide>
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://example.com/image4.jpg"
                alt="Card 4"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Card 4</h2>
              <p>Description for Card 4</p>
              <div className="card-actions">
                <Button name={"Buy Now"} />
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default PopularClasses;
