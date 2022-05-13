import { fetchOnlyModels } from "../lib/data_client";
import ModelCards from "../components/ModelCards";

export default function Models({ recorders }) {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>A list of all models on this site</h1>
      </header>
      <div className="Page-content">
        <ModelCards models={recorders} />
      </div>
    </article>
  );
}

export async function getStaticProps() {
  const recorders = await fetchOnlyModels();

  return {
    props: {
      recorders,
    },
  };
}
