import { safe } from "../lib/utils";

const DefinitionItem = (title, value) => (
  <>
    <dt>{title}</dt>
    <dd>{safe(value)}</dd>
  </>
);

const ModelDetail = ({ recorder }) => (
  <article className="Page">
    <header className="Page-head">
      <h1>
        {recorder.brand} {recorder.name}
      </h1>
    </header>
    <div className="Page-content ModelDetail">
      <dl className="ModelDetail-features">
        {recorder.year && DefinitionItem("Year", recorder.year)}
        {recorder.mix_channels &&
          DefinitionItem("Mixer channels", recorder.mix_channels)}
        {recorder.rec_tracks &&
          DefinitionItem("Recording tracks", recorder.rec_tracks)}
        {recorder.max_simultaneous_rec_tracks &&
          DefinitionItem(
            "Max tracks recordable at once",
            recorder.max_simultaneous_rec_tracks
          )}
        {recorder.low_speed && DefinitionItem("Low speed", recorder.low_speed)}
        {recorder.hi_speed && DefinitionItem("High speed", recorder.hi_speed)}
      </dl>
    </div>
  </article>
);

export default ModelDetail;
