import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

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
          className="w-full rounded-3xl md:h-[800px] "
          src={myCollege.collegeImage}
          alt="myCollege"
        />
      </div>
    </div>
  );
};

export default MyCollege;
