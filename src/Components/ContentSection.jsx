// src/components/ContentSection.jsx
import React, { useState, useEffect } from "react";
import "./ContentSection.css";
import { useNavigate } from "react-router-dom";

// Fake data samples (for now)
const dataMap = {
  hotels: [
    { id: 1, name: "Hotel Puri Beach", desc: "Sea view rooms", image: "/images/hotels/hotel1.jpg" },
    { id: 2, name: "Puri Waves Resort", desc: "Beachfront resort", image: "/images/hotels/hotel2.jpg" },
    { id: 3, name: "Agra Fort Stay", desc: "Stay near Agra Fort", image: "/images/hotels/hotel3.jpg" },
    { id: 4, name: "Taj Hotel", desc: "Near Taj Mahal", image: "/images/hotels/hotel4.jpg" }
  ],
  restaurants: [
    { id: 1, name: "Puri Beach Café", desc: "Sea food & drinks", image: "/images/food/gajak.svg" },
    { id: 2, name: "Agra Bites", desc: "Authentic Mughlai", image: "/images/food/litti.svg" },
    { id: 3, name: "Taj Dine", desc: "Fine dining at Taj", image: "/images/food/takda.svg" }
  ],
  heritage: [
    { id: 1, name: "Agra Fort", desc: "Historic fort in Agra", image: "/images/monuments/agrafort.svg" },
    { id: 2, name: "Victoria Memorial", desc: "Kolkata Heritage", image: "/images/monuments/victoria.svg" },
    { id: 3, name: "Taj Mahal", desc: "One of the 7 wonders", image: "/images/monuments/tajmahalhero.svg" }
  ],
  underrated: [
    { id: 1, name: "Hidden Beach Puri", desc: "Less crowded spot", image: "/images/underrated/hiddenbeach.jpg" },
    { id: 2, name: "Silent Valley", desc: "Untouched beauty", image: "/images/underrated/silentvalley.jpg" },
    { id: 3, name: "Mystic Caves", desc: "Secret caves", image: "/images/underrated/mysticcaves.jpg" }
  ]
};

const ContentSection = ({ title, query, type }) => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(3);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const allItems = dataMap[type] || [];
    const filtered = allItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setItems(filtered);
  }, [query, type]);

  const handleExplore = (itemId) => {
    navigate(`/details/${type}/${itemId}`);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 3);
  };

  return (
    <section className="content-section">
      <h2><span className="orange">{title.slice(0, 2)}</span>{title.slice(2)}</h2>

      <div className="content-grid">
        {items.slice(0, visibleCount).map(item => (
          <div className="content-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <button onClick={() => handleExplore(item.id)}>Explore</button>
          </div>
        ))}
      </div>

      {visibleCount < items.length && (
        <button className="load-more" onClick={handleLoadMore}>Load More</button>
      )}
    </section>
  );
};

export default ContentSection;
