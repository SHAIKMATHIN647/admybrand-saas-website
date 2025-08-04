interface SectionHeadingProps {
  title: string;
  highlightText: string;
  description: string;
}

export default function SectionHeading({ title, highlightText, description }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-5xl font-bold mb-6">
        {title}
        <span className="text-gradient block">{highlightText}</span>
      </h2>
      <p className="text-xl text-slate-300 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
