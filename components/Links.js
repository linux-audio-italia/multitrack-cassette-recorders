import ExternalLink from "./ExternalLink";

const Links = ({ links }) => {
  if (Object.keys(links).length == 0) return null;

  return (
    <aside className="ModelDetail-links">
      <h3>Links</h3>
      <ul>
        {Object.keys(links).map((k) => (
          <li key={k}>
            <ExternalLink to={links[k]} text={k} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Links;
