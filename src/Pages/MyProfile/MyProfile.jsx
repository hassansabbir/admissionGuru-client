import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import useProfile from "../../hooks/useProfile";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [myProfile] = useProfile();

  return (
    <>
      <Helmet>
        <title>Profile - AdmissionGuru</title>
      </Helmet>
      <div className="pt-28 md:flex justify-center items-center px-5 gap-10">
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          className="md:w-1/6 rounded-full"
          src={user?.photoURL}
          alt=""
        />
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            {myProfile[0]?.name}
          </h2>
          <p className="md:text-2xl  underline">{myProfile[0]?.email}</p>
          <div className="my-10">
            <h2 className="text-2xl md:text-3xl">
              <span className="font-bold text-blue-800">Contact Number:</span>
              {myProfile[0]?.phone}
            </h2>
            <h2 className="text-2xl md:text-3xl">
              <span className="font-bold text-blue-800">Date Of Birth: </span>{" "}
              {moment(myProfile[0]?.bDate).format("l")}
            </h2>
            <h2 className="text-2xl md:text-3xl">
              <span className="font-bold text-blue-800">Address: </span>{" "}
              {myProfile[0]?.address}
            </h2>
          </div>
        </div>
        <Link to="/editProfile">
          <button className="btn bg-blue-800 hover:bg-blue-600 text-white">
            Edit Details
          </button>
        </Link>
      </div>
      <h2 className="text-4xl text-center font-bold my-10">My College</h2>
      <div className="md:flex items-center px-5 mb-20 gap-10">
        <img
          className="md:w-3/6"
          src={myProfile?.collegeData?.collegeImage}
          alt=""
        />
        <div>
          <h2 className="text-3xl md:text-5xl font-bold">
            {myProfile[0]?.collegeName}
          </h2>
          <p className="text-3xl my-10">
            <span className="font-bold text-blue-800">College Details:</span>{" "}
            {myProfile?.collegeData?.collegeDetails}
          </p>
          <h2 className="text-3xl">
            <span className="font-bold text-blue-800">Booked Subject:</span>{" "}
            {myProfile[0]?.subject}
          </h2>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
