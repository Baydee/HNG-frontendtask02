import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Options.css";

const Options = ({
  className = "",
  optionIcon,
  nationwideDelivery,
  freeAndFastShippingForAll,
  propPadding,
}) => {
  const optionsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`options ${className}`} style={optionsStyle}>
      <img className="option-icon" loading="lazy" alt="" src={optionIcon} />
      <div className="option-details">
        <b className="nationwide-delivery">{nationwideDelivery}</b>
        <div className="free-and-fast">{freeAndFastShippingForAll}</div>
      </div>
      <div className="component-11">
        <div className="button13">Know More</div>
      </div>
    </div>
  );
};

Options.propTypes = {
  className: PropTypes.string,
  optionIcon: PropTypes.string,
  nationwideDelivery: PropTypes.string,
  freeAndFastShippingForAll: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default Options;
