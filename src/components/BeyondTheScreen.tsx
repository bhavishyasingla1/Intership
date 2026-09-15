import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PersonalPhotoPlaceholder, TeamPhotoPlaceholder } from './ProjectVisualPlaceholder';

export const BeyondTheScreen: React.FC = () => {
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

        {/* Bottom Tier: 3 Equal Photo Placeholders (Section 47 & 49) */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
            TEAM & WORKING MOMENTS
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px'
            }}
          >
            <TeamPhotoPlaceholder title="TEAM MOMENT" note="Photo to be added" aspectRatio="16/10" />
            <TeamPhotoPlaceholder title="EDUCATOR / WORKSHOP" note="Photo to be added" aspectRatio="16/10" />
            <TeamPhotoPlaceholder title="STRATEGY / PLANNING" note="Photo to be added" aspectRatio="16/10" />
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

      <style>{`
        @media (min-width: 960px) {
          .bts-photo-col { grid-column: span 4 !important; }
          .bts-text-col { grid-column: span 8 !important; }
        }
      `}</style>
    </section>
  );
};
