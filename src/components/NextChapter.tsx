import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const NextChapter: React.FC = () => {
  const directions = [
    {
      title: 'Growth & Distribution',
      description: 'Building discoverability pipelines through structured search content, video restructuring, and consistent brand presence.'
    },
    {
      title: 'Marketing Technology & Systems',
      description: 'Engineering internal tools, API integrations, and operational workspaces that streamline team execution.'
    },
    {
      title: 'Web & Conversion',
      description: 'Architecting responsive web portals, curriculum pages, and focused campaign landing experiences.'
    },
    {
      title: 'AI-Enabled Workflows',
      description: 'Applying AI as a practical execution multiplier for rapid scaffolding, content systems, and automation.'
    }
  ];

  return (
    <section id="next-chapter" className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            boxShadow: 'var(--shadow-sm)'
          }}
        >
          <div className="section-eyebrow" style={{ marginBottom: '12px' }}>
            WHERE THIS EXPERIENCE POINTS NEXT
          </div>

          <h2
            style={{
              fontSize: 'clamp(24px, 2.8vw, 32px)',
              fontWeight: 800,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
              marginBottom: '14px'
            }}
          >
            Where this experience points next.
          </h2>

          <div
            style={{
              fontSize: '18px',
              fontWeight: 750,
              color: 'var(--brand-primary)',
              lineHeight: 1.45,
              marginBottom: '14px'
            }}
          >
            “I came in through marketing. I found myself increasingly interested in the systems behind it.”
          </div>

          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '32px'
            }}
          >
            Nine months at Codju made me most interested in problems where marketing, technology, data and AI meet. Websites, data, workflows, automation and AI became part of the work I wanted to understand and build.
          </p>

          {/* Symmetrical 4-Card 2x2 Grid (Document 12 Section 53 & 56) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '16px',
              marginBottom: '36px'
            }}
          >
            {directions.map((dir, idx) => (
              <div
                key={idx}
                style={{
                  gridColumn: 'span 12',
                  padding: '20px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                className="next-chapter-col"
              >
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {dir.title}
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {dir.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Founder Contact & Career Positioning Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '24px'
            }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)' }}>
                Bhavishya Singla
              </div>
              <div style={{ fontSize: '13px', fontWeight: 650, color: 'var(--brand-primary)' }}>
                Growth × Web × Analytics × AI
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/bhavishya-singla/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary"
                style={{ gap: '4px' }}
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="https://github.com/BhavishyaSingla2005"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary"
                style={{ gap: '4px' }}
              >
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>
              <a
                href="mailto:bhavishyasingla2005@gmail.com"
                className="btn btn-sm btn-primary"
              >
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .next-chapter-col { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
};
