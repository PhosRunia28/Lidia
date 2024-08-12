import { Services } from "@/data/Services";
import Service from "../common/Service";
import TitleSection from "../common/TitleSection";

export default function ServiceSection() {
  return (
    <section className="container">
        <div className="mb-32 flex flex-col gap-14 md:mb-36 md:gap-20 lg:mb-40">
          <TitleSection title="🚀• The Services for You" subtitle="services" />
          <div className="flex flex-col gap-14 md:gap-24 lg:gap-36">
            {Services.map((service, index) => (
              <Service service={service} key={index} />
            ))}
          </div>
        </div>
      </section>
  )
}
