import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import ProductTwo from "../components/ProductTwo";
import ProductThree from "../components/ProductThree";
import FeaturedProductImages1 from "../components/FeaturedProductImages1";
import FeaturedProductImages from "../components/FeaturedProductImages";
import Options from "../components/Options";
import Footer from "../components/Footer";
import "./HOMEPAGE1.css";

const HOMEPAGE1 = () => {
  return (
    <div className="home-page1">
      <FrameComponent2 />
      <FrameComponent1 />
      <div className="home-page-inner" />
      <section className="frame-section">
        <div className="frame-parent">
          <div className="best-selling-wrapper">
            <h1 className="best-selling2">Best Selling</h1>
          </div>
          <div className="product-cards-container">
            <div className="product-cards1">
              <div className="product-card">
                <img
                  className="product-image-icon"
                  loading="lazy"
                  alt=""
                  src="/rectangle-31@2x.png"
                />
                <div className="firm-foundation-parent">
                  <b className="firm-foundation1">Firm Foundation</b>
                  <div className="clean-radiant-foundation-1">
                    Clean Radiant Foundation- 24hrs Wear And Hydration
                  </div>
                  <div className="all-shades-available1">
                    ALL SHADES AVAILABLE
                  </div>
                </div>
                <div className="product-value-parent">
                  <div className="product-value">
                    <div className="price1">Price</div>
                  </div>
                  <div className="div1">₦53,000</div>
                </div>
                <div className="component-121">
                  <div className="button1">Add to Bag</div>
                </div>
              </div>
              <ProductTwo
                propPadding="0rem var(--padding-20xl) 0rem 0rem"
                propMinWidth="17.25rem"
              />
              <ProductThree />
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products1">
        <div className="featured-product-cards">
          <FeaturedProductImages1 />
          <FeaturedProductImages
            image11="/image-11@2x.png"
            thouYourSinsBeAsScarletRe="Thou Your Sins Be As Scarlet Red Lip Stick"
            heavenlyBeautyAllureVelve="Heavenly Beauty Allure Velvet with Moisturizing  Formula"
            aLLSHADESAVAILABLE="ALL SHADES AVAILABLE"
            prop="₦21,000"
          />
          <FeaturedProductImages
            image11="/image-12@2x.png"
            thouYourSinsBeAsScarletRe="Valley Of the Eye Shadow Of Death"
            heavenlyBeautyAllureVelve="Heavenly Beauty Eye Shadow Palette With Brushes Set."
            aLLSHADESAVAILABLE="25 SHADES AVAILABLE"
            prop="₦62,495"
          />
        </div>
      </section>
      <section className="footer-content-wrapper">
        <footer className="footer-content">
          <div className="frame-group">
            <Options
              optionIcon="/rectangle-39@2x.png"
              nationwideDelivery="Nationwide Delivery"
              freeAndFastShippingForAll="Free and Fast Shipping For all Orders "
              propPadding="0rem 0rem var(--padding-9xl)"
            />
            <Options
              optionIcon="/rectangle-40@2x.png"
              nationwideDelivery="Customer Reviews"
              freeAndFastShippingForAll="Find Out What More Than 1800 Real Customers  Say About Our Product"
              propPadding="0rem 0rem var(--padding-xs)"
            />
            <Options
              optionIcon="/rectangle-41@2x.png"
              nationwideDelivery="Customer Care"
              freeAndFastShippingForAll="Our Team Of Beauty Experts Offer You 24hr Online Support."
              propPadding="0rem 0rem var(--padding-xs)"
            />
            <Options
              optionIcon="/rectangle-39-1@2x.png"
              nationwideDelivery="Genuine Products"
              freeAndFastShippingForAll="Our Products are Top Quality and 100% Original."
              propPadding="0rem 0rem var(--padding-sm)"
            />
          </div>
          <Footer
            footerLinks="/frame-92.svg"
            propAlignSelf="stretch"
            propPadding="var(--padding-130xl) 0rem var(--padding-131xl-9)"
            propFlex="unset"
          />
        </footer>
      </section>
    </div>
  );
};

export default HOMEPAGE1;
