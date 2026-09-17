interface SectionTitleProps {
  title: string;
  description?: string;
}

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="section-title">
      <h2 className="h2">{title}</h2>
      {description && <p className="lead">{description}</p>}
    </div>
  );
}
