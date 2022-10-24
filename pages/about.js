import { fetchContributors } from "../lib/data_client";
import ExternalLink from "../components/ExternalLink";
import Contributors from "../components/Contributors";

const About = ({ contributors }) => (
  <article className="Page">
    <header className="Page-head">
      <h1>About</h1>
    </header>
    <div className="Page-content">
      <figure>
        <blockquote>
          In the list of the most brilliant inventions the human race has ever
          devised, third only to the bicycle and the grand piano is the
          cassette-based multitrack recorder, otherwise commonly known as the
          Portastudio.
        </blockquote>
        <figcaption>
          David Mellor, <cite>&quot;Hands On: Cassette Multitracks&quot;</cite>{" "}
          on{" "}
          <ExternalLink
            to="http://www.muzines.co.uk/articles/hands-on-cassette-multitracks/9522"
            text="Sound On Sound - Oct 1992"
          />
        </figcaption>
      </figure>
      <Contributors contributors={contributors} />
    </div>
  </article>
);

export const getStaticProps = async () => ({
  props: { contributors: await fetchContributors() },
});

export default About;
