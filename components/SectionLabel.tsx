type SectionLabelProps = {
  children: React.ReactNode;
  index?: string;
  id?: string;
};

export function SectionLabel({ children, index, id }: SectionLabelProps) {
  return (
    <div className="section-label" id={id} data-reveal="label">
      <h2>{children}</h2>
      {index ? <span aria-hidden="true">{index}</span> : null}
    </div>
  );
}
