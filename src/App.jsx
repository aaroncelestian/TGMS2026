import React, { useState, useEffect } from 'react';
import { MineralCard } from './components/MineralCard';
import { MineralModal } from './components/MineralModal';
import { allGames, gameList } from './data/index';
import './styles/App.css';

function App() {
  const [selectedMineral, setSelectedMineral] = useState(null);
  const [viewMode, setViewMode] = useState('gallery');
  const [currentGameId, setCurrentGameId] = useState('minecraft'); // Default to Minecraft
  const [showGameMenu, setShowGameMenu] = useState(false);

  // Get current game data
  const currentGame = allGames[currentGameId];
  const { gameInfo, minerals } = currentGame;

  // Scroll to top when game changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowGameMenu(false);
  }, [currentGameId]);

  return (
    <div className="container">
      {/* Game Navigation Bar */}
      <div className="game-nav">
        <button className="game-nav-toggle" onClick={() => setShowGameMenu(!showGameMenu)}>
          <span className="game-nav-icon">{gameList.find(g => g.id === currentGameId)?.icon || '🎮'}</span>
          <div style={{ flex: 1, textAlign: 'left' }}>
            <span className="game-nav-title">{gameInfo.name}</span>
            <div style={{ fontSize: '0.75rem', color: 'var(--accent)', marginTop: '2px' }}>
              Tap to switch games
            </div>
          </div>
          <span className="game-nav-arrow">{showGameMenu ? '▲' : '▼'}</span>
        </button>
      </div>

      {/* Game Menu Overlay */}
      {showGameMenu && (
        <div className="game-menu-overlay" onClick={() => setShowGameMenu(false)}>
          <div className="game-menu" onClick={(e) => e.stopPropagation()}>
            <h3 className="game-menu-title">Select a Game</h3>
            <div className="game-grid">
              {gameList.map((game) => (
                <button
                  key={game.id}
                  className={`game-card ${currentGameId === game.id ? 'active' : ''}`}
                  onClick={() => setCurrentGameId(game.id)}
                >
                  <span className="game-card-icon">{game.icon}</span>
                  <span className="game-card-name">{game.name}</span>
                  <span className="game-card-count">{game.specimens} minerals</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1 className="game-logo">{gameInfo.name}</h1>
          <p className="game-subtitle">{gameInfo.tagline}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-value">{gameInfo.totalMinerals}</span>
          <span className="stat-label">Minerals</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{gameInfo.totalSpecimens}</span>
          <span className="stat-label">Specimens</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{gameInfo.diversityScore}</span>
          <span className="stat-label">Diversity</span>
        </div>
      </div>

      {/* Mineral Collection Section */}
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Museum Collection</h2>
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'gallery' ? 'active' : ''}`}
              onClick={() => setViewMode('gallery')}
            >
              Gallery
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
            >
              List
            </button>
          </div>
        </div>

        {viewMode === 'gallery' ? (
          <div className="mineral-gallery">
            {minerals.map((mineral) => (
              <MineralCard
                key={mineral.id}
                mineral={mineral}
                onClick={() => setSelectedMineral(mineral)}
                viewMode="gallery"
              />
            ))}
          </div>
        ) : (
          <div className="mineral-list">
            {minerals.map((mineral) => (
              <MineralCard
                key={mineral.id}
                mineral={mineral}
                onClick={() => setSelectedMineral(mineral)}
                viewMode="list"
              />
            ))}
          </div>
        )}
      </div>

      {/* Game Description Section */}
      <div className="section" style={{ background: 'var(--bg-primary)', paddingTop: '2rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>How Minerals Are Used in {gameInfo.name}</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            {gameInfo.gameDescription}
          </p>
        </div>
      </div>

      {/* About This Exhibit Section */}
      <div className="section" style={{ background: 'var(--bg-secondary)', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>About This Exhibit</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            This exhibition explores how video games represent mineralogy, comparing virtual minerals 
            with real specimens from the Natural History Museum of Los Angeles County collection.
          </p>
          <div style={{ 
            background: 'var(--bg-card)', 
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '1rem',
            marginTop: '1.5rem'
          }}>
            <p style={{ 
              fontSize: '0.85rem', 
              color: 'var(--text-secondary)', 
              textAlign: 'center',
              margin: 0 
            }}>
              Curated by Kriss Leftwich and Aaron Celestian<br />
              Natural History Museum of Los Angeles County<br />
              Tucson Gem & Mineral Show 2026
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMineral && (
        <MineralModal
          mineral={selectedMineral}
          onClose={() => setSelectedMineral(null)}
        />
      )}
    </div>
  );
}

export default App;
