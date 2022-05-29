import ExternalLink from "./ExternalLink";

const TableRow = (rowTitle, value, key = null) =>
  value ? (
    <tr key={key}>
      <td>{rowTitle}</td>
      <td>{value}</td>
    </tr>
  ) : null;

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

const ModelDetail = ({ recorder }) => {
  const mixer = recorder.mixer ? recorder.mixer : {};
  const tape = recorder.tape ? recorder.tape : {};
  const links = recorder.links ? recorder.links : {};
  const mixer_rows = [
    ["mix_channels", "number of channels"],
    ["chan_eq", "channel equalization"],
    ["master_eq", "master bus equalization"],
    ["aux_sends", "aux sends"],
    ["aux_returns", "aux returns"],
    ["individual_track_outs", "individual track outputs"],
  ];
  const tape_rows = [
    ["rec_tracks", "recording tracks"],
    ["simultaneous_rec_tracks", "tracks recordable at once"],
    ["low_speed", "low speed"],
    ["norm_speed", "normal speed"],
    ["high_speed", "high speed"],
    ["noise_reduction", "noise reduction"],
    ["return_to_zero", "return to zero function"],
    ["locators", "memory locators"],
    ["varispeed", "pitch control (varispeed)"],
  ];

  return (
    <article className="Page">
      <header className="Page-head">
        <h1 className="ModelDetail-model">
          {recorder.brand} {recorder.name}{" "}
          {recorder.year && <>({recorder.year})</>}
        </h1>
      </header>
      <div className="Page-content">
        <p className="ModelDetail-description">{recorder.description}</p>
        <Links links={links} />
        <table width="100%" className="ModelDetail-table">
          <thead>
            <tr>
              <th colSpan="2">Mixer section</th>
            </tr>
          </thead>
          <tbody>
            {mixer_rows.map(([k, label]) => TableRow(label, mixer[k], k))}
          </tbody>
        </table>
        <table width="100%" className="ModelDetail-table">
          <thead>
            <tr className="ModelDetail-tablehead">
              <th colSpan="2">Tape recorder section</th>
            </tr>
          </thead>
          <tbody>
            {tape_rows.map(([k, label]) => TableRow(label, tape[k], k))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default ModelDetail;
