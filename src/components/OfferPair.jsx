import { useMemo } from "react";
import PropTypes from "prop-types";
import "./OfferPair.css";

const OfferPair = ({
  className = "",
  frame19,
  button,
  offOnAllPurchase,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const offerPairStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div className={`offer-pair ${className}`} style={offerPairStyle}>
      <div className="frame-parent3">
        <img className="frame-inner" loading="lazy" alt="" src={frame19} />
        <div className="component-4">
          <h3 className="button5">{button}</h3>
        </div>
      </div>
      <div className="off-on-all-purchase-wrapper">
        <div className="off-on-all">{offOnAllPurchase}</div>
      </div>
    </div>
  );
};

OfferPair.propTypes = {
  className: PropTypes.string,
  frame19: PropTypes.string,
  button: PropTypes.string,
  offOnAllPurchase: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default OfferPair;
