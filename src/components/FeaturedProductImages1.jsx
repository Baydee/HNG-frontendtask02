import PropTypes from "prop-types";
import "./FeaturedProductImages1.css";

const FeaturedProductImages1 = ({ className = "" }) => {
  return (
    <div className={`featured-product-images ${className}`}>
      <img
        className="image-9-icon"
        loading="lazy"
        alt=""
        src="/image-9@2x.png"
      />
      <div className="featured-product-details">
        <b className="eye-am-that">Eye Am That Eye Am Lashes</b>
        <div className="natural-magnetic-eyelashesdel-container">
          <p className="natural-magnetic-eyelashesdel">
            Natural Magnetic Eyelashes/Deluxe Kit.
          </p>
          <p className="reusable-up-to">Reusable up to 50 times.</p>
        </div>
        <div className="all-length-available">ALL LENGTH AVAILABLE</div>
      </div>
      <div className="makeup-prices">
        <div className="prices">
          <div className="price4">Price</div>
        </div>
        <div className="div4">₦42,500</div>
      </div>
      <div className="component-122">
        <div className="button11">Add to Bag</div>
      </div>
    </div>
  );
};

FeaturedProductImages1.propTypes = {
  className: PropTypes.string,
};

export default FeaturedProductImages1;
