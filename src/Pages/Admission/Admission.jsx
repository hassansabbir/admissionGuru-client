import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/colleges`)
      .then((data) => setColleges(data.data));
  }, []);

  return (
    <div className="py-24">
      <h2 className="text-3xl md:text-5xl text-center my-10 font-bold">
        Admission Is Going On <br />{" "}
        <span className="text-3xl md:text-4xl">Book Your Seat Now!</span>
      </h2>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {colleges.map((college) => (
          <div key={college._id} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[500px] h-[250px]"
                src={college.collegeImage}
                alt="college"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold text-3xl">
                {college.collegeName}
              </h2>
              <p className="text-xl flex items-center gap-1">
                <span className="font-bold text-blue-800">Ratings: </span>
                {college.rating} /10 <FaStar />
              </p>
              <p className="text-xl">
                <span className="font-bold text-blue-800">
                  Admission Starts:
                </span>{" "}
                {college.admissionStarts}
              </p>
              <p className="text-xl">
                <span className="font-bold text-blue-800">Admission Ends:</span>{" "}
                {college.admissionEnds}
              </p>

              <Link to={`/details/${college._id}`}>
                <button className="btn w-full text-xl bg-blue-800 hover:bg-blue-600 text-white">
                  View Full Details
                </button>
              </Link>
              <Link to={`/booking/${college._id}`}>
                <button className="btn w-full text-xl bg-blue-800 hover:bg-blue-600 text-white">
                  Book your seat Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admission;
