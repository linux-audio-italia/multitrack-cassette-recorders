import Link from "next/link";

const BrandCard = ({ brand }) => (
  <div className="BrandCard">
    <Link href={brand.BrandUrl}>{brand.Brand}</Link>
  </div>
);

export default BrandCard;
