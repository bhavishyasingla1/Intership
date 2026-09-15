import React from 'react';
import { ZoomIn, X } from 'lucide-react';

export const BeyondTheScreen: React.FC = () => {
  const [activePhoto, setActivePhoto] = React.useState<{
    src: string;
    title: string;
    note?: string;
  } | null>(null);

  // Close modal on Escape
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActivePhoto(null);
      }
    };
    if (activePhoto) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePhoto]);

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

        {/* Bottom Tier: Exactly 2 Team Photos */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              TEAM & MOMENTS
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ZoomIn size={12} /> Click photo to expand
            </div>
          </div>

          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            <div
              onClick={() => setActivePhoto({
                src: './pics/team-moment-1.jpg',
                title: 'Codju Team Gathering'
              })}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/11',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 2px 10px -2px rgba(0, 0, 0, 0.06)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px -2px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px -2px rgba(0,0,0,0.06)';
              }}
            >
              <img
                src="./pics/team-moment-1.jpg"
                alt="Codju Team Gathering"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 26%',
                  display: 'block'
                }}
              />
            </div>
            <div
              onClick={() => setActivePhoto({
                src: './pics/team-moment-2.jpg',
                title: 'Working & Building Together'
              })}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/11',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: '0 2px 10px -2px rgba(0, 0, 0, 0.06)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px -2px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px -2px rgba(0,0,0,0.06)';
              }}
            >
              <img
                src="./pics/team-moment-2.jpg"
                alt="Working & Building Together"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 42%',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Uncropped Photo View */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.88)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '24px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '960px',
              width: '100%',
              backgroundColor: '#0f172a',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.12)'
            }}
          >
            <button
              onClick={() => setActivePhoto(null)}
              aria-label="Close photo preview"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                transition: 'background-color 0.2s ease'
              }}
            >
              <X size={18} />
            </button>

            <img
              src={activePhoto.src}
              alt={activePhoto.title}
              style={{
                width: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                display: 'block',
                backgroundColor: '#020617'
              }}
            />

            <div
              style={{
                padding: '16px 22px',
                backgroundColor: '#0f172a',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <div>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff' }}>
                  {activePhoto.title}
                </div>
                {activePhoto.note && (
                  <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
                    {activePhoto.note}
                  </div>
                )}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                Press <kbd style={{ padding: '2px 6px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '4px', color: '#cbd5e1' }}>Esc</kbd> to close
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .bts-photo-col { grid-column: span 4 !important; }
          .bts-text-col { grid-column: span 8 !important; }
        }
        .team-photo-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px -6px rgba(0, 0, 0, 0.16) !important;
        }
        .team-photo-card:hover img {
          transform: scale(1.03);
        }
      `}</style>
    </section>
  );
};

