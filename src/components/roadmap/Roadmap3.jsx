import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
SwiperCore.use([Pagination, Autoplay, Navigation]);

export default function Roadmap3() {
  const roadmap3big = {
    loop: true,
    spaceBetween: 20,
    speed: 1400,
    slidesPerView: 1,
    allowTouchMove: false,
    navigation: {
      nextEl: ".roadmap-next3",
      prevEl: ".roadmap-prev3",
    },
  };
  const roadmap3small = {
    loop: true,
    spaceBetween: 15,
    speed: 1400,
    slidesPerView: 3,
    navigation: {
      nextEl: ".roadmap-next3",
      prevEl: ".roadmap-prev3",
    },
    centeredSlides: true,
    breakpoints: {
      280: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <div
      className="roadmap-section3 bg-color2 pt-120 pb-120"
      data-scroll
      data-scroll-speed={3}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="section-title4">
            <span>Roadmap</span>
            <h2>The Roadmap</h2>
            <img
              src="assets/images/icons/sec-title4-vector.svg"
              className="img-fluid"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex align-items-center mb-50">
          <div className="col-12 d-flex justify-content-center">
            <Swiper {...roadmap3big} className="swiper swiper-roadmap3-big">
              <div className="swiper-wrapper">
                <Swiper className="swiper-slide">
                  <div className="roadmap3-single">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="roadmap3-image">
                          <img
                            src="assets/images/bg/roadmap31.png"
                            className="img-fluid parralax-image"
                            alt="image"
                          />
                        </div>
                        <div className="roadmap3-content">
                          <div className="roadmap3-date">August 10, 2022</div>
                          <h3>Creative Arts Set To Follow Up.</h3>
                          <p>
                            Puspendisse bibendum efficitur orci, a pretium
                            eratoin mattis nec. About gol Vestibulum ante ipsum
                            primis in faucibusol orci luctus et ultrices posuere
                            noi cubilia curae Curabitura volutpat. Gong for this
                            world for accecpts all thingai hiking buraj noking
                            of world of month.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row roadmap3-img-group d-lg-flex d-none g-3">
                          <div className="col-lg-6">
                            <img
                              src="assets/images/bg/roadmap32.png"
                              className="img-fluid parralax-image"
                              alt="image"
                            />
                          </div>
                          <div className="col-lg-6">
                            <img
                              src="assets/images/bg/roadmap33.png"
                              className="img-fluid parralax-image"
                              alt="image"
                            />
                          </div>
                        </div>
                        <ul className="roadmap3-list">
                          <li>
                            {" "}
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>{" "}
                            In bibendum libero nisl, sit amet pharetra.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            Phasellus dapibus, metus vitae placerat convallis.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            arcu mi finibus eros, eget tincidunt libero nulla.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            Nulla ornare sagittis odio non dictum Proin nec.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Swiper>
                <SwiperSlide className="swiper-slide">
                  <div className="roadmap3-single">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="roadmap3-image">
                          <img
                            src="assets/images/bg/roadmap34.png"
                            className="img-fluid parralax-image"
                            alt="image"
                          />
                        </div>
                        <div className="roadmap3-content">
                          <div className="roadmap3-date">August 10, 2022</div>
                          <h3>Creative Arts Set To Follow Up.</h3>
                          <p>
                            Puspendisse bibendum efficitur orci, a pretium
                            eratoin mattis nec. About gol Vestibulum ante ipsum
                            primis in faucibusol orci luctus et ultrices posuere
                            noi cubilia curae Curabitura volutpat. Gong for this
                            world for accecpts all thingai hiking buraj noking
                            of world of month.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row roadmap3-img-group d-lg-flex d-none g-3">
                          <div className="col-lg-6">
                            <img
                              src="assets/images/bg/roadmap35.png"
                              className="img-fluid parralax-image"
                              alt="image"
                            />
                          </div>
                          <div className="col-lg-6">
                            <img
                              src="assets/images/bg/roadmap36.png"
                              className="img-fluid parralax-image"
                              alt="image"
                            />
                          </div>
                        </div>
                        <ul className="roadmap3-list">
                          <li>
                            {" "}
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>{" "}
                            In bibendum libero nisl, sit amet pharetra.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            Phasellus dapibus, metus vitae placerat convallis.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            arcu mi finibus eros, eget tincidunt libero nulla.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            Nulla ornare sagittis odio non dictum Proin nec.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <div className="roadmap3-single">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="roadmap3-image">
                          <img
                            src="assets/images/bg/roadmap37.png"
                            className="img-fluid parralax-image"
                            alt="image"
                          />
                        </div>
                        <div className="roadmap3-content">
                          <div className="roadmap3-date">August 10, 2022</div>
                          <h3>Creative Arts Set To Follow Up.</h3>
                          <p>
                            Puspendisse bibendum efficitur orci, a pretium
                            eratoin mattis nec. About gol Vestibulum ante ipsum
                            primis in faucibusol orci luctus et ultrices posuere
                            noi cubilia curae Curabitura volutpat. Gong for this
                            world for accecpts all thingai hiking buraj noking
                            of world of month.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="row roadmap3-img-group d-lg-flex d-none g-3">
                          <div className="col-lg-6">
                            <img
                              src="assets/images/bg/roadmap38.png"
                              className="img-fluid parralax-image"
                              alt="image"
                            />
                          </div>
                          <div className="col-lg-6">
                            <img
                              src="assets/images/bg/roadmap39.png"
                              className="img-fluid parralax-image"
                              alt="image"
                            />
                          </div>
                        </div>
                        <ul className="roadmap3-list">
                          <li>
                            {" "}
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>{" "}
                            In bibendum libero nisl, sit amet pharetra.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            Phasellus dapibus, metus vitae placerat convallis.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            arcu mi finibus eros, eget tincidunt libero nulla.
                          </li>
                          <li>
                            <svg
                              width={16}
                              height={14}
                              viewBox="0 0 16 14"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M15.2998 0.173419C14.4562 0.622893 13.1232 1.47583 12.2518 2.1235C10.5057 3.41883 8.94696 4.95129 7.85344 6.45543C7.41603 7.05355 7.05847 7.6269 6.76686 8.18962L6.54469 8.61079L6.40583 8.44798C6.32598 8.35597 5.81915 7.75785 5.27412 7.11726C4.7291 6.47667 4.23962 5.92456 4.1806 5.89271C4.08687 5.84316 3.89594 5.83608 2.34765 5.8467L0.615374 5.85732L0.532058 5.95641C0.39667 6.11921 0.417499 6.29263 0.598016 6.50498C0.677861 6.60054 2.22615 8.3135 4.03827 10.3096C5.96148 12.4295 7.3709 13.9549 7.42645 13.9797C7.56531 14.0363 7.75971 13.9691 7.8222 13.8452C7.8465 13.7921 7.93329 13.5019 8.01313 13.2011C8.95044 9.65838 10.8632 6.0909 13.4217 3.10739C13.9598 2.48095 14.9353 1.47583 15.4873 0.983888C15.7476 0.753842 15.9698 0.537953 15.9802 0.50964C16.0115 0.4247 16.0045 0.251281 15.9663 0.173419C15.9247 0.0990963 15.758 0 15.6747 0C15.6435 0 15.4768 0.0778618 15.2998 0.173419Z" />
                            </svg>
                            Nulla ornare sagittis odio non dictum Proin nec.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
        <div className="row align-items-center gy-5">
          <div className="col-lg-8 d-flex justify-content-lg-start justify-cotnent-center">
            <Swiper {...roadmap3small} className="swiper swiper-roadmap3-small">
              <div className="swiper-wrapper">
                <SwiperSlide className="swiper-slide">
                  <button className="slider-button">August 20, 2022</button>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <button className="slider-button">August 05, 2022</button>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <button className="slider-button">July 30, 2022</button>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <button className="slider-button">June 07, 2022</button>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <button className="slider-button">May 08, 2022</button>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
          <div className="col-lg-4">
            <div className="slider-arrows arrow-style-3 d-flex justify-content-lg-end justify-content-center align-items-center gap-5">
              <div
                className="roadmap-prev3 swiper-prev-arrow"
                tabIndex={0}
                role="button"
                aria-label="Previous slide"
              >
                <img src="assets/images/icons/prev3.svg" alt="image" />
                PREVIOUS
              </div>
              <div
                className="roadmap-next3 swiper-next-arrow"
                tabIndex={0}
                role="button"
                aria-label="Next slide"
              >
                NEXT
                <img src="assets/images/icons/next3.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
