import React, { useEffect, useRef } from "react";
import CircleType from "circletype";
export default function Feature2() {
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(10);
  }, []);
  return (
    <div className="rare-feature-section bg-color2 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="rare-feature-content">
              <div className="section-title3 mb-30 text-md-start text-center ms-0">
                <h2>
                  {" "}
                  <img
                    src="assets/images/icons/section-title-dot.svg"
                    alt="image"
                  />
                  Get Rarest NFT Item.
                </h2>
              </div>
              <p>
                Suspendisse bibendum efficitur orci, a pretium erat mattis nec.
                Vestibulum antegon ipsum primis in faucibus orci luctus et
                ultrices posuere cubilia curae; Curabituratuk volutpat eleifend
                urna Aenean eleifend vitae tellus a facilisis.
              </p>
              <ul className="rare-list">
                <li>
                  <h3 className="rare-title">
                    <span>D</span>igital Art
                  </h3>
                  <p>
                    Quisque non vestibulum erat utendog ullamcorper justo. Nulla
                    mollis atulanr mauris a aliquam.
                  </p>
                </li>
                <li>
                  <h3 className="rare-title">
                    <span>B</span>rand Identity
                  </h3>
                  <p>
                    In mollis dolor ac nibh pretium necafr commodo urna volutpat
                    praesent goin hober thaton.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end justify-content-center">
            <div className="rare-feature-image">
              <div className="circle-text-common2 circel-tex-rare-collection">
                <a href="https://discord.com/">
                  {" "}
                  <img src="assets/images/icons/discord-icon.svg" alt="image" />
                </a>
                <p
                  id="CircleTypeText3"
                  ref={circleInstance}
                  className="circle-text text-white"
                >
                  DISCORD DISCORD DISCORD DISCORD
                </p>
              </div>
              <div className="rare-ellipse">
                <img
                  src="assets/images/icons/feature-ellipse.svg"
                  alt="image"
                />
              </div>
              <img
                src="assets/images/bg/rare-feature-image.png"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
