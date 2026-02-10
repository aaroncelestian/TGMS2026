import React, { useEffect } from 'react';

export function MineralModal({ mineral, onClose }) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!mineral) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-handle"></div>
        
        <img 
          src={mineral.imageUrl} 
          alt={mineral.name}
          className="modal-image"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%232d2d2d" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="18" fill="%23666" text-anchor="middle" dy=".3em"%3ENo Image Available%3C/text%3E%3C/svg%3E';
          }}
        />
        
        <div className="modal-body">
          <h2 className="modal-title">{mineral.name}</h2>
          
          <div className="modal-section">
            <h3 className="modal-section-title">Physical Properties</h3>
            <div className="property-grid">
              <div className="property">
                <div className="property-label">Chemical Formula</div>
                <div className="property-value">{mineral.formula}</div>
              </div>
              <div className="property">
                <div className="property-label">Crystal System</div>
                <div className="property-value">{mineral.crystalSystem}</div>
              </div>
              <div className="property">
                <div className="property-label">Hardness (Mohs)</div>
                <div className="property-value">{mineral.hardness}</div>
              </div>
              <div className="property">
                <div className="property-label">Color</div>
                <div className="property-value">{mineral.color}</div>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Specimen Information</h3>
            <div className="property-grid">
              <div className="property">
                <div className="property-label">NHMLAC ID</div>
                <div className="property-value">#{mineral.specimenId}</div>
              </div>
              <div className="property">
                <div className="property-label">Specimen Type</div>
                <div className="property-value">{mineral.type}</div>
              </div>
              <div className="property">
                <div className="property-label">Rarity</div>
                <div className="property-value">{mineral.rarity}</div>
              </div>
              <div className="property">
                <div className="property-label">Locality</div>
                <div className="property-value">{mineral.locality || 'N/A'}</div>
              </div>
            </div>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">In Stardew Valley</h3>
            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.6' }}>
              {mineral.inGameUse}
            </p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Real-World Applications</h3>
            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.6' }}>
              {mineral.realWorldUse}
            </p>
          </div>

          <div className="modal-section">
            <h3 className="modal-section-title">Mineralogy</h3>
            <p style={{ color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.6' }}>
              {mineral.description}
            </p>
          </div>

          {mineral.funFact && (
            <div className="modal-section" style={{ 
              background: 'rgba(74, 158, 255, 0.1)', 
              border: '1px solid rgba(74, 158, 255, 0.3)',
              borderRadius: '12px',
              padding: '1rem'
            }}>
              <h3 className="modal-section-title" style={{ color: 'var(--accent)' }}>
                💎 Fun Fact
              </h3>
              <p style={{ color: 'var(--text-primary)', lineHeight: '1.6', marginBottom: 0 }}>
                {mineral.funFact}
              </p>
            </div>
          )}

          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
