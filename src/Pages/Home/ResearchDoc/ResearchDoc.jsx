import axios from "axios";
import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";

const ResearchDoc = () => {
  const [researches, setResearches] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/researches`)
      .then((data) => setResearches(data.data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="text-3xl md:text-5xl my-16 text-center font-bold">
        Our Recommended <br /> Researches by Students
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5 px-5 gap-5">
        {researches.map((research) => (
          <div
            className="bg-slate-100 rounded-3xl shadow-md hover:shadow-xl p-5"
            key={research._id}
          >
            <h2 className="text-3xl my-5 font-bold">
              {research.researchPapers[0].title}
            </h2>
            <h3 className="text-2xl">
              <span className="font-bold text-blue-800">Author: </span>
              <br />
              {research.researchPapers[0].author}
            </h3>
            <p className="text-2xl">
              <span className="font-bold text-blue-800">College:</span>
              <br />
              {research.collegeName}
            </p>
            <div className="text-end">
              <button className="btn w-full mt-5 bg-blue-800 text-white">
                Visit Link <FaLink />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchDoc;
