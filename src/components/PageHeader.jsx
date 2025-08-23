import React from "react";
import "../Css/PageHeader.css";

function PageHeader() {

  return (
    <div>
      <div className='image-background'>
        <img src="/images/aboutBackground.jpg" alt="portfolioImage" />

        <div className='content'><h1>ABOUT US</h1>
      <h3>Home * <span>About</span></h3>
      </div>
    </div>
      </div>
  );
}

export default PageHeader;
