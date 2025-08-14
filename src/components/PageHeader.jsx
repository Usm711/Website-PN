import React from "react";
import "../Css/PageHeader.css";

function PageHeader({ headerProps }) {
    const { title, src } = headerProps;
  return (
    <header
      className="page-header"
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="overlay">
        <h1 className="header-title">{title}</h1>
      </div>
    </header>
  );
}

export default PageHeader;
