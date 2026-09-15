import React from 'react';
import { ExternalLink, X, ZoomIn } from 'lucide-react';
import { PersonalPhotoPlaceholder, TeamPhotoPlaceholder } from './ProjectVisualPlaceholder';

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
        <div className="section-header" style={{ maxWidth: '680px' }}>
          <div className="section-eyebrow">
            THE HUMAN EXPERIENCE
          </div>
          <h2 className="section-title">
            Beyond the screen.
          </h2>
          <p className="section-subtitle">
            Reflections from nine months of collaborating, taking initiative, and learning in an early-stage environment.
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
          {/* Left Column: Authentic Bhavishya Singla Portrait Placeholder */}
          <div style={{ gridColumn: 'span 12' }} className="bts-photo-col">
            <PersonalPhotoPlaceholder
              imageSrc="./pics/bhavishya-profile.png"
              label="BHAVISHYA SINGLA"
              sublabel="Growth & Systems Intern • Codju Technologies"
              aspectRatio="4/5"
              minHeight="320px"
            />
            <div style={{ marginTop: '14px', textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Bhavishya Singla
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Growth & Systems Intern • Codju Technologies
              </div>
            </div>
          </div>

          {/* Right Column: Exactly 3 Concise Grounded Reflections (Document 12 Section 50) */}
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
                  Learning how a startup actually operates
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Working in an early-stage company meant seeing how strategy, execution and iteration connect across everyday priorities.
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
                  Proactive initiative
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Many projects began with identifying a gap, proposing an approach and building a first version to solve operational friction.
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
                  Learning through people
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  Regular feedback from mentors and the Codju team helped me improve the work and think more clearly about unfamiliar problems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Exactly 2 Team Photos */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              TEAM & WORKING MOMENTS
            </div>
            <div style={{ fontSize: '11.5px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <ZoomIn size={12} /> Click photo to expand
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px'
            }}
          >
            <TeamPhotoPlaceholder
              title="CODJU TEAM GATHERING"
              note="Codju team dinner and milestone celebration"
              aspectRatio="16/11"
              imageSrc="./pics/team-moment-1.jpg"
              objectPosition="center 26%"
              onClick={() => setActivePhoto({
                src: './pics/team-moment-1.jpg',
                title: 'Codju Team Gathering',
                note: 'Codju team dinner and milestone celebration'
              })}
            />
            <TeamPhotoPlaceholder
              title="WORKING & BUILDING TOGETHER"
              note="Team collaboration, offsites, and daily momentum"
              aspectRatio="16/11"
              imageSrc="./pics/team-moment-2.jpg"
              objectPosition="center 42%"
              onClick={() => setActivePhoto({
                src: './pics/team-moment-2.jpg',
                title: 'Working & Building Together',
                note: 'Team collaboration, offsites, and daily momentum'
              })}
            />
          </div>
        </div>

        {/* Mentor Acknowledgement (Document 12 Section 44, 45, 97) */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 24px',
            fontSize: '13.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
              Built with guidance, feedback and collaboration from{' '}
              <a
                href="https://www.linkedin.com/in/nitishcodju/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--brand-primary)',
                  fontWeight: 750,
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(100, 22, 184, 0.3)'
                }}
              >
                Nitish (Co-founder)
              </a>{' '}
              and the Codju team throughout the internship.
            </div>
            <div>
              Grateful to everyone who reviewed the work, challenged my thinking and helped me improve it.
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/nitishcodju/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-secondary"
            style={{ gap: '6px' }}
          >
            <span>NITISH'S LINKEDIN</span>
            <ExternalLink size={12} />
          </a>
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

