import Link from "next/link";

const BrandCard = ({ brand }) => {
  const n_models = brand.models.length;
  const n_models_label = n_models === 1 ? `1 model` : `${n_models} models`;
  const pic = brand.image ? (
    <div
      className="BrandCard-picture"
      style={{ backgroundImage: `url(${brand.image})` }}
    />
  ) : (
    <p className="BrandCard-picture">{brand.brand}</p>
  );

  return (
    <div className="BrandCard">
      <Link href={brand.href}>
        <a>
          {pic}
          <p className="BrandCard-nmodels">{n_models_label}</p>
        </a>
      </Link>
    </div>
  );
};

export default BrandCard;
