import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HiArrowLeft, HiOutlineViewfinderCircle, HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import menuData from '../data/menuData';
import '@google/model-viewer';

function ARViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [placement, setPlacement] = useState('floor'); // 'floor' | 'wall'
  const modelRef = useRef(null);

  const item = menuData.find((m) => m.id === Number(id));

  // Detect if this is a mobile/tablet device
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  // Detect HTTPS
  const isHttps = window.location.protocol === 'https:';

  useEffect(() => {
    setLoading(true);

    // Use rAF to ensure the ref is attached before we try to access it
    const raf = requestAnimationFrame(() => {
      const viewer = modelRef.current;

      // If ref somehow isn't ready, just hide the loader
      if (!viewer) { setLoading(false); return; }

      // If model-viewer already finished loading (e.g. browser cache), skip waiting
      if (viewer.loaded) { setLoading(false); return; }

      const done = () => setLoading(false);

      viewer.addEventListener('load',  done, { once: true });
      viewer.addEventListener('error', done, { once: true }); // show model even on error

      // ⚠️ Safety net: if neither fires in 10 s, unlock interaction anyway
      const timeout = setTimeout(done, 10000);

      // Cleanup when id changes or component unmounts
      return () => {
        viewer.removeEventListener('load',  done);
        viewer.removeEventListener('error', done);
        clearTimeout(timeout);
      };
    });

    return () => cancelAnimationFrame(raf);
  }, [id]);

  const togglePlacement = () => {
    setPlacement(prev => prev === 'floor' ? 'wall' : 'floor');
  };

  if (!item) {
    return (
      <div style={styles.notFound}>
        <p style={{ fontSize: 48 }}>🍽️</p>
        <h2 style={{ fontSize: 20, fontWeight: 600, color: 'var(--text-100)' }}>Item not found</h2>
        <button className="btn-3d" style={{ marginTop: 8 }} onClick={() => navigate('/')}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="viewer-wrap">

      {/* ─── Top bar ─── */}
      <header className="viewer-bar">
        <button className="back-btn" onClick={() => navigate('/')} aria-label="Back to menu">
          <HiArrowLeft size={18} />
        </button>
        <div className="viewer-bar-info">
          <p className="viewer-bar-name">{item.name}</p>
          <p className="viewer-bar-sub">Drag to rotate · Pinch to zoom</p>
        </div>
        <p className="viewer-bar-price">Rs {item.price.toLocaleString()}</p>
      </header>

      {/* ─── Viewer ─── */}
      <div style={{ position: 'relative', marginTop: 62, height: 'calc(100vh - 62px)', overflow: 'hidden' }}>

        {/*
          Loading overlay — pointer-events:none ensures it NEVER blocks
          the model-viewer canvas even while still visible
        */}
        {loading && (
          <div className="loading-screen fade-in" style={{ pointerEvents: 'none' }}>
            <div className="loader-ring" />
            <p style={{ fontSize: 13, color: 'var(--text-400)', fontWeight: 500 }}>Loading 3D model…</p>
          </div>
        )}

        {/*
          model-viewer handles AR natively.
          - Android : Scene Viewer (opens in Google AR)
          - iOS Safari: Quick Look (opens in Apple AR)
          The slot="ar-button" is the ONLY way to trigger AR correctly.
          model-viewer auto-hides it if AR is not supported.
        */}
        <model-viewer
          ref={modelRef}
          id="ar-model-viewer"
          src={item.modelUrl}
          alt={`3D model of ${item.name}`}
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-placement={placement}
          camera-controls
          shadow-intensity="1"
          auto-rotate
          auto-rotate-delay="0"
          interaction-prompt="auto"
          style={{ width: '100%', height: '100%', background: 'transparent' }}
        >
          {/* AR trigger — model-viewer shows/hides this automatically */}
          <button slot="ar-button" id="ar-place-button" className="ar-trigger">
            <HiOutlineViewfinderCircle size={20} />
            View in Your Space
          </button>
        </model-viewer>

        {/* ─── Placement toggle ─── */}
        <button
          className="placement-toggle"
          onClick={togglePlacement}
          title={`Switch to ${placement === 'floor' ? 'wall' : 'floor'} placement`}
        >
          <span className="placement-icon">{placement === 'floor' ? '🪑' : '🖼️'}</span>
          <span className="placement-label">{placement === 'floor' ? 'Floor' : 'Wall'}</span>
        </button>

        {/* ─── Desktop / HTTP warning banner ─── */}
        {!loading && (!isMobile || !isHttps) && (
          <div className="ar-warning fade-up">
            <HiOutlineDevicePhoneMobile size={20} style={{ color: 'var(--gold)', flexShrink: 0 }} />
            <div>
              {!isHttps ? (
                <>
                  <p style={{ fontWeight: 600, marginBottom: 2 }}>HTTPS required for AR</p>
                  <p style={{ fontSize: 12, color: 'var(--text-600)', lineHeight: 1.5 }}>
                    Restart the server with <code style={{ color: 'var(--gold)', fontSize: 11 }}>npm run dev:ar</code> to enable HTTPS,
                    then open the <strong>Network URL</strong> on your phone.
                  </p>
                </>
              ) : (
                <>
                  <p style={{ fontWeight: 600, marginBottom: 2 }}>AR works on mobile only</p>
                  <p style={{ fontSize: 12, color: 'var(--text-600)', lineHeight: 1.5 }}>
                    Open the <strong>Network URL</strong> on your Android or iPhone to use the live AR camera.
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        {/* ─── Bottom info card ─── */}
        <div className="viewer-info">
          <div className="viewer-info-card">
            <img src={item.image} alt={item.name} className="viewer-info-thumb" />
            <div style={{ flex: 1, minWidth: 0 }}>
              <p className="viewer-info-name">{item.name}</p>
              <p className="viewer-info-desc">{item.description}</p>
            </div>
            {item.badge && (
              <span style={{
                padding: '4px 9px', borderRadius: 6,
                background: 'var(--gold-dim)', color: 'var(--gold)',
                fontSize: 10, fontWeight: 700, letterSpacing: '0.06em',
                textTransform: 'uppercase', flexShrink: 0,
              }}>
                {item.badge}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

const styles = {
  notFound: {
    minHeight: '100vh', background: 'var(--bg)',
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center',
    gap: 16, padding: 24,
  },
};

export default ARViewer;
