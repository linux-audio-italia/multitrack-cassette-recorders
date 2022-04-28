import { useRouter } from 'next/router'
import { fetchRecordersBy, fetchUniqueBrands } from '../../lib/data_client';
import slugify from '../../lib/slugify';
import Link from 'next/link'

const Brand = ({recorders}) => {
  const router = useRouter()
  const { brand } = router.query

  return (
    <div>
      <p>Brand: {brand}</p>
      <ul>
        {recorders.map((recorder, i) => (
          <li key={i}>
            <Link href={`/recorders/${recorder.BrandSlug}/${recorder.ModelSlug}`}>
              {recorder.Model}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const brands = await fetchUniqueBrands();
  const paths = brands.map(brand => ({
    params: { brand: slugify(brand) },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const recorders = await fetchRecordersBy(params.brand);

  return {
    props: {
      recorders,
    },
  }
}

export default Brand
