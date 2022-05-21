import { fetchRecorders } from "../lib/data_client";
import BrandCards from "../components/BrandCards";

export default function Brands({ brands }) {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>Select recorders by brand</h1>
      </header>
      <div className="Page-content">
        <p>Click on a brand to see a list of its models.</p>
        <BrandCards brands={brands} />
      </div>
    </article>
  );
}

export const getStaticProps = async () => ({
  props: { brands: await fetchRecorders() },
});
