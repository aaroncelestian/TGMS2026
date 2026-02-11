import React, { useState, useEffect } from 'react';
import { MineralCard } from './components/MineralCard';
import { MineralModal } from './components/MineralModal';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { UnEarthed } from './components/UnEarthed';
import { Research } from './components/Research';
import { allGames, gameList } from './data/index';
import './styles/App.css';

function App() {
  const [selectedMineral, setSelectedMineral] = useState(null);
  const [viewMode, setViewMode] = useState('gallery');
  const [showGameMenu, setShowGameMenu] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showUnEarthed, setShowUnEarthed] = useState(false);
  const [showResearch, setShowResearch] = useState(false);

  // Get game from URL parameter or default to minecraft
  const getInitialGame = () => {
    const params = new URLSearchParams(window.location.search);
    const gameParam = params.get('game');
    return gameParam && allGames[gameParam] ? gameParam : 'minecraft';
  };

  const [currentGameId, setCurrentGameId] = useState(getInitialGame());

  // Get current game data
  const currentGame = allGames[currentGameId];
  const { gameInfo, minerals } = currentGame;

  // Update URL when game changes
  const changeGame = (gameId) => {
    setCurrentGameId(gameId);
    const url = new URL(window.location);
    url.searchParams.set('game', gameId);
    window.history.pushState({}, '', url);
  };

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
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button 
            onClick={() => setShowUnEarthed(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent)',
              fontSize: '0.9rem',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              fontWeight: '500'
            }}
          >
            UnEarthed
          </button>
          <button 
            onClick={() => setShowResearch(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent)',
              fontSize: '0.9rem',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              fontWeight: '500'
            }}
          >
            Research
          </button>
          <button 
            onClick={() => setShowAbout(true)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--accent)',
              fontSize: '0.9rem',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              fontWeight: '500'
            }}
          >
            About
          </button>
        </div>
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
                  onClick={() => changeGame(game.id)}
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
      <div className="hero-section">
        {/* Title and Tagline Above Banner */}
        <div style={{
          textAlign: 'center',
          padding: '2rem 1rem 1rem',
          background: 'var(--bg-primary)'
        }}>
          <h1 className="game-logo" style={{ marginBottom: '0.5rem' }}>{gameInfo.name}</h1>
          <p className="game-subtitle" style={{ margin: 0 }}>{gameInfo.tagline}</p>
        </div>
        
        {/* Banner Image */}
        <div 
          className="hero"
          style={{
            backgroundImage: `url(/TGMS2026/images/${currentGameId}/banner.jpg)`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '300px'
          }}
        />
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

      {/* About Modal */}
      {showAbout && (
        <About onClose={() => setShowAbout(false)} />
      )}

      {/* UnEarthed Modal */}
      {showUnEarthed && (
        <UnEarthed onClose={() => setShowUnEarthed(false)} />
      )}

      {/* Research Modal */}
      {showResearch && (
        <Research onClose={() => setShowResearch(false)} />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
