import ExternalLink from "./ExternalLink";

const TableRow = (rowTitle, value) => (
  <tr>
    <td>{rowTitle}</td>
    <td>{value}</td>
  </tr>
);

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
  const {
    mix_channels,
    chan_eq,
    master_eq,
    aux_sends,
    aux_returns,
    individual_track_outs,
  } = mixer;
  const {
    rec_tracks,
    simultaneous_rec_tracks,
    low_speed,
    norm_speed,
    high_speed,
    noise_reduction,
    return_to_zero,
    locators,
    varispeed,
  } = tape;

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
            {mix_channels && TableRow("number of channels", mix_channels)}
            {chan_eq && TableRow("channel equalization", chan_eq)}
            {master_eq && TableRow("master bus equalization", master_eq)}
            {aux_sends && TableRow("aux sends", aux_sends)}
            {aux_returns && TableRow("aux returns", aux_returns)}
            {individual_track_outs &&
              TableRow("individual track outputs", individual_track_outs)}
          </tbody>
        </table>
        <table width="100%" className="ModelDetail-table">
          <thead>
            <tr className="ModelDetail-tablehead">
              <th colSpan="2">Tape recorder section</th>
            </tr>
          </thead>
          <tbody>
            {rec_tracks && TableRow("recording tracks", rec_tracks)}
            {simultaneous_rec_tracks &&
              TableRow("tracks recordable at once", simultaneous_rec_tracks)}
            {low_speed && TableRow("low speed", low_speed)}
            {norm_speed && TableRow("normal speed", norm_speed)}
            {high_speed && TableRow("high speed", high_speed)}
            {noise_reduction && TableRow("noise reduction", noise_reduction)}
            {return_to_zero &&
              TableRow("return to zero function", return_to_zero)}
            {locators && TableRow("memory locators", locators)}
            {varispeed && TableRow("pitch control (varispeed)", varispeed)}
          </tbody>
        </table>
      </div>
    </article>
  );
};

export default ModelDetail;
