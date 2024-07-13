import OfferPair from "./OfferPair";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`categories-frame ${className}`}>
      <div className="categories">
        <div className="categories-list-parent">
          <div className="categories-list">
            <div className="category">
              <div className="explore-categories-wrapper">
                <div className="explore-categories1">Explore Categories</div>
              </div>
              <h3 className="look-beautiful-and1">
                Look Beautiful and Powerful At Every Age
              </h3>
            </div>
          </div>
          <div className="frame-parent7">
            <OfferPair
              frame19="/frame-16.svg"
              button="Face"
              offOnAllPurchase="30% off all all purchase"
              propAlignSelf="unset"
              propFlex="1"
              propMinWidth="23.188rem"
            />
            <div className="frame-parent8">
              <div className="frame-parent9">
                <img
                  className="frame-child1"
                  loading="lazy"
                  alt=""
                  src="/frame-171.svg"
                />
                <div className="component-21">
                  <div className="button23">Lips</div>
                </div>
              </div>
              <div className="off-all-all-purchase-container">
                <div className="off-all-all2">30% off all all purchase</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-parent10">
          <div className="frame-parent11">
            <div className="on-purchase-banner-placeholder-parent">
              <img
                className="on-purchase-banner-placeholder"
                loading="lazy"
                alt=""
                src="/frame-18.svg"
              />
              <div className="component-33">
                <h3 className="button24">Eyes</h3>
              </div>
            </div>
            <div className="off-on-all-purchase-container">
              <div className="off-on-all2">30% off on all purchase</div>
            </div>
          </div>
          <OfferPair
            frame19="/frame-191.svg"
            button="Perfume"
            offOnAllPurchase="30% off on all purchase"
            propAlignSelf="unset"
            propFlex="1"
            propMinWidth="23.188rem"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
