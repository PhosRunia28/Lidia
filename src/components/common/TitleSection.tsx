type Props = {
  title: string;
  subtitle: string;
};
export default function TitleSection({ title, subtitle }: Props) {
  return (
    <div className="flex flex-col gap-1 font-extrabold">
      <h4 className="text-md uppercase tracking-widest text-primary lg:text-lg">
        {subtitle}
      </h4>
      <h3 className="text-3xl sm:text-4xl lg:text-5xl">{title}</h3>
    </div>
  );
}
