import { fetchRecorders } from "../lib/data_client";
import Link from "next/link";

export default function Models({ models }) {
  return (
    <ul>
      {models.map((model) => (
        <li key={model.ModelUrl}>
          <Link href={model.ModelUrl}>{`${model.Brand} ${model.Model}`}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const models = await fetchRecorders();

  return {
    props: {
      models,
    },
  };
}
