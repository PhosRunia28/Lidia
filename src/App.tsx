import Copyright from "./components/section/Copyright";
import FeatureSection from "./components/section/FeatureSection";
import FooterSection from "./components/section/FooterSection";
import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
import LocationSection from "./components/section/LocationSection";
import ReviewSection from "./components/section/ReviewSection";
import ServiceSection from "./components/section/ServiceSection";
function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
      <FeatureSection />
      <ServiceSection />
      <ReviewSection />
      <LocationSection />
      <FooterSection />
      <Copyright />
    </>
  );
}

export default App;
