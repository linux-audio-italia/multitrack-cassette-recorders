import ExternalLink from "./ExternalLink";

const Contributors = ({ contributors }) => (
  <div className="Contributors" id="contributors">
    <h2>Contributors</h2>
    <ul className="Contributors-list">
      {contributors.map((contributor) => (
        <li key={contributor.nickname}>
          <b>{contributor.nickname}</b> -{" "}
          {contributor.website && (
            <ExternalLink to={contributor.website} text="website" />
          )}
        </li>
      ))}
    </ul>
  </div>
);

export default Contributors;
