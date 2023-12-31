import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    _id,
    collegeName,
    collegeImage,
    researchHistory,
    admissionStarts,
    admissionEnds,
    events,
    sports,
    rating,
  } = college;

  return (
    <div className="card md:w-[450px] bg-slate-50 shadow-xl hover:shadow-2xl">
      <figure>
        <img
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="w-[450px] h-[300px]"
          src={collegeImage}
          alt="colleges"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl font-bold mb-5 text-center ">
          {collegeName}
        </h2>
        <p className=" line-clamp-2 text-lg">
          <span className="font-bold text-blue-800">History:</span>{" "}
          {researchHistory}
        </p>
        <h2 className="text-lg">
          <span className="font-bold flex gap-1 items-center text-blue-800">
            Ratings: {rating} <FaStar />
          </span>
        </h2>
        <h2 className="text-left mt-5 text-lg">
          <span className="font-bold text-blue-800">Admission Starts</span>:{" "}
          {admissionStarts}
        </h2>
        <h2 className="text-left mb-5 text-lg">
          <span className="font-bold text-blue-800">Admission Ends</span>:{" "}
          {admissionEnds}
        </h2>
        <div className="md:flex gap-5 text-lg">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="bg-slate-100 p-2 w-3/6 shadow-lg rounded-3xl"
          >
            <h2 className="font-bold text-blue-800">Our Events:</h2>
            {events.map((event, i) => (
              <li key={i}>{event.name}</li>
            ))}
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bg-slate-100 mt-5 md:mt-0 p-2 w-3/6 shadow-lg rounded-3xl"
          >
            <h2 className="font-bold text-blue-800">Our Sports:</h2>
            {sports.map((sport, i) => (
              <li key={i}>{sport.name}</li>
            ))}
          </div>
        </div>
        <Link to={`/details/${_id}`}>
          <button className="btn w-full mt-5 bg-blue-800 hover:bg-blue-600 text-xl text-white">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
