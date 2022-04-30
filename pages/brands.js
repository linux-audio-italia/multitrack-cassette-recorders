import { fetchUniqueBrands } from "../lib/data_client";
import BrandsList from "../components/BrandsList";

export default function Brands({ brands }) {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>Select recorders by brand</h1>
      </header>
      <div className="Page-content">
        <BrandsList brands={brands} />
      </div>
    </article>
  );
}

export async function getStaticProps() {
  const brands = await fetchUniqueBrands();

  return {
    props: {
      brands,
    },
  };
}
