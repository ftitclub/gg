import React, { useEffect, useRef } from "react";
import CircleType from "circletype";
import thumparallaxUp from "../../components/common/thumparallaxUp";

export default function Banner1() {
  const circleInstance = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
    new CircleType(circleInstance.current).radius(10);
  }, []);

  return (
    <>
      <div className="banner-section1 bg-color2">
        <div className="background-text-bg ">
          <h2 className="marquee_text1">NFT Collection</h2>
          <h2 className="marquee_text1">NFT Collection</h2>
        </div>
        <div className="banner-img">
          <div className="circle-text-common circel-tex-area1">
            <img src="assets/images/icons/opensea-icon.svg" alt="image" />
            <p
              id="CircleTypeText1"
              ref={circleInstance}
              className="circle-text"
            >
              NEXT NFT COLLECTION NEXT NFT
            </p>
          </div>
          <img
            src="assets/images/bg/banner1-bg.png"
            className="img-fluid parralax-image banner1-bg"
            alt="image"
          />
        </div>
        <div className="banner1-content" data-scroll data-scroll-speed={3}>
          <h1 className="cursor-scale">
            I Am Your Friendly Neighbourhood NFTs Artist.
          </h1>
        </div>
      </div>
    </>
  );
}
