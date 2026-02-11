import React from 'react';

export function About({ onClose }) {
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
          marginBottom: '1.5rem',
          fontSize: '2rem'
        }}>
          About This Exhibition
        </h1>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            The Geology of Video Games
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            This exhibition explores how video games represent mineralogy and geology, showcasing real museum specimens that appear in popular games. From Minecraft's diamonds to The Witcher's meteorites, discover the science behind the pixels.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            Natural History Museum of Los Angeles County
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            The Mineral Sciences collections include minerals, rocks, meteorites, gems, and related synthetic materials. The mineral collection is world-wide in scope and boasts particular strengths in minerals from California, native gold, and gem crystals.
          </p>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            There are approximately <strong>150,000 specimens</strong>, including more than 140,000 minerals, nearly 100,000 of which are micromounts, 3,000 rocks, 3,000 gems, and 50 meteorites. Approximately half of all known mineral species are represented in the collections.
          </p>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            The collection supports research in materials science, climate science, pharmaceuticals, environmental remediation, petroleum science, ore deposits, exobiology, bio-mineralogy, and general mineralogical research.
          </p>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            Our research laboratory has been on public display since 2017, with all experimental stations, collections, and equipment on view to our more than 800,000 visitors a year.
          </p>
          <a 
            href="https://nhmlac.org/research-collections/departments-and-programs/mineral-sciences"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: 'var(--accent)',
              textDecoration: 'none',
              padding: '0.75rem 1.5rem',
              border: '2px solid var(--accent)',
              borderRadius: '8px',
              marginTop: '0.5rem',
              fontWeight: '600'
            }}
          >
            Visit NHM Mineral Sciences →
          </a>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            Pocketful of Xtals
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            <em>Exploring the intricate nexus of art and science, and how we can think differently about our planet.</em>
          </p>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            Subscribe to Aaron Celestian's Substack for deep dives into mineralogy, crystallography, museum science, and the unexpected places where geology meets culture—from video games to fine art.
          </p>
          <a 
            href="https://aaroncelestian.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              color: '#fff',
              background: 'var(--accent)',
              textDecoration: 'none',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              marginTop: '0.5rem',
              fontWeight: '600'
            }}
          >
            Subscribe on Substack →
          </a>
        </section>

        <section>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '0.75rem'
          }}>
            Curator
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            <strong>Aaron Celestian, PhD</strong><br />
            Mineral Sciences Department<br />
            Natural History Museum of Los Angeles County
          </p>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7'
          }}>
            <strong>Kriss Leftwich</strong><br />
            Collections Manager<br />
            Natural History Museum of Los Angeles County
          </p>
        </section>
      </div>
    </div>
  );
}
