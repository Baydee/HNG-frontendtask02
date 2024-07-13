import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <header className={`container ${className}`}>
      <img
        className="nav-left-icon"
        loading="lazy"
        alt=""
        src="/frame-34.svg"
      />
      <nav className="nav-buttons">
        <div className="component-6">
          <a className="button2">Home</a>
        </div>
        <div className="component-7">
          <a className="button3">All Collection</a>
        </div>
        <div className="component-8">
          <a className="button4">Shop</a>
        </div>
      </nav>
      <div className="nav-icons">
        <div className="person-wrapper">
          <img
            className="person-icon"
            loading="lazy"
            alt=""
            src="/person.svg"
          />
        </div>
        <img className="heart-icon" loading="lazy" alt="" src="/heart.svg" />
        <img
          className="shopping-bag-tag"
          loading="lazy"
          alt=""
          src="/shopping-bag-tag.svg"
        />
      </div>
    </header>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
