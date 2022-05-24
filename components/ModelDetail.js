import { safe } from "../lib/utils";

const DefinitionItem = (title, value) => (
  <>
    <dt>{title}</dt>
    <dd>{safe(value)}</dd>
  </>
);

const TableRow = (rowTitle, value) => (
  <tr>
    <td>{rowTitle}</td>
    <td>{value}</td>
  </tr>
);

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
      <p className="ModelDetail-description">{recorder.description}</p>
      <table width="100%" className="ModelDetail-table">
        <tbody>
          <tr className="ModelDetail-tablehead">
            <th colSpan="2">Mixer section</th>
          </tr>
          {mix_channels && TableRow("number of channels", mix_channels)}
          {chan_eq && TableRow("channel equalization", chan_eq)}
          {master_eq && TableRow("master bus equalization", master_eq)}
          {aux_sends && TableRow("aux sends", aux_sends)}
          {aux_returns && TableRow("aux returns", aux_returns)}
          {individual_track_outs &&
            TableRow("individual track outputs", individual_track_outs)}
          <tr className="ModelDetail-tablehead">
            <th colSpan="2">Tape recorder section</th>
          </tr>
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
      {Object.keys(links).length > 0 && (
        <h3 className="ModelDetail-links">Links</h3>
      )}
      {Object.keys(links).map((link) => (
        <p key={link}>
          {link}:&nbsp; <a href={links[link]}>{links[link]}</a>
        </p>
      ))}
    </article>
  );
};

export default ModelDetail;
