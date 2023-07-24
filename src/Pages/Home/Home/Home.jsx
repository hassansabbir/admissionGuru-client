import { Helmet } from "react-helmet-async";
import PhotoGallery from "../../PhotoGallery/PhotoGallery";
import Banner from "../Banner/Banner";
import CollegeSection from "../CollegeSection/CollegeSection";
import ResearchDoc from "../ResearchDoc/ResearchDoc";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div className="py-24">
      <Helmet>
        <title>Home - AdmissionGuru</title>
      </Helmet>
      <Banner />
      <CollegeSection />
      <PhotoGallery />
      <ResearchDoc />
      <Reviews />
    </div>
  );
};

export default Home;
