import FeatureSection from "./components/section/FeatureSection";
import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
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
    </>
  );
}

export default App;
