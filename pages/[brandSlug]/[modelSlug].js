import { fetchRecorders, fetchRecorder } from "../../lib/data_client";

const Model = ({ recorder, error }) =>
  error === null ? (
    <article className="Page">
      <header className="Page-head">
        <h1>
          {recorder.brand} {recorder.name}
        </h1>
      </header>
      <div className="Page-content">TODO</div>
    </article>
  ) : (
    <article className="Page">
      <header className="Page-head">
        <h1>This recorder data is missing.</h1>
      </header>
      <div className="Page-content">
        <p>If you want to add data for this model, you can...</p>
      </div>
    </article>
  );

export async function getStaticPaths() {
  const brands = await fetchRecorders();
  const paths = brands.flatMap((brand) =>
    brand.models.map((model) => ({
      params: {
        brandSlug: brand.slug,
        modelSlug: model.slug,
      },
    }))
  );

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [error, data] = await fetchRecorder(params.brandSlug, params.modelSlug);
  const recorder = data.pop() || null;

  return {
    props: {
      recorder,
      error,
    },
  };
}

export default Model;
