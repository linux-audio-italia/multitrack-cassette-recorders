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
  const links = recorder.links ? recorder.links : {};
  const tables = [
    {
      data: recorder.mixer ? recorder.mixer : {},
      title: "Mixer section",
      rows: [
        ["mix_channels", "number of channels"],
        ["chan_eq", "channel equalization"],
        ["master_eq", "master bus equalization"],
        ["aux_sends", "aux sends"],
        ["aux_returns", "aux returns"],
        ["individual_track_outs", "individual track outputs"],
      ],
    },
    {
      data: recorder.tape ? recorder.tape : {},
      title: "Tape recorder section",
      rows: [
        ["rec_tracks", "recording tracks"],
        ["simultaneous_rec_tracks", "tracks recordable at once"],
        ["low_speed", "low speed"],
        ["norm_speed", "normal speed"],
        ["high_speed", "high speed"],
        ["noise_reduction", "noise reduction"],
        ["return_to_zero", "return to zero function"],
        ["locators", "memory locators"],
        ["varispeed", "pitch control (varispeed)"],
      ],
    },
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
        {tables.map((table) => (
          <table key={table.title} width="100%" className="ModelDetail-table">
            <thead>
              <tr>
                <th colSpan="2">{table.title}</th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map(([k, label]) =>
                TableRow(label, table.data[k], k)
              )}
            </tbody>
          </table>
        ))}
      </div>
    </article>
  );
};

export default ModelDetail;
