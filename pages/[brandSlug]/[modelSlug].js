import { fetchRecorders, fetchRecorder } from "../../lib/data_client";

const Model = ({ recorder }) => {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>
          {recorder.Brand} {recorder.Model}
        </h1>
      </header>
      <div className="Page-content">TODO</div>
    </article>
  );
};

export async function getStaticPaths() {
  const recorders = await fetchRecorders();
  const paths = recorders.map((recorder) => ({
    params: { brandSlug: recorder.BrandSlug, modelSlug: recorder.ModelSlug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recorder = await fetchRecorder(params.brandSlug, params.modelSlug);

  return {
    props: {
      recorder,
    },
  };
}

export default Model;
