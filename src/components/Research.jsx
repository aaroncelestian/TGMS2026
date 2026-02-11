import React from 'react';

export function Research({ onClose }) {
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
          maxWidth: '900px',
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
          Research & Impact
        </h1>
        
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Exploring how mineral science creates real-world impact in clean soil, public health, and sustainable energy.
        </p>

        {/* Featured Article */}
        <section style={{ 
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'var(--bg-secondary)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            Featured Article
          </h2>
          <h3 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '1.1rem',
            marginBottom: '0.75rem',
            lineHeight: '1.4'
          }}>
            Real-World Impact: How L.A.'s Natural History Museum Turns Mineral Science into Clean Soil, Public Health, and Sustainable Energy
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            Dr. Aaron Celestian's research at the Natural History Museum of Los Angeles County demonstrates how mineralogy directly impacts environmental remediation, public health initiatives, and the development of sustainable energy solutions.
          </p>
          <a 
            href="https://www.givinglistlosangeles.com/2025/11/17/dr-aaron-celestian-pocketful-of-xtals-real-world-impact-how-l-a-s-natural-history-museum-turns-mineral-science-into-clean-soil-public-health-and-sustainable-energy/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: '#fff',
              background: 'var(--accent)',
              textDecoration: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            Read Full Article →
          </a>
        </section>

        {/* Featured Video */}
        <section style={{ 
          marginBottom: '2rem',
          padding: '1.5rem',
          background: 'var(--bg-secondary)',
          borderRadius: '12px',
          border: '1px solid var(--border)'
        }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            Featured Video
          </h2>
          <h3 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '1.1rem',
            marginBottom: '1rem',
            lineHeight: '1.4'
          }}>
            Mineral Sciences Research at NHM
          </h3>
          
          {/* Video Embed */}
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
            overflow: 'hidden',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <iframe
              src="https://www.youtube.com/embed/44BXfaC_6R8"
              title="Mineral Sciences Research"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <a 
            href="https://www.youtube.com/watch?v=44BXfaC_6R8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: 'var(--accent)',
              textDecoration: 'none',
              padding: '0.75rem 1.5rem',
              border: '2px solid var(--accent)',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}
          >
            Watch on YouTube →
          </a>
        </section>

        {/* Research Areas */}
        <section>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '1rem'
          }}>
            Research Focus Areas
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem'
          }}>
            <div style={{
              padding: '1rem',
              background: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Environmental Remediation
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Using minerals to clean contaminated soil and water
              </p>
            </div>
            <div style={{
              padding: '1rem',
              background: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Sustainable Energy
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Developing mineral-based solutions for clean energy
              </p>
            </div>
            <div style={{
              padding: '1rem',
              background: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                Public Health
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Applying mineralogy to address health challenges
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
