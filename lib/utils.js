import Head from "next/head";

export const safe = (val) => val || "Value not available.";

export const title = (t) => (
  <Head>
    <title>{t}</title>
  </Head>
);
