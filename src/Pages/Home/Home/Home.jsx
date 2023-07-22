import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import Banner from "../Banner/Banner";
import CollegeSection from "../CollegeSection/CollegeSection";

const Home = () => {
  return (
    <div className="py-24">
      <Banner />
      <PhotoGallery />
      <CollegeSection />
    </div>
  );
};

export default Home;
