import OfferPair from "./OfferPair";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`home-page-inner1 ${className}`}>
      <div className="categories-container-parent">
        <div className="categories-container">
          <div className="categories-wrapper">
            <div className="categories-header">
              <div className="categories-title">
                <div className="explore-categories">Explore Categories</div>
              </div>
            </div>
            <h3 className="look-beautiful-and">
              Look Beautiful and Powerful At Every Age
            </h3>
          </div>
        </div>
        <div className="offers">
          <div className="offer-one">
            <div className="offer-one-content">
              <img
                className="offer-one-content-child"
                alt=""
                src="/rectangle-22.svg"
              />
              <img className="heart-icon1" alt="" src="/heart.svg" />
            </div>
            <div className="offer-one-details">
              <div className="offer-one-button">
                <div className="offer-one-button-wrapper">
                  <div className="component-1">
                    <h3 className="button6">Face</h3>
                  </div>
                </div>
                <div className="off-all-all">30% off all all purchase</div>
              </div>
            </div>
            <div className="offer-two">
              <div className="offer-two-content">
                <img
                  className="offer-two-button"
                  loading="lazy"
                  alt=""
                  src="/frame-18.svg"
                />
                <div className="component-3">
                  <h3 className="button7">Eyes</h3>
                </div>
              </div>
              <div className="offer-two-discount">
                <div className="off-on-all1">30% off on all purchase</div>
              </div>
            </div>
          </div>
          <div className="offer-list">
            <div className="offer-pair1">
              <div className="offer-components">
                <img
                  className="offer-components-child"
                  loading="lazy"
                  alt=""
                  src="/frame-17.svg"
                />
                <div className="component-2">
                  <div className="button8">Lips</div>
                </div>
              </div>
              <div className="off-all-all-purchase-wrapper">
                <div className="off-all-all1">30% off all all purchase</div>
              </div>
            </div>
            <OfferPair
              frame19="/frame-19.svg"
              button="Perfume"
              offOnAllPurchase="30% off on all purchase"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
