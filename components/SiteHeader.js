import Link from "next/link";

const SiteHeader = () => (
  <header className="SiteHeader">
    <nav role="navigation" className="limit">
      <Link href="/">Multitrack Cassette Recorders</Link>
      <Link href="/recorders">Brands</Link>
      <Link href="/about">About</Link>
    </nav>
  </header>
);

export default SiteHeader;
