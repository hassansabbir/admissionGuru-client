import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Reviews from "./Reviews/Reviews";
import useProfile from "../../hooks/useProfile";
import { Helmet } from "react-helmet-async";

const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [myCollege] = useProfile();

  return (
    <div className="py-24">
      <Helmet>
        <title>My College - AdmissionGuru</title>
      </Helmet>
      <h2 className="text-3xl md:text-5xl font-bold my-10 text-center">
        My College
      </h2>
      <div>
        <img
          className="w-full rounded-3xl lg:h-[750px] "
          src={myCollege?.collegeData?.collegeImage}
          alt="myCollege"
        />
        <h2 className="text-4xl text-center font-bold mt-10">
          {myCollege?.collegeData?.collegeName}
        </h2>
        <p className="text-xl mx-16 my-10">
          <span className="font-bold text-blue-800 text-2xl">History: </span>{" "}
          <br />
          {myCollege?.collegeData?.researchHistory}
        </p>
      </div>
      <div className="px-5 md:px-10 lg:px-0">
        <h2 className="text-4xl my-10 font-bold">Popular Sports:</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {myCollege?.collegeData?.sports?.map((sport, i) => (
            <div
              className="bg-slate-100 p-10 shadow-lg hover:shadow-2xl rounded-3xl"
              key={i}
            >
              {" "}
              <img
                data-aos="zoom-in"
                data-aos-duration="1000"
                className="w-full md:w-7/12 lg:w-full md:mx-auto h-56 rounded-3xl"
                src={sport.sportsImage}
                alt=""
              />
              <h2 className="text-3xl font-bold my-5 text-center">
                {sport.name}
              </h2>
              <p className="text-xl text-center">{sport.details}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-0">
        <h2 className="text-4xl my-10 font-bold">Our Events:</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {myCollege?.collegeData?.events?.map((event, i) => (
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              className="bg-slate-200 p-10 shadow-lg hover:shadow-2xl rounded-3xl"
              key={i}
            >
              <h2 className="text-3xl font-bold">{event.name}</h2>
              <p className="text-xl my-2">{event.details}</p>
            </div>
          ))}
        </div>
      </div>

      {/* review section */}

      <div>
        <h2 className="text-5xl text-center font-bold my-16">Review</h2>
      </div>
      <Reviews user={user} myCollege={myCollege?.collegeData} />
    </div>
  );
};

export default MyCollege;
