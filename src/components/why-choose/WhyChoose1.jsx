import React, { useEffect, useRef } from "react";
import thumparallaxUp from "../../components/common/thumparallaxUp";

export default function WhyChoose1() {
  const parallaxCls = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <div className="features-section bg-color2 pt-120 pb-120 ">
      <div className="container">
        <div className="row">
          <div
            className="col-xxl-6 col-xl-7 col-lg-7"
            data-scroll
            data-scroll-speed={3}
          >
            <div className="section-title1 text-md-start text-center">
              <span>Why Intend Me</span>
              <h2>You Will Find The rarest Collections Here.</h2>
            </div>
            <div className="row mb-25 justify-content-md-start justify-content-center g-4">
              <div className="col-md-4 col-sm-6">
                <div className="feature-item">
                  <img
                    src="assets/images/icons/feature-icon1.svg"
                    alt="image"
                  />
                  <h4>Huge Collection</h4>
                  <p>Vivamus volutpat onemen condimentum volutpat.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-item">
                  <img
                    src="assets/images/icons/feature-icon2.svg"
                    alt="image"
                  />
                  <h4>High Quality</h4>
                  <p>Nunc ultricies velit sedant ipsum malesuadaevt.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="feature-item">
                  <img
                    src="assets/images/icons/feature-icon3.svg"
                    alt="image"
                  />
                  <h4>Big Community</h4>
                  <p>at consectetur elit authore dignissim donec ut.</p>
                </div>
              </div>
            </div>
            <p className="text-md-start text-center">
              Suspendisse bibendum efficitur orci, a pretium erat mattis nec.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae Curabitur volutpat.
            </p>
          </div>
          <div className="col-xxl-6 col-xl-5 col-lg-5 ps-lg-5 d-lg-block d-none ">
            <div className="feature-image">
              <img
                ref={parallaxCls}
                src="assets/images/bg/feature-img.png"
                className="img-fluid parralax-image"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
