import React from 'react';

export function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      padding: '2rem 1rem',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {/* Exhibition Info */}
        <div>
          <h3 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '1.1rem',
            marginBottom: '0.75rem',
            fontWeight: '600'
          }}>
            TGMS 2026 Exhibition
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.9rem',
            lineHeight: '1.6'
          }}>
            The Geology of Video Games: Exploring mineralogy through interactive digital worlds.
          </p>
        </div>

        {/* NHM LA */}
        <div>
          <h3 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '1.1rem',
            marginBottom: '0.75rem',
            fontWeight: '600'
          }}>
            Natural History Museum of LA
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.9rem',
            lineHeight: '1.6',
            marginBottom: '0.5rem'
          }}>
            150,000+ mineral specimens supporting research in materials science, climate science, and mineralogy.
          </p>
          <a 
            href="https://nhmlac.org/research-collections/departments-and-programs/mineral-sciences"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent)',
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}
          >
            Visit Mineral Sciences →
          </a>
        </div>

        {/* Substack */}
        <div>
          <h3 style={{ 
            color: 'var(--text-primary)', 
            fontSize: '1.1rem',
            marginBottom: '0.75rem',
            fontWeight: '600'
          }}>
            Pocketful of Xtals
          </h3>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '0.9rem',
            lineHeight: '1.6',
            marginBottom: '0.5rem'
          }}>
            Exploring the intricate nexus of art and science, and how we can think differently about our planet.
          </p>
          <a 
            href="https://aaroncelestian.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--accent)',
              fontSize: '0.9rem',
              textDecoration: 'none'
            }}
          >
            Subscribe on Substack →
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        maxWidth: '1200px',
        margin: '2rem auto 0',
        paddingTop: '1.5rem',
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.85rem'
      }}>
        <p>© 2026 Natural History Museum of Los Angeles County. Curated by Aaron Celestian, PhD.</p>
      </div>
    </footer>
  );
}
