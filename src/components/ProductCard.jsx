import React, { useState } from 'react';
import { HiOutlineCube } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

function ProductCard({ item, index }) {
  const navigate = useNavigate();

  return (
    <div
      className="card fade-up"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {/* ── Image ── */}
      <div className="card-img">
        <img src={item.image} alt={item.name} loading="lazy" />
        <div className="card-img-fade" />

        {/* Badge */}
        {item.badge && (
          <span className="card-badge">{item.badge}</span>
        )}

        {/* Rating pill — overlaid on image */}
        <div className="rating-pill">
          <span className="rating-dot">★</span>
          {item.rating}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="card-body">
        <p className="card-name">{item.name}</p>
        <p className="card-desc">{item.description}</p>

        <div className="card-footer">
          <div>
            <p className="card-price-label">Price</p>
            <p className="card-price">Rs {item.price.toLocaleString()}</p>
          </div>

          <button
            id={`view-3d-${item.id}`}
            className="btn-3d"
            onClick={() => navigate(`/ar/${item.id}`)}
          >
            <HiOutlineCube />
            View in 3D
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
