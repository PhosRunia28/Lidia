import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="container">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center lg:items-start lg:gap-0">
        {/* left */}
        <div className="relative z-20 flex w-full flex-col gap-10">
          <h2 className="w-full max-w-md text-5xl font-extrabold leading-tight text-heading lg:max-w-full xl:text-6xl">
            Search & review your{" "}
            <span className="text-primary underline">fav book</span>{" "}
            effortlessly
          </h2>
          <p className="w-full max-w-md text-sm leading-[1.8] text-desc md:max-w-lg lg:text-md lg:leading-[1.8]">
            Embark on a literary journey like never before with our
            revolutionary library application! Introducing a seamless experience
            that transcends traditional boundaries, where you can effortlessly
            search your favorite books.✨
          </p>
          <Button
            className="flex w-full max-w-fit items-center gap-1 py-7 shadow-lg shadow-primary"
            size="lg"
          >
            Start now <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        {/* right */}
        <div className="relative z-20 grid w-full grid-cols-2 sm:grid-cols-3 md:sm:grid-cols-2 lg:h-screen">
          <img
            src="./book1.png"
            alt="book 1"
            className="-left-[25px] bottom-[30px] w-full max-w-sm bg-cover bg-center lg:absolute lg:max-w-48 xl:max-w-60"
          />
          <img
            src="./book2.png"
            alt="book 2"
            className="w-full max-w-sm bg-cover bg-center lg:absolute lg:-top-[8px] lg:left-1/2 lg:max-w-44 lg:-translate-x-1/2 xl:max-w-48"
          />
          <img
            src="./book3.png"
            alt="book 3"
            className="w-full max-w-sm bg-cover bg-center lg:absolute lg:-right-[18px] lg:top-[125px] lg:max-w-44 xl:max-w-48"
          />
          <img
            src="./book4.png"
            alt="book 4"
            className="w-full max-w-sm bg-cover bg-center lg:absolute lg:bottom-[25px] lg:right-[46%] lg:max-w-36 lg:translate-x-1/2 xl:right-[42%] xl:max-w-40"
          />
          {/* background rounded*/}
          <div className="clipped2 absolute bottom-0 left-0 -z-10 ml-12 hidden h-full w-full rounded-bl-[3rem] bg-primary/90 lg:block"></div>
        </div>
      </div>
      {/* background */}
      <div className="clipped absolute right-0 top-0 hidden h-full w-full bg-primary shadow-lg lg:block lg:w-1/2"></div>
    </section>
  );
}
