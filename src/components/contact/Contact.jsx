import React from "react";

export default function Contact() {
  return (
    <div className="contact-section pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center g-lg-5 g-4">
          <div className="col-lg-6">
            <div className="contact-form-area">
              <div className="section-title mb-6">
                <h3>Have Any Questions</h3>
              </div>
              <form className="contact-form">
                <div className="row justify-content-center">
                  <div className="col-12">
                    <div className="form-inner">
                      <input
                        type="text"
                        name="fname"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-inner">
                      <input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-inner">
                      <input type="text" placeholder="Querry" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-inner">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Your Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12  mt-3">
                    <button type="submit" className="submit-btn">
                      {" "}
                      Connect Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="address-area ">
              <div className="section-title mb-50">
                <h2>Contact Us If You Have More Questions.</h2>
              </div>
              <ul className="address-list">
                <li>
                  <div className="text">
                    <h4>Phone</h4>
                    <a href="tel:+012-3456-789102">+012-3456-789102</a> <br />
                    <a href="tel:+012-3456-789102">+012-3456-789102</a>
                  </div>
                </li>
                <li>
                  <div className="text">
                    <h4>Email</h4>
                    <a href="mailto:info@example.com">info@example.com </a>{" "}
                    <br />
                    <a href="mailto:support@example.com">support@example.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
