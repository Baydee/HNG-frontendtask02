import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({
  className = "",
  footerLinks,
  propAlignSelf,
  propPadding,
  propFlex,
}) => {
  const footerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propPadding, propFlex]);

  return (
    <div className={`footer ${className}`} style={footerStyle}>
      <img
        className="footer-links-icon"
        loading="lazy"
        alt=""
        src={footerLinks}
      />
      <div className="links">
        <div className="product-link-parent">
          <div className="product-link">
            <b className="products">Products</b>
          </div>
          <div className="product-buttons">
            <div className="component-31">
              <div className="button14">Check Out</div>
            </div>
            <div className="component-71">
              <div className="button15">Payments</div>
            </div>
            <div className="component-41">
              <a className="button16">Products</a>
            </div>
          </div>
        </div>
      </div>
      <div className="about-link-wrapper">
        <div className="about-link">
          <div className="about">
            <b className="about-us">About Us</b>
          </div>
          <div className="about-buttons">
            <div className="component-32">
              <div className="button17">Contact Us</div>
            </div>
            <div className="component-72">
              <div className="button18">Customer Care</div>
            </div>
            <div className="component-42">
              <div className="button19">Help</div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-link-wrapper">
        <div className="contact-link">
          <b className="get-in-touch">Get In Touch</b>
          <a
            className="facebook"
            href="https://www.facebook.com/vivian.ngozika?mibextid=kFxxJD"
            target="_blank"
          >
            Facebook
          </a>
          <div className="social-media">
            <a
              className="instagram"
              href="https://www.instagram.com/lavivzika_ent?igsh=MTZ2MjdtOWUwNXowdA=="
              target="_blank"
            >
              Instagram
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/vivian-ngozika-3b0bb7120?"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="twitter"
              href={`https://x.com/LAVIVZIKA?t=SuAA_Yp0NnnneLoanr8Tcg&s=09`}
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  footerLinks: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Footer;
