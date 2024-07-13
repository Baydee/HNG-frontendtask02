import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper6 ${className}`}>
      <div className="frame-parent12">
        <div className="frame-wrapper7">
          <div className="frame-parent13">
            <div className="delivery-container">
              <h2 className="delivery1">
                <ol className="delivery2">
                  <li>Delivery</li>
                </ol>
              </h2>
            </div>
            <div className="line-div" />
            <div className="delivery-address-wrapper">
              <b className="delivery-address">Delivery Address</b>
            </div>
          </div>
        </div>
        <div className="frame-parent14">
          <div className="frame-wrapper8">
            <div className="frame-parent15">
              <div className="summary-wrapper">
                <div className="summary">Summary</div>
              </div>
              <div className="frame-child2" />
            </div>
          </div>
          <div className="frame-parent16">
            <div className="frame-parent17">
              <div className="frame-wrapper9">
                <div className="polygon-parent">
                  <img className="polygon-icon" alt="" src="/polygon-1.svg" />
                  <img
                    className="frame-child3"
                    loading="lazy"
                    alt=""
                    src="/rectangle-38@2x.png"
                  />
                </div>
              </div>
              <div className="frame-wrapper10">
                <div className="frame-parent18">
                  <div className="lip-balm-of-gilead-wrapper">
                    <h3 className="lip-balm-of1">{`Lip Balm Of Gilead `}</h3>
                  </div>
                  <div className="frame-parent19">
                    <div className="x2-wrapper">
                      <div className="x2">₦14,000X2</div>
                    </div>
                    <div className="div6">₦28,000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper11">
              <div className="frame-parent20">
                <div className="subtract-circle-wrapper">
                  <img
                    className="subtract-circle-icon"
                    loading="lazy"
                    alt=""
                    src="/subtract-circle.svg"
                  />
                </div>
                <div className="wrapper">
                  <div className="div7">2</div>
                </div>
                <div className="delete-parent">
                  <img
                    className="delete-icon"
                    loading="lazy"
                    alt=""
                    src="/delete.svg"
                  />
                  <div className="add-circle-wrapper">
                    <img
                      className="add-circle-icon"
                      loading="lazy"
                      alt=""
                      src="/add-circle.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent21">
            <div className="frame-parent22">
              <img
                className="frame-child4"
                loading="lazy"
                alt=""
                src="/frame-427318975.svg"
              />
              <div className="frame-wrapper12">
                <div className="frame-parent23">
                  <div className="esther-attract-ahasuerus-perfu-wrapper">
                    <h3 className="esther-attract-ahasuerus">
                      Esther Attract Ahasuerus Perfume
                    </h3>
                  </div>
                  <div className="frame-parent24">
                    <div className="x1-wrapper">
                      <div className="x1">₦65,000X1</div>
                    </div>
                    <div className="div8">₦65,000</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-wrapper13">
              <div className="frame-parent25">
                <div className="subtract-circle-container">
                  <img
                    className="subtract-circle-icon1"
                    alt=""
                    src="/subtract-circle.svg"
                  />
                </div>
                <div className="frame">
                  <div className="div9">1</div>
                </div>
                <div className="delete-group">
                  <img className="delete-icon1" alt="" src="/delete.svg" />
                  <img
                    className="add-circle-icon1"
                    alt=""
                    src="/add-circle.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper14">
            <div className="frame-parent26">
              <div className="subtotal-wrapper">
                <div className="subtotal">Subtotal</div>
              </div>
              <div className="div10">₦93,000</div>
            </div>
          </div>
          <div className="frame-wrapper15">
            <div className="frame-parent27">
              <div className="total-parent">
                <div className="total">TOTAL</div>
                <div className="items-wrapper">
                  <div className="items">(3 Items)</div>
                </div>
              </div>
              <div className="wrapper1">
                <div className="div11">₦93,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
