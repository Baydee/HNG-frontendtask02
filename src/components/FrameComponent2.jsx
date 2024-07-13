import FrameComponent3 from "./FrameComponent3";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`frame-parent6 ${className}`}>
      <FrameComponent3 />
      <div className="vector-parent">
        <img className="rectangle-icon" alt="" src="/rectangle-131@2x.png" />
        <div className="unfading-beauty-group">
          <img
            className="unfading-beauty-icon"
            loading="lazy"
            alt=""
            src="/unfading-beauty.svg"
          />
          <div className="open-your-eyes-to-see-your-unf-wrapper">
            <img
              className="open-your-eyes-to-see-your-unf1"
              loading="lazy"
              alt=""
              src="/open-your-eyes-to-see-your-unfading-beauty-daughter-of-zion-let-our-makeup-magnify-the-beauty-that-already-exists.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
