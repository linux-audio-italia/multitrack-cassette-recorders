import Link from "next/link";

const ModelCard = ({ model }) => (
  <div className="ModelCard">
    <Link href={model.href}>{model.name}</Link>
  </div>
);

export default ModelCard;
