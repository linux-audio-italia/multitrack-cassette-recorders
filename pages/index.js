import { fetchUniqueBrands } from '../lib/data_client'
import Link from 'next/link'

export default function Home({ brands }) {
  return (
    <div>
      <aside>
        <ul>
          {brands.map(brand => (
            <li key={brand.BrandSlug}>
              <Link href={`/recorders/${brand.BrandSlug}`}>
                {brand.Brand}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export async function getStaticProps() {
  const brands = await fetchUniqueBrands();

  return {
    props: {
      brands,
    },
  }
}
