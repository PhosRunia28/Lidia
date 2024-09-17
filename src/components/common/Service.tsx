import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
type ServiceData = {
  desc1: string;
  desc2: string;
  image: string;
  title: string;
  pos: "left" | "right";
  highlights: string[];
};

type Props = {
  service: ServiceData;
};
export default function Service({ service }: Props) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const { scrollYProgress: leftSideProgress } = useScroll({
    target: leftRef,
    offset: ["end end", "start end"],
  });
  const { scrollYProgress: rightSideProgress } = useScroll({
    target: rightRef,
    offset: ["end end", "start end"],
  });
  // left transform
  const leftSide = useTransform(leftSideProgress, [0, 1], [0, 200]);
  const opacityLeft = useTransform(leftSideProgress, [0, 1], [1, 0]);
  // right transform
  const opacityRight = useTransform(rightSideProgress, [0, 1], [1, 0]);
  const rightSide = useTransform(rightSideProgress, [0, 1], [0, -200]);

  const { desc1, desc2, image, title, highlights, pos } = service;
  const renderTitle = () => {
    return title
      .split(new RegExp(`(${highlights.join("|")})`, "gi"))
      .map((part, index) =>
        highlights.includes(part) ? (
          <span key={index} className="text-primary">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      );
  };
  return (
    <div
      className={cn("flex flex-col gap-10 lg:gap-14 xl:gap-28", {
        "lg:flex-row-reverse": pos === "right",
        "lg:flex-row": pos === "left",
      })}
    >
      <motion.img
        ref={pos === "left" ? leftRef : rightRef}
        style={{
          opacity: pos === "left" ? opacityLeft : opacityRight,
          x: pos === "left" ? leftSide : rightSide,
        }}
        src={image}
        alt={`Image for ${title}`}
        className="mx-auto w-full max-w-lg rounded-xl bg-cover bg-center shadow-2xl lg:mx-0 lg:max-w-none"
      />
      <motion.div
        ref={pos === "left" ? rightRef : leftRef}
        style={{
          opacity: pos === "left" ? opacityRight : opacityLeft,
          x: pos === "left" ? rightSide : leftSide,
        }}
        className="flex w-full flex-col gap-8"
      >
        <h4 className="w-fit max-w-sm text-3xl font-medium sm:mx-auto sm:text-center lg:mx-0 lg:max-w-[23rem] lg:text-left">
          {renderTitle()}
        </h4>
        <div className="space-y-5">
          <p
            className="w-full max-w-lg text-md text-desc sm:mx-auto lg:mx-0 lg:max-w-[25rem]"
            style={{ lineHeight: 1.9 }}
          >
            {desc1}
          </p>
          <p
            className="w-full max-w-lg text-md text-desc sm:mx-auto lg:mx-0 lg:max-w-[25rem]"
            style={{ lineHeight: 1.9 }}
          >
            {desc2}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
