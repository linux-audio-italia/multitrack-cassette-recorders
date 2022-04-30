import Link from "next/link";

const ModelCard = ({ model }) => (
  <li className="ModelCard">
    <Link href={model.ModelUrl}>{`${model.Brand} ${model.Model}`}</Link>
  </li>
);

export default ModelCard;
