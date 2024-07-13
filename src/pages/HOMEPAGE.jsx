import Container from "../components/Container";
import Hero from "../components/Hero";
import FrameComponent from "../components/FrameComponent";
import ProductTwo from "../components/ProductTwo";
import ProductThree from "../components/ProductThree";
import FeaturedProductImages1 from "../components/FeaturedProductImages1";
import FeaturedProductImages from "../components/FeaturedProductImages";
import Options from "../components/Options";
import Footer from "../components/Footer";
import "./HOMEPAGE.css";

const HOMEPAGE = () => {
  return (
    <div className="home-page">
      <img className="home-page-child" alt="" src="/rectangle-7@2x.png" />
      <section className="navigation">
        <Container />
        <Hero />
      </section>
      <FrameComponent />
      <div className="home-page-item" />
      <section className="product-cards-wrapper">
        <div className="product-cards">
          <div className="best-selling">
            <h1 className="best-selling1">Best Selling</h1>
          </div>
          <div className="product-grid">
            <div className="product-one">
              <div className="product-one-card">
                <img
                  className="product-one-image"
                  loading="lazy"
                  alt=""
                  src="/rectangle-31@2x.png"
                />
                <div className="product-one-info">
                  <b className="firm-foundation">Firm Foundation</b>
                  <div className="clean-radiant-foundation-">
                    Clean Radiant Foundation- 24hrs Wear And Hydration
                  </div>
                  <div className="all-shades-available">
                    ALL SHADES AVAILABLE
                  </div>
                </div>
                <div className="product-one-price">
                  <div className="product-one-price-label">
                    <div className="price">Price</div>
                  </div>
                  <div className="div">₦53,000</div>
                </div>
                <div className="component-12">
                  <div className="button">Add to Bag</div>
                </div>
              </div>
              <ProductTwo />
              <ProductThree />
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products">
        <div className="featured-products-container">
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
      <footer className="delivery-wrapper">
        <div className="delivery">
          <div className="delivery-options">
            <Options
              optionIcon="/rectangle-39@2x.png"
              nationwideDelivery="Nationwide Delivery"
              freeAndFastShippingForAll="Free and Fast Shipping For all Orders "
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
          <Footer footerLinks="/frame-92.svg" />
        </div>
      </footer>
    </div>
  );
};

export default HOMEPAGE;
