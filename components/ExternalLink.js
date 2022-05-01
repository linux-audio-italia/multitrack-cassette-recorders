const ExternalLink = ({ to, text }) => (
  <a href={to} target="_blank" rel="noreferrer">
    {text}
    <svg width="9" height="9" className="ExternalLink-icon">
      <path d="M 0,2 V 2.5 9 H 7 V 4.6230469 L 6,5.6738281 V 8 H 1 V 3 H 3.3339844 L 4.3886719,2 Z" />
      <path d="M 9,0 8.5,4.75 7.25,2.75 4.25,6 3,4.75 l 3.25,-3 -2,-1.25 z" />
    </svg>
  </a>
);

export default ExternalLink;
