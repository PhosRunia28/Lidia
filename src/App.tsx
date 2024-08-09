import FeatureSection from "./components/section/FeatureSection";
import Header from "./components/section/Header";
import HeroSection from "./components/section/HeroSection";
function App() {
  return (
    <>
      <div className="relative">
        <Header />
        <HeroSection />
      </div>
      <FeatureSection />
    </>
  );
}

export default App;
