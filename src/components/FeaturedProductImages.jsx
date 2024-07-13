import PropTypes from "prop-types";
import "./FeaturedProductImages.css";

const FeaturedProductImages = ({
  className = "",
  image11,
  thouYourSinsBeAsScarletRe,
  heavenlyBeautyAllureVelve,
  aLLSHADESAVAILABLE,
  prop,
}) => {
  return (
    <div className={`featured-product-images1 ${className}`}>
      <img className="image-11-icon" loading="lazy" alt="" src={image11} />
      <div className="thou-your-sins-be-as-scarlet-r-parent">
        <b className="thou-your-sins">{thouYourSinsBeAsScarletRe}</b>
        <div className="heavenly-beauty-allure">
          {heavenlyBeautyAllureVelve}
        </div>
        <div className="all-shades-available4">{aLLSHADESAVAILABLE}</div>
      </div>
      <div className="frame-parent4">
        <div className="price-wrapper">
          <div className="price5">Price</div>
        </div>
        <div className="div5">{prop}</div>
      </div>
      <div className="component-123">
        <div className="button12">Add to Bag</div>
      </div>
    </div>
  );
};

FeaturedProductImages.propTypes = {
  className: PropTypes.string,
  image11: PropTypes.string,
  thouYourSinsBeAsScarletRe: PropTypes.string,
  heavenlyBeautyAllureVelve: PropTypes.string,
  aLLSHADESAVAILABLE: PropTypes.string,
  prop: PropTypes.string,
};

export default FeaturedProductImages;
