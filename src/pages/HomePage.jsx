import React, { useState } from 'react';
import menuData, { categories } from '../data/menuData';
import ProductCard from '../components/ProductCard';

function HomePage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const items =
    activeCategory === 'All'
      ? menuData
      : menuData.filter((item) => item.category === activeCategory);

  return (
    <div className="home-bg">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 20px 80px' }}>

        {/* ── Header ── */}
        <header style={{ marginBottom: '40px' }}>
          <div style={{ marginBottom: '18px' }}>
            <span className="hero-tag">
              <span>◈</span>
              AR-Powered Experience
            </span>
          </div>
          <h1
            className="display"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.1, color: 'var(--text-100)', marginBottom: '14px' }}
          >
            Our Menu
          </h1>
          <p style={{ fontSize: '15px', color: 'var(--text-400)', maxWidth: '380px', lineHeight: 1.7, fontWeight: 300 }}>
            Every dish in 3D. Tap any item to see it placed in your real space before you order.
          </p>
        </header>

        {/* ── Category tabs ── */}
        <nav
          className="no-scroll"
          style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '24px' }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`cat-${cat.toLowerCase()}`}
              className={`tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* ── Item count divider ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <span style={{ fontSize: '11px', color: 'var(--text-600)', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
            {items.length} item{items.length !== 1 ? 's' : ''}
          </span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        {/* ── Grid — centered ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '20px',
        }}>
          {items.map((item, i) => (
            <ProductCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Footer ── */}
        <footer style={{ textAlign: 'center', marginTop: '72px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '12px', color: 'var(--text-600)' }}>
            Crafted for Lahore's finest cafés &nbsp;·&nbsp; Powered by WebAR
          </p>
        </footer>

      </div>
    </div>
  );
}

export default HomePage;
