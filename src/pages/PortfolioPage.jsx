import React from "react";
import PortfolioBackgroundImage from "../components/PortfolioBackgroundImage";
import PortfolioMain from "../components/PortfolioMain";
import History from "../components/History";
function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <PortfolioBackgroundImage />
      <PortfolioMain />
      <History />
    </div>
  );
}
export default PortfolioPage;