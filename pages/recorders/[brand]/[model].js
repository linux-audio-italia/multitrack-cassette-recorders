import {fetchRecorders, fetchRecorder} from '../../../lib/data_client';
import slugify from '../../../lib/slugify';

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
    params: { brand: slugify(recorder.Brand), model: slugify(recorder.Model) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const recorder = await fetchRecorder(params.brand, params.model);

  return {
    props: {
      recorder,
    },
  }
}

export default Model
