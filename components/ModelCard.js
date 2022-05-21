import Link from "next/link";

const ModelCard = ({ model }) => (
  <li className="ModelCard">
    <Link href={model.href}>{model.name}</Link>
  </li>
);

export default ModelCard;
