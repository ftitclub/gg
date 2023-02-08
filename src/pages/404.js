import Link from "next/link";
import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

export default function CustomError() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="bread-crumb-section two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex  align-items-center">
              <div className="error-content">
                <h2>
                  404 <span>Error</span>
                </h2>
                <p>
                  Donec bibendum enim ut elit porta ullamcorper. Vestibuluma Nai
                  quam nulla, venenatis eget dapibus ac, catali topunyabl
                  wekemdini iaculis vitae nulla.
                </p>
                <Link href="/">
                  <a>
                    <i className="bx bx-home" />
                    Back To Home
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 position-relative">
              <div className="error-img">
                <img
                  className="img-fluid"
                  src="assets/images/bg/error.png"
                  alt="error"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="error-marque">
        <ul className="d-flex align-items-center p-0 m-0">
          <li>Error Maintance Break</li>
          <li>
            <img src="assets/images/icons/error-star.svg" alt="error-star" />{" "}
            404
            <img src="assets/images/icons/error-star.svg" alt="error-star" />
          </li>
          <li>Error Maintance Break</li>
          <li>
            <img src="assets/images/icons/error-star.svg" alt="error-star" />{" "}
            404
            <img src="assets/images/icons/error-star.svg" alt="error-star" />
          </li>
          <li>Error Maintance Break</li>
          <li>
            <img src="assets/images/icons/error-star.svg" alt="error-star" />{" "}
            404
            <img src="assets/images/icons/error-star.svg" alt="error-star" />
          </li>
          <li>Error Maintance Break</li>
          <li>
            <img src="assets/images/icons/error-star.svg" alt="error-star" />{" "}
            404
            <img src="assets/images/icons/error-star.svg" alt="error-star" />
          </li>
        </ul>
      </div>
    </>
  );
}
