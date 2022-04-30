import { fetchRecorders } from "../lib/data_client";
import Link from "next/link";

export default function Models({ models }) {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>A list of all models on this site</h1>
      </header>
      <div className="Page-content">
        <ul>
          {models.map((model) => (
            <li key={model.ModelUrl}>
              <Link
                href={model.ModelUrl}
              >{`${model.Brand} ${model.Model}`}</Link>
            </li>
          ))}
        </ul>
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
