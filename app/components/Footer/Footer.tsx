import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-12">
      <div className="container">
        <FooterAbout description="ValueHut Consultancy is an Agile Management Consultant, helping organisation explore better ways of working and leading to deliver great products and services to their clients." />
        <div className="footer-content grid grid-cols-3 gap-4">
          <FooterNav />
          <FooterSocial />
          <FooterContact />
        </div>
        <FooterLegal />
      </div>
    </footer>
  );
};

const FooterAbout: React.FC<{ description: string }> = ({ description }) => (
  <div className="footer-about mb-4">
    <p>{description}</p>
  </div>
);

const FooterNav: React.FC = () => (
  <ul className="footer-nav">
    <li>
      <a href="/academy">Academy</a>
    </li>
    <li>
      <a href="/consultation">Consultation</a>
    </li>
    <li>
      <a href="/talent-match">Talent match</a>
    </li>
  </ul>
);

const FooterSocial: React.FC = () => (
  <div className="footer-social">
    <a href="https://linkedin.com">LinkedIn</a>
    <a href="https://x.com">X</a>
  </div>
);

const FooterContact: React.FC = () => (
  <div className="footer-contact">
    <p>UK office:</p>
    <p>Email: info@valuehut.co</p>
    <p>Call: +44(0)7946713054</p>
    <p>Nigeria office:</p>
    <p>Email: info@valuehut.co</p>
    <p>Call: +234(0)8143021499</p>
  </div>
);

const FooterLegal: React.FC = () => (
  <div className="footer-legal text-center mt-4">
    <a href="/privacy">Privacy Policy</a>
    <a href="/terms">Terms of service</a>
    <p>2024 ValueHut - All rights reserved</p>
  </div>
);

export default Footer;
