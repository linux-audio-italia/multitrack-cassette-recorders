import ModelCard from "./ModelCard";

const ModelCards = ({ models }) => (
  <ul className="ModelCards">
    {models.map((model) => (
      <ModelCard model={model} key={model.ModelUrl} />
    ))}
  </ul>
);

export default ModelCards;
