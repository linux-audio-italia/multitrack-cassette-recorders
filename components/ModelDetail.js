import { safe } from "../lib/utils";

const ModelDetail = ({ recorder }) => (
  <article className="Page">
    <header className="Page-head">
      <h1>
        {recorder.brand} {recorder.name}
      </h1>
    </header>
    <div className="Page-content ModelDetail">
      <dl className="ModelDetail-features">
        <dt>Year</dt>
        <dd>{safe(recorder.year)}</dd>
        <dt>Mixer channels</dt>
        <dd>{safe(recorder.mix_channels)}</dd>
        <dt>Recording channels</dt>
        <dd>{safe(recorder.mix_channels)}</dd>
      </dl>
    </div>
  </article>
);

export default ModelDetail;
