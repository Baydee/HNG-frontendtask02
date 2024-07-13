import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <header className={`rectangle-parent ${className}`}>
      <div className="rectangle-div" />
      <img className="frame-icon" loading="lazy" alt="" src="/frame-34.svg" />
      <nav className="component-6-parent">
        <div className="component-61">
          <a className="button20">Home</a>
        </div>
        <div className="component-73">
          <a className="button21">All Collection</a>
        </div>
        <div className="component-81">
          <a className="button22">Shop</a>
        </div>
      </nav>
      <div className="frame-parent5">
        <div className="person-container">
          <img
            className="person-icon1"
            loading="lazy"
            alt=""
            src="/person.svg"
          />
        </div>
        <img className="heart-icon2" loading="lazy" alt="" src="/heart.svg" />
        <img
          className="shopping-bag-tag1"
          loading="lazy"
          alt=""
          src="/shopping-bag-tag.svg"
        />
      </div>
    </header>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
