import photo1 from "../../assets/img1.jpg";
import photo2 from "../../assets/img2.jpg";
import photo3 from "../../assets/img3.jpg";
import photo4 from "../../assets/img4.jpg";
import photo5 from "../../assets/img5.jpg";
import photo6 from "../../assets/img6.jpg";
import photo7 from "../../assets/img7.jpg";
import photo8 from "../../assets/img8.jpg";
import photo9 from "../../assets/img9.jpg";

const PhotoGallery = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Graduation Ceremony Gallery
      </h2>
      <p className="text-2xl text-center px-5 md:px-28 my-7">
        Celebrate the Moments of Success! 🎓 Step into our Graduation Ceremony
        Gallery and relive the joy and pride of countless graduates as they
        embark on a new chapter. Browse through heartwarming moments of
        achievement, beaming smiles, and inspiring commencement speeches. Join
        us in honoring the hard work and dedication of our graduates, as they
        make us proud with their accomplishments. Witness the essence of success
        captured in these memorable snapshots. Congratulations to the Class of
        2022! 🎉🌟
      </p>
      <div className="grid grid-cols-3 gap-6 p-10 ">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo1}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo2}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo3}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo4}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo5}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo6}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo7}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo8}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="rounded-xl shadow-2xl transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          src={photo9}
          alt=""
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
