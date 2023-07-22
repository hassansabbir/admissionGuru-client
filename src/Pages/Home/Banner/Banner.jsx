import bannerImg from "./../../../assets/29808764_7606072.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-5xl ">AdmissionGuru</h2>
        <p className="text-2xl">
          Discover your dream college at AdmissionGuru! 🎓 <br /> Explore
          prestigious universities and institutions, compare details, and make
          an informed decision. Unleash your potential and find the perfect
          match for your future. Join us on this exciting educational journey.
          Your dream college awaits.
        </p>
        <p className="text-2xl">Start exploring now! 🚀🌟</p>
      </div>
      <img className="w-4/12" src={bannerImg} alt="bannerImg" />
    </div>
  );
};

export default Banner;
