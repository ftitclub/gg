import Link from "next/link";
import Script from "next/script";
import React, { useEffect, useRef } from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import collection_data from "../data/collection_data.json";
import hoverDestence from "../components/common/hoverDestence";
import CollectionSelect from "../components/collection/CollectionSelect";

export default function Collection2Page() {
  const direction = useRef();
  useEffect(() => {
    setTimeout(() => {
      hoverDestence();
    }, 1000);
  });
  return (
    <>
      <Layout>
        <Breadcrumb pageName="Collection 02" pageTitle="Collection 02" />
        <div className="collection-one-section bg-color2 pt-120 pb-120">
          <div className="container">
            <div className="row align-items-center mb-50 g-4">
              <div className="col-lg-6 mb-20">
                <div className="section-title-5">
                  <h2>All Collection</h2>
                </div>
              </div>
              <div className="col-lg-6 mb-20">
                <div
                  className="input-with-btn"
                  data-scroll
                  data-scroll-speed={3}
                >
                  <form>
                    <div className="form-inner">
                      <input type="text" placeholder="Search Here......" />
                      <button
                        type="submit"
                        className="eg-btn btn--lg btn--primary"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-12">
                <CollectionSelect />
              </div>
            </div>
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-1 g-4 cf pb-80 justify-content-center">
              {collection_data.map((data) => {
                const { id, image, collectionid } = data;
                return (
                  <div key={id} className="col">
                    <div
                      className=" collection-single2 direction-hover custom-cursor"
                      ref={direction}
                    >
                      <Link href="/collection-details">
                        <a
                          className="direction-overlay"
                          data-cursor="View<br>Details"
                        ></a>
                      </Link>
                      <div className="collection2-image">
                        <img src={image} className="img-fluid" alt="image" />
                      </div>
                      <div className="collection2-title">
                        <p>{collectionid}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <div className="lode-more-btn">
                  <a className="eg-btn btn--primary-outline btn--lg" href="#">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {/* <Script src="js/TweenMax.min.js" /> */}
      {/* <Script src="js/gsap.min.js" /> */}
    </>
  );
}
