import { Features } from "@/data/Features";
import FeatureCard from "../common/FeatureCard";
import TitleSection from "../common/TitleSection";

export default function FeatureSection() {
  return (
    <section className="container">
      <div className="mb-32 flex flex-col gap-10 sm:mb-40 md:gap-20">
        <TitleSection title="🤔• What You Can Do?" subtitle="features" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {Features.map((feature, index) => (
            <FeatureCard card={feature} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
