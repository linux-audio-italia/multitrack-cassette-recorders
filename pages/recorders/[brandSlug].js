import { fetchRecordersBy, fetchUniqueBrands } from "../../lib/data_client";
import Link from "next/link";

const Brand = ({ recorders }) => {
  const brandName = recorders[0].Brand;

  return (
    <>
      <p>Brand: {brandName}</p>
      <ul>
        {recorders.map((recorder) => (
          <li key={recorder.ModelSlug}>
            <Link href={recorder.ModelUrl}>{recorder.Model}</Link>
          </li>
        ))}
      </ul>
    </>
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
