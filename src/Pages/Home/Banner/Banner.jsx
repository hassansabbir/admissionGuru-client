import bannerImg from "./../../../assets/29808764_7606072.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-5xl ">AdmissionGuru</h2>
      </div>
      <img className="w-6/12" src={bannerImg} alt="bannerImg" />
    </div>
  );
};

export default Banner;
