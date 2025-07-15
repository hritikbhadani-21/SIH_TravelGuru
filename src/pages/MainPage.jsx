// src/pages/MainPage.jsx
import React from "react";
import { useLocation } from "react-router-dom";

import ContentSection from "../components/ContentSection";

const MainPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("query") || "";

  return (
    <div className="main-page">
      {/* Top 3 images section */}
      <div className="top-images">
        <img src="/images/monuments/tajmahalhero.svg" alt="Big" className="big-image" />
        <img src="/images/monuments/agrafort.svg" alt="Small 1" className="small-image" />
        <img src="/images/monuments/ram bagh.svg" alt="Small 2" className="small-image" />
      </div>

      {/* Reusable sections */}
      <ContentSection title="Hotels" query={query} type="hotels" />
      <ContentSection title="Restaurants" query={query} type="restaurants" />
      <ContentSection title="Heritages & Art" query={query} type="heritage" />
      <ContentSection
        title="Underrated Places"
        query={query}
        type="underrated"
      />
    </div>
  );
};

export default MainPage;
