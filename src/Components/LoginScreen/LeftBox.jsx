import React from 'react'
import waterMarkLogo from "../../assets/waterMarkLogo.png"
import "./LeftBox.css";
import logo from "../../assets/logo-img.png"
import PieChart from "../../assets/PieChart.png"
import Arrow from "../../assets/Arrow.png";

const LeftBox = () => {
  return (
    <div class="left-container">
      <div class="left-middle">
        <div class="table-first">
          <div class="heading">
            <img className='size-7' src={logo} alt=""/><h1>AI to Detect & Autofix Bad Code</h1></div>
          <div class="usage">
              <div><h1>30+</h1><p>Language Support</p></div>
              <div><h1>10K+</h1><p>Developers</p></div>
              <div><h1>100K+</h1><p>Hours Saved</p></div>
              
          </div>

        </div>
        <div class="table-second">
             <div class="chart">
                  <div><img class="piechart" src={PieChart} alt="img" /></div>
                  <div>
                    <div className='flex justify-center items-center gap-1'><img className='size-3' src={Arrow} alt="" /><p className='text-blue-900 font-extrabold text-sm'>14%</p></div>
                    <div className='text-xs pl-3'>This week</div>
                  </div>
                    
             </div>
             <div class="issues">
              <h3 className='font-extrabold text-sm pt-2'>Issues Fixed</h3>
              <h1 className='font-extrabold text-4xl'>500K+</h1>

             </div>
        </div>
      </div>
      <div class="left-bottom">
        <img class="waterMark" src={waterMarkLogo} alt="" />
      </div>
    </div>
  )
}

export default LeftBox;