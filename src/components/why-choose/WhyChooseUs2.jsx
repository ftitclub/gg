import React, { useEffect, useRef } from "react";
import thumparallaxUp from "../../components/common/thumparallaxUp";
import Link from "next/link";

export default function WhyChooseUs2() {
  useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <div className="choose-us-section pt-120 pb-120 bg-color2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-10">
            <div className="choose-us-image">
              <img
                src="assets/images/bg/choose-us-image.png"
                className="img-fluid parralax-image"
                alt="image"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section-title4 mb-0">
              <span>Why Choose me</span>
              <h2>Extraordinary NFTs.</h2>
              <img
                src="assets/images/icons/sec-title4-vector.svg"
                alt="image"
              />
            </div>
            <div className="choose-us-content">
              <p>
                Ouspendisse bibendum efficitur orci, a pretium eratoin mattis
                nec. About golam tor Vestibulum ante ipsum primis in faucibusol
                orci luctus et ultrices posuere noicharjoi cubilia curae
                Curabitura volutpat. Gong for this world for accecpts all
                thingai foclan hiking buraj noking of world of month.
              </p>
              <ul className="choose-us-list">
                <li>Suspendisse bibendum efficitur orci, a pretium eratoin.</li>
                <li>Mauris pretium elit eu ornare feugiat floregonen.</li>
                <li>congue sapien vehicula viverra tortor tempus vitaeng.</li>
              </ul>
              <Link href="/about">
                <a className="eg-btn btn--primary-outline2 btn--lg">
                  {" "}
                  Learn More About
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
