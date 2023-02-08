import React from "react";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import faqData from "../data/faq_data.json";
export default function Faqpage() {
  return (
    <Layout>
      <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
      <div className="faq-section pt-120 pb-120">
        <div className="container">
          <div className="row g-lg-5 g-4">
            <div className="col-lg-4 order-lg-1 order-2">
              <div className="faq-sidebar">
                <div className="faq-title">
                  <h2>Q&amp;A</h2>
                  <p>
                    Donec bibendum enim ut elit porta ullamcor pertol tiuregeta
                    juozwi Vestibulum Nai quam nulla.
                  </p>
                </div>
                <div className="faq-feature">
                  <ul>
                    <li>
                      <a href="#">
                        My Polices
                        <img
                          src="assets/images/icons/star-faq.svg"
                          alt="star-faq"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Time Limitation
                        <img
                          src="assets/images/icons/star-faq.svg"
                          alt="star-faq"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        What I Do
                        <img
                          src="assets/images/icons/star-faq.svg"
                          alt="star-faq"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        How I Do It
                        <img
                          src="assets/images/icons/star-faq.svg"
                          alt="star-faq"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Tips &amp; Strategies
                        <img
                          src="assets/images/icons/star-faq.svg"
                          alt="star-faq"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Payment Options
                        <img
                          src="assets/images/icons/star-faq.svg"
                          alt="star-faq"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="faq-contact">
                  <div className="title">
                    <h3>Feel Free To Ask</h3>
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
                      <div className="col-12 mt-4">
                        <button type="submit" className="submit-btn">
                          Connect Now
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8 order-lg-2 order-1">
              {faqData.map((data) => {
                const { id, title, description } = data;
                return (
                  <div key={id} className="single-faq">
                    <div className="faq-title">
                      <h3>{title}</h3>
                    </div>
                    <div className="faq-content">
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
