import TableRow from "./TableRow";
import Links from "./Links";
import Gallery from "./Gallery";

const ModelDetail = ({ recorder }) => {
  const info = recorder.info;
  const links = info.links ? info.links : {};
  const tables = [
    {
      data: info.mixer ? info.mixer : {},
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
      data: info.tape ? info.tape : {},
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
          {info.brand} {info.name} {info.year && <>({info.year})</>}
        </h1>
      </header>
      <div className="Page-content">
        <p className="ModelDetail-description">{info.description}</p>
        <Gallery images={recorder.images} href={recorder.href} />
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
