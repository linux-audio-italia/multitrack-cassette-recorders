import Link from "next/link";

const BrandsList = ({ brands }) => (
  <ul>
    {brands.map((brand) => (
      <li key={brand.BrandSlug}>
        <Link href={brand.BrandUrl}>{brand.Brand}</Link>
      </li>
    ))}
  </ul>
);

export default BrandsList;
