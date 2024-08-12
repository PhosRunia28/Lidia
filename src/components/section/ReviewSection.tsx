import { Reviews } from "@/data/Reviews";
import ReviewCard from "../common/ReviewCard";
import TitleSection from "../common/TitleSection";

export default function ReviewSection() {
  return (
    <section className="container">
        <div className="mb-32 flex flex-col gap-14 md:mb-36 md:gap-20 lg:mb-40">
          <TitleSection title="💬• Reviews of Others" subtitle="reviews" />
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-16 lg:grid-cols-3">
            {Reviews.map((review, index) => (
              <ReviewCard card={review} key={index} />
            ))}
          </div>
        </div>
      </section>
  )
}
