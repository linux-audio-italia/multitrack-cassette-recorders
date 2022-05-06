import ExternalLink from "./ExternalLink";

const SiteFooter = () => (
  <footer className="SiteFooter">
    <div className="limit">
      <p>
        This website&apos;s{" "}
        <ExternalLink
          to="https://github.com/linux-audio-italia/multitrack-cassette-recorders"
          text="source code"
        />
        and{" "}
        <ExternalLink
          to="https://github.com/linux-audio-italia/multitrack-cassette-recorders/blob/main/data/"
          text="data"
        />
        are open.
      </p>
      <p>
        Want to contribute? Open a pull request where you update the model list.
        The data files are in{" "}
        <ExternalLink to="https://yaml.org/" text="YAML" />
        and can be found{" "}
        <ExternalLink
          to="https://github.com/linux-audio-italia/multitrack-cassette-recorders/blob/main/data/"
          text="here"
        />
        .
      </p>
      <p>Copyright 2022 - Linux Audio Italia.</p>
    </div>
  </footer>
);

export default SiteFooter;
