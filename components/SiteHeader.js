import Link from "next/link";

const SiteHeader = () => (
  <header className="SiteHeader">
    <Link href="/">
      <a className="SiteHeader-logo">Multitrack Cassette</a>
    </Link>
    <nav role="navigation" className="limit">
      <Link href="/brands">Brands</Link>
      <Link href="/models">Models</Link>
      <Link href="/about">About</Link>
    </nav>
  </header>
);

export default SiteHeader;
