import {
  fetchRecorders,
  fetchRecorderDetails,
  fetchRecorderBy,
} from "../../lib/data_client";

import ModelDetail from "../../components/ModelDetail.js";
import ModelNotFound from "../../components/ModelNotFound.js";

const Model = ({ recorder, recorderDetails, error }) =>
  error === null ? (
    <ModelDetail
      recorder={recorderDetails}
      images={recorder.images}
      recorderOriginal={recorder}
    />
  ) : (
    <ModelNotFound recorder={recorder} />
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
  const recorder = await fetchRecorderBy(params.brandSlug, params.modelSlug);
  const [error, data] = await fetchRecorderDetails(
    params.brandSlug,
    params.modelSlug
  );
  const recorderDetails = data.pop() || null;

  return {
    props: {
      recorder,
      recorderDetails,
      error,
    },
  };
}

export default Model;
