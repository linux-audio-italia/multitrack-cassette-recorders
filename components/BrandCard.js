import Link from "next/link";

const BrandCard = ({ brand }) => {
  const n_models = brand.models.length;
  const n_models_label = n_models === 1 ? `1 model` : `${n_models} models`;

  return (
    <div className="BrandCard">
      <Link href={brand.href}>
        <a>
          <p>{brand.brand} </p>
          <p className="BrandCard-nmodels">{n_models_label}</p>
        </a>
      </Link>
    </div>
  );
};

export default BrandCard;
