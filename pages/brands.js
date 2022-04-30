import { fetchUniqueBrands } from "../lib/data_client";
import Link from "next/link";

export default function Brands({ brands }) {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>Select recorders by brand</h1>
      </header>
      <div className="Page-content">
        <ul>
          {brands.map((brand) => (
            <li key={brand.BrandUrl}>
              <Link href={brand.BrandUrl}>{brand.Brand}</Link>
            </li>
          ))}
        </ul>
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
