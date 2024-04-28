interface CardCustomProps {
  desc: string;
  link: string;
}

const CardCustom = ({ desc, link }: CardCustomProps) => {
  return (
    <a href={link} target="_blank" className="card-link">
      <div className="card">
        <p className="description">{desc}</p>
      </div>
    </a>
  );
};

export default CardCustom;
