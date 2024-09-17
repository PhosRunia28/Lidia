import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
type CardData = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};
type Props = {
  card: CardData;
  index: number;
};
export default function FeatureCard({ card, index }: Props) {
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.25 * index,
      },
    },
  };
  const Icon = card.icon;
  const MotionCard = motion(Card);
  return (
    <MotionCard
      className="border-0 text-center shadow-none"
      variants={item}
      initial="hidden"
      whileInView="show"
    >
      <CardHeader className="space-y-4">
        <div className="mx-auto w-full max-w-fit rounded-2xl bg-primary p-6 shadow-2xl">
          <Icon className="h-10 w-10 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mx-auto w-full max-w-[14rem] text-sm font-medium leading-[1.8] text-desc">
          {card.desc}
        </p>
      </CardContent>
    </MotionCard>
  );
}
