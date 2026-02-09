import React from 'react';

export function MineralCard({ mineral, onClick, viewMode = 'gallery' }) {
  if (viewMode === 'list') {
    return (
      <div className="mineral-card-list" onClick={onClick}>
        <img 
          src={mineral.imageUrl} 
          alt={mineral.name}
          className="mineral-image-list"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Crect fill="%232d2d2d" width="80" height="80"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="12" fill="%23666" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
          }}
        />
        <div className="mineral-info-list">
          <div className="mineral-name">{mineral.name}</div>
          <div className="mineral-meta">
            <span className="meta-tag">{mineral.formula}</span>
            <span className="meta-tag">{mineral.crystalSystem}</span>
          </div>
          <div className="mineral-description">
            {mineral.description}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mineral-card" onClick={onClick}>
      <img 
        src={mineral.imageUrl} 
        alt={mineral.name}
        className="mineral-image"
        onError={(e) => {
          e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="280" height="200"%3E%3Crect fill="%232d2d2d" width="280" height="200"/%3E%3Ctext x="50%25" y="50%25" font-family="Arial" font-size="16" fill="%23666" text-anchor="middle" dy=".3em"%3ENo Image Available%3C/text%3E%3C/svg%3E';
        }}
      />
      <div className="mineral-info">
        <h3 className="mineral-name">{mineral.name}</h3>
        <div className="mineral-meta">
          <span className="meta-tag">{mineral.type}</span>
          <span className="meta-tag">#{mineral.specimenId}</span>
          <span className="meta-tag">{mineral.rarity}</span>
        </div>
        <p className="mineral-description">{mineral.description}</p>
      </div>
    </div>
  );
}
