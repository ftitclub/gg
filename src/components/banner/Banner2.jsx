import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import CircleType from "circletype";
import Morphext from "../morphext/morphext";
export default function Banner2() {
  const phrases = ["Own Creative", "Own Creative", "Own products"];
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(10);
  }, []);
  return (
    <div className="banner-section2 bg-color2 overflow-hidden">
      <ul className="social-list2">
        <li>
          <a href="https://www.facebook.com/">
            <i className="bx bxl-facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <i className="bx bxl-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <i className="bx bxl-instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/">
            <i className="bx bxl-pinterest-alt" />
          </a>
        </li>
      </ul>
      <div className="banner-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-10 col-sm-12 col-12 p-0">
              <div className="banner2-content">
                <div className="section-title-lg">
                  <h2>
                    Collect Your
                    <strong>
                      <img src="assets/images/icons/star.svg" alt="image" />
                      <Morphext
                        animation="bounceInRight"
                        speed="3000"
                        phrases={phrases}
                      />
                    </strong>
                    NFT Arts.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-bottom">
        <div className="circle-text-common2 circle-text-banner2">
          <a href="https://opensea.io/">
            <img src="assets/images/icons/opensea-icon.svg" alt="image" />
          </a>
          <p
            id="CircleTypeText2"
            ref={circleInstance}
            className="circle-text text-white"
          >
            OPENSEA OPENSEA OPENSEA
          </p>
        </div>
        <div className="banner2-image">
          <img src="assets/images/bg/banner2-bg.png" alt="image" />
        </div>
        <div className="banner-scroll-down">
          <a href="#excellent-collection">SCROLL</a>
        </div>
        <div className="container-fluid">
          <div className="background-text">
            <Marquee gradient={false}>
              <h2 className="">
                <img src="assets/images/icons/star.svg" alt="image" />
                Seen my online space
                <img src="assets/images/icons/star.svg" alt="image" />I am your
                friendly environs
                <img src="assets/images/icons/star.svg" alt="image" />
                NFTs Artists
              </h2>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
}
