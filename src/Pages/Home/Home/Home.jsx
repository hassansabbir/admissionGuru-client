import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import Banner from "../Banner/Banner";
import CollegeSection from "../CollegeSection/CollegeSection";
import ResearchDoc from "../ResearchDoc/ResearchDoc";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="py-24">
      <Banner />
      <CollegeSection />
      <PhotoGallery />
      <ResearchDoc />
      <Reviews />
    </div>
  );
};

export default Home;
