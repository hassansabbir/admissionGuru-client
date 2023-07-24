import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Reviews from "./Reviews/Reviews";

const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [myCollege, setMyCollege] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/allBookings/${user?.email}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => setMyCollege(data.collegeData));
  }, [user]);
  console.log(myCollege);

  return (
    <div className="py-24">
      <h2 className="text-5xl font-bold my-10 text-center">My College</h2>
      <div>
        <img
          className="w-full rounded-3xl md:h-[750px] "
          src={myCollege.collegeImage}
          alt="myCollege"
        />
        <h2 className="text-4xl text-center font-bold mt-10">
          {myCollege.collegeName}
        </h2>
        <p className="text-xl mx-16 my-10">
          <span className="font-bold text-blue-800 text-2xl">History: </span>{" "}
          <br />
          {myCollege.researchHistory}
        </p>
      </div>
      <div className="px-5 md:px-0">
        <h2 className="text-4xl my-10 font-bold">Popular Sports:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {myCollege?.sports?.map((sport, i) => (
            <div
              className="bg-slate-100 p-10 shadow-lg hover:shadow-2xl rounded-3xl"
              key={i}
            >
              {" "}
              <img
                className="w-full h-56 rounded-3xl"
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
      <div className="px-5 md:px-0">
        <h2 className="text-4xl my-10 font-bold">Our Events:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {myCollege?.events?.map((event, i) => (
            <div
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
      <Reviews />
    </div>
  );
};

export default MyCollege;
