import Base from "../components/layouts/Base";
import "../styles/variables.css";
import "../styles/reset.css";
import "../styles/utils.css";
import "../styles/SiteHeader.css";
import "../styles/SiteFooter.css";
import "../styles/Page.css";
import "../styles/BrandCards.css";
import "../styles/ModelCards.css";
import "../styles/ModelDetail.css";

const MultitrackRecorders = ({ Component, pageProps }) => (
  <Base>
    <Component {...pageProps} />
  </Base>
);

export default MultitrackRecorders;
