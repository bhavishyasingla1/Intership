import React from 'react';

export const BeyondTheScreen: React.FC = () => {

  return (
    <section id="about" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto 44px auto', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 12px auto' }}>
            REFLECTIONS
          </div>
          <h2 className="section-title">
            Beyond the screen.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Key takeaways from collaborating, taking initiative, and shipping in an early-stage startup.
          </p>
        </div>

        {/* Top Tier: Symmetrical 2-Column Grid (Portrait Left span 4, 3 Concise Reflections Right span 8) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '36px',
            alignItems: 'start',
            marginBottom: '40px'
          }}
        >
          {/* Left Column: Authentic Bhavishya Singla Avatar */}
          <div style={{ gridColumn: 'span 12' }} className="bts-photo-col">
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                minHeight: '320px',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src="./pics/human-design.png"
                alt="Bhavishya Singla"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

          {/* Right Column: Exactly 3 Concise Grounded Reflections */}
          <div style={{ gridColumn: 'span 12' }} className="bts-text-col">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Reflection 1 */}
              <div
                className="card"
                style={{
                  padding: '20px 24px',
                  backgroundColor: '#ffffff'
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  PERSPECTIVE
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Startup Operations
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Seeing how strategy, execution, and fast iteration connect across daily priorities in an early-stage company.
                </p>
              </div>

              {/* Reflection 2 */}
              <div
                className="card"
                style={{
                  padding: '20px 24px',
                  backgroundColor: '#ffffff'
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  INITIATIVE
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Proactive Problem-Solving
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Spotting operational friction, proposing structured solutions, and building initial versions before being asked.
                </p>
              </div>

              {/* Reflection 3 */}
              <div
                className="card"
                style={{
                  padding: '20px 24px',
                  backgroundColor: '#ffffff'
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>
                  COLLABORATION
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Mentorship & Feedback
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Refining technical and design decisions through regular critique and collaboration with mentors and teammates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 960px) {
          .bts-photo-col { grid-column: span 4 !important; }
          .bts-text-col { grid-column: span 8 !important; }
        }
      `}</style>
    </section>
  );
};

