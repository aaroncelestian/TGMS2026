import React from 'react';

export function Education({ onClose }) {
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
          Mineralogy Education
        </h1>
        
        <p style={{ 
          color: 'var(--text-secondary)', 
          fontSize: '1.1rem',
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Learn about the science behind the minerals and crystals featured in this exhibition.
        </p>

        {/* Crystal Systems */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '1rem'
          }}>
            Crystal Systems
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            Minerals crystallize in seven different crystal systems based on their internal atomic arrangement:
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            {[
              { name: 'Cubic', example: 'Diamond, Pyrite' },
              { name: 'Tetragonal', example: 'Zircon' },
              { name: 'Hexagonal', example: 'Quartz, Beryl' },
              { name: 'Trigonal', example: 'Calcite, Corundum' },
              { name: 'Orthorhombic', example: 'Topaz, Olivine' },
              { name: 'Monoclinic', example: 'Gypsum, Orthoclase' },
              { name: 'Triclinic', example: 'Plagioclase' }
            ].map(system => (
              <div key={system.name} style={{
                padding: '1rem',
                background: 'var(--bg-secondary)',
                borderRadius: '8px',
                border: '1px solid var(--border)'
              }}>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  {system.name}
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  {system.example}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mohs Hardness Scale */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '1rem'
          }}>
            Mohs Hardness Scale
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            The Mohs scale measures a mineral's resistance to scratching, from 1 (softest) to 10 (hardest):
          </p>
          <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            padding: '1.5rem',
            border: '1px solid var(--border)'
          }}>
            {[
              { level: '1', mineral: 'Talc', note: 'Easily scratched by fingernail' },
              { level: '2', mineral: 'Gypsum', note: 'Can be scratched by fingernail' },
              { level: '3', mineral: 'Calcite', note: 'Scratched by copper coin' },
              { level: '4', mineral: 'Fluorite', note: 'Easily scratched by knife' },
              { level: '5', mineral: 'Apatite', note: 'Scratched by knife with difficulty' },
              { level: '6', mineral: 'Orthoclase', note: 'Scratches glass' },
              { level: '7', mineral: 'Quartz', note: 'Scratches glass easily' },
              { level: '8', mineral: 'Topaz', note: 'Scratches quartz' },
              { level: '9', mineral: 'Corundum', note: 'Sapphire and ruby' },
              { level: '10', mineral: 'Diamond', note: 'Hardest natural material' }
            ].map(item => (
              <div key={item.level} style={{
                display: 'flex',
                padding: '0.75rem 0',
                borderBottom: item.level !== '10' ? '1px solid var(--border)' : 'none',
                gap: '1rem',
                alignItems: 'center'
              }}>
                <span style={{ 
                  color: 'var(--accent)', 
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  minWidth: '30px'
                }}>
                  {item.level}
                </span>
                <span style={{ 
                  color: 'var(--text-primary)', 
                  fontWeight: '600',
                  minWidth: '100px'
                }}>
                  {item.mineral}
                </span>
                <span style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.9rem',
                  flex: 1
                }}>
                  {item.note}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Mineral Types */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '1rem'
          }}>
            Mineral vs. Gem vs. Rock
          </h2>
          <div style={{
            display: 'grid',
            gap: '1rem'
          }}>
            <div style={{
              padding: '1.5rem',
              background: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                Mineral
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                A naturally occurring inorganic solid with a definite chemical composition and ordered atomic structure. Examples: quartz, feldspar, calcite.
              </p>
            </div>
            <div style={{
              padding: '1.5rem',
              background: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                Gem (Gemstone)
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                A mineral (or sometimes organic material) that has been cut and polished for use in jewelry or decoration. Valued for beauty, rarity, and durability. Examples: diamond, emerald, ruby.
              </p>
            </div>
            <div style={{
              padding: '1.5rem',
              background: 'var(--bg-secondary)',
              borderRadius: '8px',
              border: '1px solid var(--border)'
            }}>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>
                Rock
              </h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                An aggregate of one or more minerals. Rocks don't have a specific chemical composition. Examples: granite (contains quartz, feldspar, mica), limestone (mostly calcite).
              </p>
            </div>
          </div>
        </section>

        {/* Chemical Formulas */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '1rem'
          }}>
            Reading Chemical Formulas
          </h2>
          <p style={{ 
            color: 'var(--text-secondary)', 
            lineHeight: '1.7',
            marginBottom: '1rem'
          }}>
            Mineral formulas show the elements and their proportions in a mineral's structure:
          </p>
          <div style={{
            background: 'var(--bg-secondary)',
            borderRadius: '8px',
            padding: '1.5rem',
            border: '1px solid var(--border)'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                SiO₂ (Quartz)
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Silicon (Si) + Oxygen (O). The subscript 2 means two oxygen atoms for every silicon atom.
              </p>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                CaCO₃ (Calcite)
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Calcium (Ca) + Carbon (C) + Oxygen (O₃). This is calcium carbonate.
              </p>
            </div>
            <div>
              <p style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '0.5rem' }}>
                Al₂O₃ (Corundum)
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Aluminum (Al₂) + Oxygen (O₃). Ruby and sapphire are gem varieties of corundum.
              </p>
            </div>
          </div>
        </section>

        {/* Fun Facts */}
        <section>
          <h2 style={{ 
            color: 'var(--accent)', 
            fontSize: '1.3rem',
            marginBottom: '1rem'
          }}>
            Did You Know?
          </h2>
          <div style={{
            display: 'grid',
            gap: '1rem'
          }}>
            {[
              'There are over 5,800 known mineral species on Earth, with about 50-100 new ones discovered each year.',
              'Diamonds are not actually rare—they\'re just controlled by the market. Rubies and emeralds are actually rarer.',
              'Quartz makes up about 12% of Earth\'s land surface and is found in almost every geological environment.',
              'The word "crystal" comes from the Greek word "krystallos" meaning ice—ancient Greeks thought quartz was permanently frozen water.',
              'Some minerals can glow under UV light (fluorescence) or continue glowing after the light is turned off (phosphorescence).'
            ].map((fact, index) => (
              <div key={index} style={{
                padding: '1rem',
                background: 'var(--bg-secondary)',
                borderRadius: '8px',
                border: '1px solid var(--border)',
                borderLeft: '4px solid var(--accent)'
              }}>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  {fact}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
