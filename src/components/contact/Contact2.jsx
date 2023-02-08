import React from "react";

export default function Contact2() {
  return (
    <div className="contact-section2 bg-color2 pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div className="contact-form-area">
              <div className="section-title3 mb-60 text-center">
                <h2>
                  {" "}
                  <img
                    src="assets/images/icons/section-title-dot.svg"
                    alt="image"
                  />
                  Get In Touch
                </h2>
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
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-inner">
                      <input type="text" name="number" placeholder="Number" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-inner">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-12 text-center mt-3">
                    <button
                      type="submit"
                      className="eg-btn btn--primary2 btn--lg"
                    >
                      <img src="assets/images/icons/btn-star.svg" alt="image" />{" "}
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
