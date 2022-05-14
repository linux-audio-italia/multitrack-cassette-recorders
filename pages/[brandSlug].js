import { fetchRecorders, fetchRecordersBy } from "../lib/data_client";
import ModelCards from "../components/ModelCards";

const Brand = ({ brand }) => {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>All the models of {brand.brand}</h1>
      </header>
      <div className="Page-content">
        <ModelCards models={brand.models} />
      </div>
    </article>
  );
};

export async function getStaticPaths() {
  const brands = await fetchRecorders();
  const paths = brands.map((brand) => ({
    params: { brandSlug: brand.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => ({
  props: { brand: await fetchRecordersBy(params.brandSlug) },
});

export default Brand;
