import React from 'react'
import FeatureItem from './featureItem';
import './styles.css'
import img1 from "../../assets/images/features/1.png";
import img2 from "../../assets/images/features/2.png";
import img3 from "../../assets/images/features/3.png";
import img4 from "../../assets/images/features/4.png";
import img5 from "../../assets/images/features/5.png";
import img6 from "../../assets/images/features/6.png";

export default function Features() {
  return (
    <div className='mb-5 container-fluid '>
        <h2 className="text-center fw-600 display-6 mb-5">Designed For Modern Teams</h2>

        <div className="d-flex1 row flex-wrap1 justify-content-between1 gap-51 mx-sm-5">
            <FeatureItem img={img1} title="Highly Adaptable to Ever Evolving Markets" href="#"  />
            <FeatureItem img={img2} title="One Place for Teams & Vendor Collaboration" href="#"  />
            <FeatureItem img={img3} title="Automated Escalations, Reminders, and Notifications" href="#"  />
            <FeatureItem img={img4} title="100% Cloud-Based" href="#"  />
            <FeatureItem img={img5} title="Seamless Integration with WMS, ERP, and more" href="#"  />
            <FeatureItem img={img6} title="Detailed Reports and Analytics" href="#"  />
        </div>
    </div>
  )
}
