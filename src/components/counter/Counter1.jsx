import React from 'react'
import CountUp from 'react-countup';


export default function Counter1() {
  return (
    <div className="counter-section pb-120 bg-color2">
  <div className="container">
    <div className="counter-wrapper">
      <div className="row g-2 d-flex justify-content-center">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="counter-single text-center d-flex flex-column hover-border1">
            <div className="counter-icon">
              <img src="assets/images/icons/counter-icon1.svg" alt="image" />
            </div>
            <div className="coundown d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h3 className="odometer"><CountUp end={1000} /></h3><i className="bi bi-plus-lg" />
              </div>
              <p>Total Collection</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="counter-single text-center d-flex flex-column hover-border1">
            <div className="counter-icon">
              <img src="assets/images/icons/counter-icon2.svg" alt="image" />
            </div>
            <div className="coundown d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h3 className="odometer"><CountUp end={4500} /></h3><i className="bi bi-plus-lg" />
              </div>
              <p>New Purchaser</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="counter-single text-center d-flex flex-column hover-border1">
            <div className="counter-icon">
              <img src="assets/images/icons/counter-icon3.svg" alt="image" />
            </div>
            <div className="coundown d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h3 className="odometer"><CountUp end={200} /></h3><i className="bi bi-plus-lg" />
              </div>
              <p>Floor Price (ETH)</p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
          <div className="counter-single text-center d-flex flex-column hover-border1">
            <div className="counter-icon">
              <img src="assets/images/icons/counter-icon4.svg" alt="image" />
            </div>
            <div className="coundown d-flex flex-column">
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <h3 className="odometer"><CountUp end={1530} /></h3><i className="bi bi-plus-lg" />
              </div>
              <p>Volume Traded</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
