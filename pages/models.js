import { fetchRecorders } from "../lib/data_client";
import ModelCards from "../components/ModelCards";

export default function Models({ recorders }) {
  const toc = (
    <nav className="Page-toc">
      {recorders.map((r) => (
        <a key={r.slug} href={`#${r.slug}`}>
          {r.brand}
        </a>
      ))}
    </nav>
  );

  return (
    <article className="Page">
      <header className="Page-head">
        <h1>A list of all models on this site</h1>
      </header>
      <div className="Page-content">
        {toc}
        {recorders.map((record) => (
          <div key={record.brand} id={record.slug}>
            <h2>{record.brand}</h2>
            <ModelCards models={record.models} />
          </div>
        ))}
      </div>
    </article>
  );
}

export const getStaticProps = async () => ({
  props: { recorders: await fetchRecorders() },
});
