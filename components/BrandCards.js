import BrandCard from "./BrandCard";

const BrandCards = ({ brands }) => (
  <div className="BrandCards">
    {brands.map((brand) => (
      <BrandCard brand={brand} key={brand.slug} />
    ))}
  </div>
);

export default BrandCards;
