import { fetchUniqueBrands } from "../lib/data_client";
import Link from "next/link";
import BrandsList from "../components/BrandsList";

export default function Home({ brands }) {
  return (
    <article className="Page">
      <header className="Page-head">
        <h1>Multitrack Cassette Recorders</h1>
      </header>
      <div className="Page-content">
        <p>
          We collect data about old <b>multi track cassette recorders</b>, those
          devices were the very first portable recording studios.
        </p>
        <p>
          You can browse <Link href="/models">all the models</Link>, or{" "}
          <Link href="/brands">select them by the brand</Link>.
        </p>
      </div>
      <aside>
        <BrandsList brands={brands} />
      </aside>
    </article>
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
