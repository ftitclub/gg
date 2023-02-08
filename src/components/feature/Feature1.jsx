import React from "react";

export default function Feature1({ padding }) {
  return (
    <div className={`feature-section3 bg-color2 pt-120 ${padding}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-6">
            <h2 className="feature3-title">
              Finding The Amazing digital NFT Arts.
            </h2>
          </div>
          <div className="col-xl-4 col-lg-6 d-xl-flex d-none">
            <div className="feature3-image">
              <div className="feature3-ellipse">
                <img
                  src="assets/images/icons/feature3-ellipse.svg"
                  alt="image"
                />
              </div>
              <img
                src="assets/images/bg/feature3-img.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="row g-4 justify-content-center">
              <div className="col-md-6 col-sm-6 col-12">
                <div className="feature-item">
                  <img
                    src="assets/images/icons/feature-icon1.svg"
                    alt="image"
                  />
                  <h4>Huge Collection</h4>
                  <p>Vivamus volutpat onemen condimentum volutpat.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <div className="feature-item">
                  <img
                    src="assets/images/icons/feature-icon3.svg"
                    alt="image"
                  />
                  <h4>Big Community</h4>
                  <p>at consectetur elit authore dignissim donec ut.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <div className="feature-item">
                  <img
                    src="assets/images/icons/feature-icon4.svg"
                    alt="image"
                  />
                  <h4>Top collocation</h4>
                  <p>at consectetur elit authore dignissim donec ut.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-12">
                <div className="feature-item">
                  <img
                    src="assets/images/icons/feature-icon2.svg"
                    alt="image"
                  />
                  <h4>High Quality</h4>
                  <p>Nunc ultricies velit sedant ipsum malesuadaevt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
