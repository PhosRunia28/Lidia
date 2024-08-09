import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type CardData = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
};
type Props = {
  card: CardData;
};
export default function FeatureCard({ card }: Props) {
  const Icon = card.icon;
  return (
    <Card className="border-0 shadow-none text-center">
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
    </Card>
  );
}
