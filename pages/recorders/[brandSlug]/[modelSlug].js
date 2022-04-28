import {fetchRecorders, fetchRecorder} from '../../../lib/data_client';

const Model = ({recorder}) => {
  return (
    <div>
      Hello, {recorder.Brand} {recorder.Model}.
    </div>
  );
}

export async function getStaticPaths() {
  const recorders = await fetchRecorders();
  const paths = recorders.map(recorder => ({
    params: { brandSlug: recorder.BrandSlug, modelSlug: recorder.ModelSlug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const recorder = await fetchRecorder(params.brandSlug, params.modelSlug);

  return {
    props: {
      recorder,
    },
  }
}

export default Model
