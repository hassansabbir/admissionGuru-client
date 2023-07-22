import axios from "axios";
import { useEffect, useState } from "react";
import CollegeCard from "../../components/CollegeCard/CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/colleges`)
      .then((data) => setColleges(data.data));
  }, []);

  return (
    <div className="py-24">
      <h2 className="text-3xl md:text-5xl font-bold my-10 text-center">
        All Top Colleges
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
