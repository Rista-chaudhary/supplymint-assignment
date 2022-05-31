import React from "react";


export default function FeatureItem({img, title, href}) {
  return (
      <div className="col-12 col-sm-4 mb-5">

    <div className="bg-white shadow1 p-51 px-31 text-center feature-item__container d-flex flex-column justify-content-between align-items-center py-5">
      <img src={img} alt=""  className="mb-51 img-fluid1"/>
      <div className="mb-51 fs-5">{title}</div>
        <a href={href} className="text-decoration-none text-muted">Read more</a>
    </div>
      </div>    
  );
}
