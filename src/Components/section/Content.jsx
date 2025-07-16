import React, { useState, useEffect } from "react";
import "./Hotels.css";
import { useNavigate, useLocation } from "react-router-dom";


const sampleHotels = [
  {
    id: 1,
    name: "Agra Fort",
    description: "Tired of searching for India's hidden gems? Let us simplify your search",
    image: "/images/monuments/agrafort.svg"
  },
  {
    id: 2,
    name: "Mehtab Bagh",
    description: "Tired of searching for India's hidden gems? Let us simplify your search",
    image: "/images/monuments/mahtab bagh.svg"
  },
  {
    id: 3,
    name: "Ram Bagh",
    description: "Tired of searching for India's hidden gems? Let us simplify your search",
    image: "/images/monuments/ram bagh.svg"
  },
  {
    id: 4,
    name: "MahaBodhi Temple",
    description: "Beautiful beach hotel in Puri with sea view rooms.",
    image: "/images/monuments/mahabodhi temple.svg"
  },
  {
    id: 5,
    name: "Tajmahal",
    description: "Top rated resort at Puri Beachfront.",
    image: "/images/monuments/tajmahalhero.svg"
  },
  {
    id: 6,
    name: "Puri Palace Hotel",
    description: "Luxury stay at affordable prices.",
    image: "/images/monuments/victoria.svg"
  }
];




const Content = () =>{

  const [hotels, setHotels] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);
  
    const navigate = useNavigate();
    const location = useLocation();
  
    useEffect(() => {
      const params = new URLSearchParams(location.search);
      const query = params.get("query") || "";
  
      const filtered = sampleHotels.filter(hotel =>
        hotel.name.toLowerCase().includes(query.toLowerCase())
      );
  
      setHotels(filtered);
    }, [location.search]);
  
    const handleLoadMore = () => {
      setVisibleCount(prev => prev + 3);
    };
  
    const handleExplore = (hotelId) => {
      navigate(`/hotel/${hotelId}`);
    };
  

  return (
    <div className="hotels-section">
      
      <h2>
        <span className="orange">Indian</span> Gems
      </h2>

      <div className="hotels-grid">
        {hotels.slice(0, visibleCount).map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            <div className="card-buttons">
              <button onClick={() => handleExplore(hotel.id)}>Explore</button>
              <button className="wishlist">Wishlist</button>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < hotels.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default Content;