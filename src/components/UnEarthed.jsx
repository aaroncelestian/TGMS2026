import React from 'react';

export function UnEarthed({ onClose }) {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.85)',
        zIndex: 1000,
        overflow: 'auto',
        padding: '2rem 1rem'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          background: 'var(--bg-primary)',
          borderRadius: '16px',
          padding: '2rem',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'transparent',
            border: 'none',
            color: 'var(--text-secondary)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            lineHeight: 1
          }}
        >
          ✕
        </button>

        {/* Content */}
        <h1 style={{ 
          color: 'var(--text-primary)', 
          marginBottom: '0.5rem',
          fontSize: '2rem'
        }}>
          Unearthed: Raw Beauty
        </h1>
        
        <p style={{ 
          color: 'var(--accent)', 
          fontSize: '1.1rem',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          See some of the rarest and most spectacular mineral specimens ever discovered.
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            Exhibition Details
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            <strong>Dates:</strong> December 14, 2025 – April 18, 2027<br />
            <strong>Hours:</strong> Open daily, 9:30 am – 5 pm<br />
            <strong>Location:</strong> Natural History Museum of Los Angeles County
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            About the Exhibition
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            Experience our newest exhibition showcasing some of the rarest and most spectacular mineral specimens ever discovered. <em>Unearthed: Raw Beauty</em> reveals the beauty of minerals and crystals in their natural state, with some on view for the very first time.
          </p>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            This exhibition celebrates the raw, unpolished beauty of Earth's geological treasures—from massive crystal formations to delicate mineral specimens that showcase nature's artistry at its finest.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            Visit the Exhibition
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a 
              href="https://nhm.org/unearthed-rare-mineral-exhibition"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                color: '#fff',
                background: 'var(--accent)',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                fontWeight: '600'
              }}
            >
              Learn More →
            </a>
            <a 
              href="https://nhm.org/plan-your-visit/nhm-buy-tickets"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                color: 'var(--accent)',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                border: '2px solid var(--accent)',
                borderRadius: '8px',
                fontWeight: '600'
              }}
            >
              Buy Tickets →
            </a>
          </div>
        </section>

        <section>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.9rem',
            lineHeight: '1.6',
            fontStyle: 'italic'
          }}>
            Curated by Aaron Celestian, PhD, Mineral Sciences Department, Natural History Museum of Los Angeles County
          </p>
        </section>
      </div>
    </div>
  );
}
