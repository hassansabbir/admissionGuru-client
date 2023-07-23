import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import Banner from "../Banner/Banner";
import CollegeSection from "../CollegeSection/CollegeSection";
import ResearchDoc from "../ResearchDoc/ResearchDoc";

const Home = () => {
  return (
    <div className="py-24">
      <Banner />
      <PhotoGallery />
      <CollegeSection />
      <ResearchDoc />
    </div>
  );
};

export default Home;
