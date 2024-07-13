import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent4 from "../components/FrameComponent4";
import ReviewContent from "../components/ReviewContent";
import "./CHECKOUT.css";

const CHECKOUT = () => {
  return (
    <div className="check-out">
      <FrameComponent3 />
      <b className="text" />
      <main className="check-out-inner">
        <section className="frame-container">
          <div className="checkout-wrapper">
            <h1 className="checkout">Checkout</h1>
          </div>
          <div className="frame-wrapper">
            <div className="already-registered-parent">
              <h2 className="already-registered">{`Already Registered? `}</h2>
              <h2 className="sign-into-your">Sign Into Your Account</h2>
            </div>
          </div>
          <FrameComponent4 />
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="tick-square-parent">
                <img
                  className="tick-square-icon"
                  alt=""
                  src="/ticksquare.svg"
                />
                <div className="use-the-shipping">
                  Use the shipping Address as the Billing Address
                </div>
              </div>
              <div className="checkbox-parent">
                <img className="checkbox-icon" alt="" src="/checkbox.svg" />
                <div className="create-an-account">
                  Create an account to save your details and checkout faster
                  next time
                </div>
              </div>
            </div>
          </div>
          <div className="shipping-method-label">
            <h2 className="shipping-method">Shipping Method</h2>
          </div>
          <div className="shipping-options-wrapper">
            <div className="shipping-options">
              <div className="standard-shipping">
                <img className="checkbox-icon1" alt="" src="/checkbox.svg" />
                <img className="checkbox-icon2" alt="" src="/checkbox.svg" />
              </div>
              <div className="standard-shipping-labels">
                <div className="standard-shipping1">Standard Shipping</div>
                <div className="standard-shipping2">Standard Shipping</div>
              </div>
            </div>
          </div>
          <div className="nigeria-postal-service-no-tr-wrapper">
            <div className="nigeria-postal-service">
              Nigeria Postal Service - No Tracking (5 to 15 work days
              delivery)Order now and get your shopped items delivered.
            </div>
          </div>
          <div className="shipping960102-wrapper">
            <div className="shipping960102">
              <b>Shipping</b>
              <span>{`:₦9,601.02 `}</span>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="checkbox-group">
              <img className="checkbox-icon3" alt="" src="/checkbox.svg" />
              <div className="ups-express-shipping">UPS Express Shipping</div>
            </div>
          </div>
          <div className="nigeria-ups-shipping-full-tr-wrapper">
            <div className="nigeria-ups-shipping-container">
              <span>{`Nigeria UPS Shipping - Full Tracking (3 to 5 work days delivery) NOTE: Additional government import taxes `}</span>
              <b>will be</b>
              <span>{` `}</span>
              <b>{`charged `}</b>
              <span>
                at delivery. Order now and get your shopped items delivered.
              </span>
            </div>
          </div>
          <div className="shipping3010502-wrapper">
            <div className="shipping3010502">
              <b>Shipping</b>
              <span>{`:₦30,105.02 `}</span>
            </div>
          </div>
          <div className="frame-wrapper2">
            <div className="checkbox-container">
              <img className="checkbox-icon4" alt="" src="/checkbox.svg" />
              <div className="ems-postal-shipping">EMS Postal Shipping</div>
            </div>
          </div>
          <div className="nigeria-postal-service-ems-wrapper">
            <div className="nigeria-postal-service1">
              Nigeria Postal Service - EMS - No Tracking (5 to 10 work days
              delivery)Order now and get your shopped items delivered.
            </div>
          </div>
          <div className="shipping3161132-wrapper">
            <div className="shipping3161132">
              <b>Shipping</b>
              <span>{`:₦31,611.32 `}</span>
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="checkbox-parent1">
              <img className="checkbox-icon5" alt="" src="/checkbox.svg" />
              <div className="dhl-express-shipping">DHL Express Shipping</div>
            </div>
          </div>
          <div className="nigeria-dhl-express-shipping-wrapper">
            <div className="nigeria-dhl">
              Nigeria - DHL Express Shipping - Full Tracking (2 to 4 work days
              delivery)NOTE: Additional government import taxes will be charged
              at delivery, Import documents may be required. Order now and get
              your shopped items delivered.
            </div>
          </div>
          <div className="shipping3946478-wrapper">
            <div className="shipping3946478">
              <b>Shipping</b>
              <span>:₦39,464.78</span>
            </div>
          </div>
          <div className="payment-wrapper">
            <h2 className="payment">
              <ol className="payment1">
                <li>Payment</li>
              </ol>
            </h2>
          </div>
          <div className="line-wrapper">
            <div className="frame-child" />
          </div>
          <div className="frame-wrapper4">
            <div className="checkbox-parent2">
              <img className="checkbox-icon6" alt="" src="/checkbox.svg" />
              <div className="image-13-wrapper">
                <img
                  className="image-13-icon"
                  loading="lazy"
                  alt=""
                  src="/image-13@2x.png"
                />
              </div>
              <div className="pay-by-credit">Pay by Credit or Debit Card</div>
            </div>
          </div>
          <div className="frame-wrapper5">
            <div className="checkbox-parent3">
              <img className="checkbox-icon7" alt="" src="/checkbox.svg" />
              <div className="image-14-wrapper">
                <img
                  className="image-14-icon"
                  loading="lazy"
                  alt=""
                  src="/image-14@2x.png"
                />
              </div>
              <div className="paypal-express-checkout">
                PayPal Express Checkout
              </div>
            </div>
          </div>
          <div className="pay-pal-option-wrapper">
            <div className="pay-pal-option">
              <img className="checkbox-icon8" alt="" src="/checkbox-8.svg" />
              <div className="paypal-express-checkout1">
                PayPal Express Checkout
              </div>
            </div>
          </div>
          <div className="line-parent">
            <div className="frame-item" />
            <h2 className="review">
              <ol className="review1">
                <li> Review</li>
              </ol>
            </h2>
          </div>
          <div className="review-your-order-summary-on-t-wrapper">
            <div className="review-your-order">
              Review your Order Summary on the other side of the screen before
              placing order.
            </div>
          </div>
          <div className="by-clicking-the-place-orderbut-wrapper">
            <div className="by-clicking-the">{`By Clicking the Place OrderButton , you confirm that you agree to our Terms & Conditions and Privacy Policy.`}</div>
          </div>
          <ReviewContent />
          <div className="page-background">
            <div className="background-shape" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default CHECKOUT;
