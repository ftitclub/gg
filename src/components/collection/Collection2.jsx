import Link from "next/link";
import React, { useEffect, useRef } from "react";
import thumparallaxUp from "../../components/common/thumparallaxUp";
import collection_data from "../../data/collection_data.json";

import hoverDestence from "../common/hoverDestence";
export default function Collection2() {
  const direction = useRef();
  useEffect(() => {
    setTimeout(() => {
      hoverDestence();
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <div
        className="excellent-collection-section bg-color2 pt-xxl-120 pb-120"
        id="excellent-collection"
      >
        <div className="section-title3 sec-mb-100">
          <h2>
            {" "}
            <img src="assets/images/icons/section-title-dot.svg" alt="image" />
            Excellent Collections.
          </h2>
        </div>
        <div className="container">
          <div className="row row-cols-xl-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4 mb-70">
            {collection_data.slice(0, 8).map((data) => {
              const { id, image2, collectionid } = data;
              return (
                <div className="col" key={id}>
                  <div
                    className="excellent-collect-single direction-hover custom-cursor"
                    ref={direction}
                  >
                    <Link href="/collection-details">
                      <a className="direction-overlay"></a>
                    </Link>
                    <div className="excellent-image">
                      <img
                        src={image2}
                        className="img-fluid parralax-image"
                        alt="image"
                      />
                    </div>
                    <div className="excellent-content">
                      <p>{collectionid}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center">
            <div className="col--4 text-center">
              <Link
                href="/collection1" 
              >
               <a className="eg-btn btn--primary2 btn--lg"><img src="assets/images/icons/btn-star.svg" alt="image" />
                View All Collection</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
