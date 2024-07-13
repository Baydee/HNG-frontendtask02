import ProductThreeCard from "./ProductThreeCard";
import PropTypes from "prop-types";
import "./ProductThree.css";

const ProductThree = ({ className = "" }) => {
  return (
    <div className={`product-three ${className}`}>
      <ProductThreeCard />
    </div>
  );
};

ProductThree.propTypes = {
  className: PropTypes.string,
};

export default ProductThree;
