import { fetchRecordersBy, fetchUniqueBrands } from "../lib/data_client";
import ModelCards from "../components/ModelCards";
import Link from "next/link";

const Brand = ({ recorders }) => {
  const brandName = recorders[0].Brand;

  return (
    <article className="Page">
      <header className="Page-head">
        <h1>All the models of {brandName}</h1>
      </header>
      <div className="Page-content">
        <ModelCards models={recorders} />
      </div>
    </article>
  );
};

export async function getStaticPaths() {
  const brands = await fetchUniqueBrands();
  const paths = brands.map((brand) => ({
    params: { brandSlug: brand.BrandSlug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const recorders = await fetchRecordersBy(params.brandSlug);

  return {
    props: {
      recorders,
    },
  };
}

export default Brand;
