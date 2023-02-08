import React from "react";
import Script from "next/script";

import appData from "../../data/app.json";
import loadingPace from "../common/loadingPace";

const LoadingScreen = () => {
  React.useEffect(() => {
    let bodyEl = document.querySelector("body");
    if (appData.showLoading) {
      loadingPace();
      if (bodyEl.classList.contains("hideX")) {
        bodyEl.classList.remove("hideX");
      }
    } else {
      bodyEl.classList.add("hideX");
    }
  });
  return (
    <>
      <div className={`${appData.showLoading === true ? "showX" : "hideX"}`}>
        <div id="preloader">
          <div className="loading-text">Re:Wiring</div>
        </div>
        {appData.showLoading ? (
        // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
        <Script
          id="pace"
          strategy="beforeInteractive"
          src="/js/pace.min.js"
        ></Script>
      ) : (
        ""
      )}
      </div>
     
    </>
  );
};

export default LoadingScreen;
