import bannerImg from "./../../../assets/29808764_7606072.jpg";

const Banner = () => {
  return (
    <div className="lg:flex items-center justify-between p-5 lg:p-0 lg:h-[550px]">
      <div className="">
        <h2 className="text-5xl text-blue-800 font-bold">AdmissionGuru</h2>
        <p className="text-2xl my-5">
          Discover your dream college at AdmissionGuru! 🎓 <br /> Explore
          prestigious universities and institutions, compare details, and make
          an informed decision. Unleash your potential and find the perfect
          match for your future. Join us on this exciting educational journey.
          Your dream college awaits.
        </p>
        <p className="text-2xl my-5">Start exploring now! 🚀🌟</p>
        <div className="space-x-2">
          <button className="btn bg-blue-800 hover:bg-blue-700 text-white">
            Explore More
          </button>
          <button className="btn bg-blue-800 hover:bg-blue-700 text-white">
            See All Colleges
          </button>
        </div>
      </div>
      <img className="lg:w-5/12" src={bannerImg} alt="bannerImg" />
    </div>
  );
};

export default Banner;
