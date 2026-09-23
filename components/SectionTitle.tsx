type Props = {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
}: Props) {
  return (
    <div className={`section-title section-title-${align}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>
        {title} {accent ? <span>{accent}</span> : null}
      </h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
