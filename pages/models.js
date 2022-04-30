import { fetchRecorders } from "../lib/data_client";
import ModelCards from "../components/ModelCards";

export default function Models({ models }) {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>A list of all models on this site</h1>
      </header>
      <div className="Page-content">
        <ModelCards models={models} />
      </div>
    </article>
  );
}

export async function getStaticProps() {
  const models = await fetchRecorders();

  return {
    props: {
      models,
    },
  };
}
