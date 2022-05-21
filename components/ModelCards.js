import ModelCard from "./ModelCard";

const ModelCards = ({ models }) => (
  <div className="ModelCards">
    {models.map((model) => (
      <ModelCard model={model} key={model.slug} />
    ))}
  </div>
);

export default ModelCards;
