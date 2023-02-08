import Link from "next/link";
import React, { useEffect, useRef } from "react";
import CircleType from "circletype";

export default function Breadcrumb({ pageTitle, pageName }) {
  const circleInstance = useRef();
  useEffect(() => {
    new CircleType(circleInstance.current).radius(10);
  }, []);
  return (
    <div className="bread-crumb-section">
      <div className="bacground-img">
        <img
          className="hand-btn-left img-fluid"
          src="assets/images/bg/hand-btm-left.png"
          alt="hand-btm-left"
        />
        <img
          className="hand-top-right img-fluid"
          src="assets/images/bg/hand-top-right.png"
          alt="hand-top-right"
        />
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-10 d-flex justify-content-center flex-column align-items-center">
            <div className="circle-text-common circel-tex-area3">
              <img src="assets/images/icons/inner-star.svg" alt="image" />
              <p id="myElement" ref={circleInstance} className="circle-text">
                SCROLL * DOWN NOW&nbsp;
              </p>
            </div>
            <div className="banner-content d-flex justify-content-center flex-column align-items-center">
              <h2 className="bread-crumb-title">{pageTitle}</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb gap-3">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {pageName}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
