import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { gameList } from '../data/index';

export function QRCodeGenerator() {
  const baseUrl = 'https://aaroncelestian.github.io/TGMS2026/';

  return (
    <div style={{
      padding: '2rem',
      background: 'white',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        color: '#000', 
        marginBottom: '2rem',
        textAlign: 'center' 
      }}>
        QR Codes for TGMS 2026 Exhibition
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {gameList.map((game) => {
          const gameUrl = `${baseUrl}?game=${game.id}`;
          
          return (
            <div key={game.id} style={{
              border: '2px solid #000',
              borderRadius: '12px',
              padding: '1.5rem',
              textAlign: 'center',
              background: '#fff',
              pageBreakInside: 'avoid'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {game.icon}
              </div>
              <h2 style={{ 
                color: '#000', 
                fontSize: '1.25rem',
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                {game.name}
              </h2>
              <p style={{ 
                color: '#666', 
                fontSize: '0.875rem',
                marginBottom: '1rem'
              }}>
                {game.specimens} specimens
              </p>
              
              <div style={{
                background: '#fff',
                padding: '1rem',
                borderRadius: '8px',
                display: 'inline-block'
              }}>
                <QRCodeSVG 
                  value={gameUrl}
                  size={200}
                  level="H"
                  includeMargin={true}
                />
              </div>
              
              <p style={{
                color: '#999',
                fontSize: '0.75rem',
                marginTop: '1rem',
                wordBreak: 'break-all'
              }}>
                {gameUrl}
              </p>
              
              <p style={{
                color: '#000',
                fontSize: '0.875rem',
                marginTop: '1rem',
                fontWeight: '600'
              }}>
                Scan to explore {game.name}
              </p>
            </div>
          );
        })}
      </div>
      
      <div style={{
        marginTop: '3rem',
        padding: '1.5rem',
        background: '#f0f0f0',
        borderRadius: '8px',
        maxWidth: '800px',
        margin: '3rem auto 0'
      }}>
        <h3 style={{ color: '#000', marginBottom: '1rem' }}>Instructions:</h3>
        <ol style={{ color: '#333', lineHeight: '1.8' }}>
          <li>Print this page (Cmd/Ctrl + P)</li>
          <li>Cut out each QR code card</li>
          <li>Place them next to the corresponding game display</li>
          <li>Visitors can scan the QR code to view that specific game's minerals on their phone</li>
        </ol>
      </div>
      
      <style>{`
        @media print {
          body {
            background: white;
          }
          @page {
            margin: 1cm;
          }
        }
      `}</style>
    </div>
  );
}
