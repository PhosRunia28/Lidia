import { Card, CardContent, CardHeader } from "@/components/ui/card";

type ReviewData = {
  image: string;
  testimonial: string;
  name: string;
  job: string;
};

type Props = {
  card: ReviewData;
};
export default function ReviewCard({ card }: Props) {
  const { image, testimonial, name, job } = card;
  return (
    <Card className="py-4 shadow-2xl">
      <CardHeader>
        <img
          src={image}
          alt={name}
          className="mx-auto w-full max-w-40 rounded-full bg-cover bg-center"
        />
      </CardHeader>
      <CardContent className="space-y-5 text-center">
        <p
          className="mx-auto w-full max-w-60 text-md font-medium text-desc"
          style={{ lineHeight: 1.8 }}
        >
          {testimonial}
        </p>
        <h5 className="text-md font-medium text-primary">{name}</h5>
        <h6 className="text-md font-medium text-heading">{job}</h6>
      </CardContent>
    </Card>
  );
}
