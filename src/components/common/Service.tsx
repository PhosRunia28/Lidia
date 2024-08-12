import { cn } from "@/lib/utils";

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
      <img
        src={image}
        alt={`Image for ${title}`}
        className="mx-auto w-full max-w-lg rounded-xl bg-cover bg-center shadow-2xl lg:mx-0 lg:max-w-none"
      />
      <div className="flex w-full flex-col gap-8">
        <h4 className="w-full max-w-sm text-3xl font-medium sm:mx-auto sm:text-center lg:mx-0 lg:max-w-[23rem] lg:text-left">
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
      </div>
    </div>
  );
}
