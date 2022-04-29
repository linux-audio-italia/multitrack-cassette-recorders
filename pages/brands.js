import { fetchUniqueBrands } from "../lib/data_client";
import Link from "next/link";

export default function Brands({ brands }) {
  return (
    <ul>
      {brands.map((brand) => (
        <li key={brand.BrandUrl}>
          <Link href={brand.BrandUrl}>{brand.Brand}</Link>
        </li>
      ))}
    </ul>
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
