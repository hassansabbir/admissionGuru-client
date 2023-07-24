import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import Rating from "react-rating";
import { FaQuoteLeft, FaRegStar, FaStar } from "react-icons/fa";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/reviews`)
      .then((data) => setReviews(data.data));
  }, []);

  return (
    <div className="my-16">
      <h2 className="text-5xl font-bold my-10 text-center">
        Reviews of Top Colleges
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id} className="gap-5 py-20 flex-col">
              <div className="flex gap-10 items-center">
                <div className="rounded-full">
                  <img
                    className="rounded-full w-10 h-10"
                    src={review.photoUrl}
                    alt="profileImg"
                  />
                </div>
                <div>
                  <h2 className="text-4xl font-bold">{review.name}</h2>
                  <p>{review.email}</p>
                </div>
              </div>

              <div className="bg-slate-100 p-10 rounded-3xl">
                <p className="text-3xl font-bold">{review.ratedCollege}</p>
                <div className="">
                  <Rating
                    placeholderRating={review.rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className="text-orange-600" />}
                    fullSymbol={<FaStar />}
                    readonly
                  />
                </div>
                <div className="flex flex-col items-center mt-10">
                  <FaQuoteLeft className="w-8 h-8" />
                  <p className="text-3xl my-10">{review.feedback}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Reviews;
