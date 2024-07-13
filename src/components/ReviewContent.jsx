import Footer from "./Footer";
import PropTypes from "prop-types";
import "./ReviewContent.css";

const ReviewContent = ({ className = "" }) => {
  return (
    <div className={`review-content ${className}`}>
      <Footer
        footerLinks="/frame-921.svg"
        propAlignSelf="unset"
        propPadding="var(--padding-123xl) 0rem var(--padding-124xl-4)"
        propFlex="1"
      />
    </div>
  );
};

ReviewContent.propTypes = {
  className: PropTypes.string,
};

export default ReviewContent;
