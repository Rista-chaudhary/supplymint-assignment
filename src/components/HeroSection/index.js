import React from "react";
import heroImg from "../../assets/images/hero-img.png";
import signImg from "../../assets/images/signature.png";
import './styles.css';


export default function HeroSection() {
  return (
    <div className="container ms-sm-5 hero-section__container" style={{marginBottom: "120px"}}>
      <div className="d-flex justify-content-between align-items-center1 flex-column flex-sm-row">
        <div className="container1 p1s-5 order-1 order-sm-0">
          <div className="text-muted mb-2">Procurement Management </div>
          <h1 className=" display-5 fw-700">
            Make Procurement Quick, Transparent, and Hassle-Free
          </h1>
          <img src={signImg} alt="" />
          <p className="mb-5">collaborate and close purchase orders in a jiffy.</p>
          <button className="btn ag-bg-primary text-white px-5 py-3 fw-600 ">Request a Demo</button>
        </div>
        <div className="position-relative1 w-100 h-100 hero-section__img-container">
          <img src={heroImg} alt="" className="position-absolute1 end-0 img-fluid" />
        </div>
      </div>
    </div>
  );
}
