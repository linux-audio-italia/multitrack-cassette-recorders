import { fetchRecorders } from "../lib/data_client";
import Link from "next/link";
import BrandCards from "../components/BrandCards";
import { title } from "../lib/utils";

export default function Home({ brands }) {
  return (
    <article className="Page">
      {title("Multitrack Cassette Recorders")}
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
        <BrandCards brands={brands} />
      </div>
    </article>
  );
}

export const getStaticProps = async () => ({
  props: { brands: await fetchRecorders() },
});
