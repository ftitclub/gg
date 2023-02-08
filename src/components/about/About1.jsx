import React from "react";

export default function About1({padding}) {
  return (
    <>
      <div
        className={`about-me-section bg-color2 ${padding}`}
        data-scroll
        data-scroll-speed={3}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title-lg">
                <span>I am A Digital NFT Artist</span>
                <h2>Collect Your<img src="assets/images/icons/star.svg" alt="image" />Own Digital Nft Arts.<img src="assets/images/icons/star.svg" alt="image" />
                  <span>Huge Collection NFT</span>
                  <img src="assets/images/icons/star.svg" alt="image" />
                  Nft Art Own Digital NFT Arts.
                </h2>
              </div>
              <p>
                Suspendisse bibendum efficitur orci, a pretium erat mattis nec.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia curae; Curabitur volutpat eleifend urna Aenean
                eleifend vitae tellus a facilisis. Nunc posuere at augue eget
                porta. In odio tellus, dignissim fermentum purus nec, consequat
                dapibus metus. Donec aliquet dui velit, vel venenatis metus
                congue a.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
