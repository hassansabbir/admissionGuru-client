import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import CollegeCard from "../../../components/CollegeCard/CollegeCard";

const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/searchColleges?search=${search}`)
      .then((data) => setColleges(data.data));
  }, [search]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };

  return (
    <div className="px-5 md:px-0">
      <h2 className="text-3xl md:text-5xl text-center font-bold">
        Our Top Colleges
      </h2>
      <div className="border-4 mx-auto my-10 flex justify-between p-2 w-6/12 border-gray-500 rounded-full">
        <input
          className="mx-5 ps-5 w-full text-2xl"
          ref={searchRef}
          type="text"
          name="search"
          placeholder="search college"
        />
        <button onClick={handleSearch}>
          <div className=" bg-gray-500 text-white p-3 cursor-pointer rounded-full">
            <FaSearch className="w-5 h-5" />
          </div>
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
        {colleges.slice(0, 3).map((college) => (
          <CollegeCard key={college._id} college={college}></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default CollegeSection;
