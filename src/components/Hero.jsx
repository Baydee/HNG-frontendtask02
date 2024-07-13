import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <div className={`hero ${className}`}>
      <div className="container1">
        <div className="right-column">
          <img
            className="right-column-child"
            loading="lazy"
            alt=""
            src="/rectangle-13@2x.png"
          />
        </div>
        <div className="left-column">
          <div className="copy-container">
            <div className="unfading-beauty-parent">
              <h1 className="unfading-beauty">
                <span>Unfading</span>
                <span className="beauty"> Beauty</span>
              </h1>
              <div className="open-your-eyes-container">
                <p className="open-your-eyes-to-see-your-unf">
                  <span>
                    Open Your Eyes To
                    <span className="see-your-unfading">
                      {" "}
                      see your unfading
                    </span>
                  </span>
                </p>
                <p className="beauty-daughter-of-zion-let-o">
                  <span>
                    <span className="beauty-daughter-of">
                      {" "}
                      beauty daughter of zion. let our makeup
                    </span>
                  </span>
                </p>
                <p className="magnify-the-beauty-that-alread">
                  <span>
                    <span className="magnify-the-beauty">
                      {" "}
                      magnify the beauty that already exists.
                    </span>
                  </span>
                  <span className="span">{` `}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
