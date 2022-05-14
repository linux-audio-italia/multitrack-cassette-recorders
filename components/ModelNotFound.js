const ModelNotFound = ({ recorder }) => (
  <article className="Page">
    <header className="Page-head">
      <h1>{recorder.name} data is missing.</h1>
    </header>
    <div className="Page-content">
      <p>If you want to help us making this website better, you can:</p>
      <ul>
        <li>
          Open a pull request on Github where you add a file called{" "}
          <code>
            data/{recorder.brandSlug}/{recorder.slug}.yml
          </code>{" "}
          with this model details data.
        </li>
        <li>
          Write us on IRC (channel <b>#la-it</b> on libera.chat)
        </li>
      </ul>
    </div>
  </article>
);

export default ModelNotFound;
