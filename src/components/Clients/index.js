import React from 'react';

export default function Clients() {
  return (
    <div className='container-fluid mt-5'  style={{marginBottom: "120px"}} >
        <div className="ag-text-muted mb-4 ms-sm-5">Our Clients</div>
        <div className="d-flex justify-content-between  align-items-center  mx-sm-5 flex-wrap  gap-5 ">

            {Array.from(Array(8)).map((_, idx)=><img src={require("../../assets/images/clients/"+(idx+1)+".png")} />)  }

            <p className='ag-text-muted fs-5 mb-0' > & More</p>

        </div>
    </div>
  )
}
