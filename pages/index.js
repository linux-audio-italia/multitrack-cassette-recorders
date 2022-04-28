import { fetchUniqueBrands } from '../lib/data_client'
import Link from 'next/link'
import slugify from '../lib/slugify';

export default function Home({ brands }) {
  return (
    <div>
      <aside>
        <ul>
          {brands.map((brand, i) => (
            <li key={i}>
              <Link href={`/recorders/${slugify(brand)}`}>
                {brand}
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
