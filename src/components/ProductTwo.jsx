import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductTwo.css";

const ProductTwo = ({ className = "", propPadding, propMinWidth }) => {
  const productTwoStyle = useMemo(() => {
    return {
      padding: propPadding,
      minWidth: propMinWidth,
    };
  }, [propPadding, propMinWidth]);

  return (
    <div className={`product-two ${className}`} style={productTwoStyle}>
      <div className="product-two-card">
        <img
          className="product-two-image"
          loading="lazy"
          alt=""
          src="/rectangle-37@2x.png"
        />
        <div className="product-two-info">
          <b className="lip-balm-of">Lip Balm Of Gilead</b>
          <div className="natural-lip-balm">
            Natural Lip Balm For Supple Lips
          </div>
          <div className="all-shades-available2">ALL SHADES AVAILABLE</div>
        </div>
        <div className="product-two-price">
          <div className="product-two-price-label">
            <div className="price2">Price</div>
          </div>
          <div className="div2">₦14,000</div>
        </div>
        <div className="component-10">
          <div className="button9">Add to Bag</div>
        </div>
      </div>
    </div>
  );
};

ProductTwo.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ProductTwo;
