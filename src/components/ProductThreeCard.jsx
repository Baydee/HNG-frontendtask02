import { memo } from "react";
import PropTypes from "prop-types";
import "./ProductThreeCard.css";

const ProductThreeCard = memo(({ className = "" }) => {
  return (
    <div className={`product-three-card ${className}`}>
      <img
        className="product-three-image"
        alt=""
        src="/rectangle-37-1@2x.png"
      />
      <div className="product-three-info">
        <b className="woman-thou-art">Woman Thou Art Loose Powder</b>
        <div className="mattifying-compact-powder">
          Mattifying Compact Powder 24hr
        </div>
        <div className="all-shades-available3">ALL SHADES AVAILABLE</div>
      </div>
      <div className="product-three-price">
        <div className="product-three-price-label">
          <div className="price3">Price</div>
        </div>
        <div className="div3">₦18,000</div>
      </div>
      <div className="component-101">
        <div className="button10">Add to Bag</div>
      </div>
    </div>
  );
});

ProductThreeCard.propTypes = {
  className: PropTypes.string,
};

export default ProductThreeCard;
