import React from 'react';
import { ArrowRight } from 'lucide-react';

export const AtAGlance: React.FC = () => {
  const progressionSteps = [
    {
      stage: 'STARTED WITH',
      title: 'Brand & Presence',
      detail: 'Content consistency, social channels, and public profile presentation.'
    },
    {
      stage: 'THEN',
      title: 'Search & SEO',
      detail: 'Search Console query analysis, educational blogs, and website revamp.'
    },
    {
      stage: 'THEN',
      title: 'Systems & Data',
      detail: 'WhatsApp Hub, content workspace, and GA4 / Clarity tracking.'
    },
    {
      stage: 'NOW',
      title: 'AI & Automation',
      detail: 'Workflow automations, AI-assisted development, and rapid execution.'
    }
  ];

  return (
    <section id="glance" className="section" style={{ backgroundColor: '#ffffff', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="container">
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto 44px auto', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 12px auto' }}>
            THE STORY
          </div>
          <h2 className="section-title">
            From brand to infrastructure.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            How my role grew from public brand consistency into architecting web systems, tracking, and automation.
          </p>
        </div>

        {/* Single Visual Progression Flow */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '36px 32px'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              alignItems: 'start'
            }}
          >
            {progressionSteps.map((step, idx) => {
              const isLast = idx === progressionSteps.length - 1;
              return (
                <div
                  key={idx}
                  style={{ gridColumn: 'span 12' }}
                  className="progression-col"
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      justifyContent: 'space-between',
                      position: 'relative'
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 750,
                          color: isLast ? 'var(--brand-accent)' : 'var(--brand-primary)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          display: 'block',
                          marginBottom: '6px'
                        }}
                      >
                        {step.stage}
                      </span>
                      <h3
                        style={{
                          fontSize: '17px',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          marginBottom: '6px'
                        }}
                      >
                        {step.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '13.5px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5,
                          margin: 0
                        }}
                      >
                        {step.detail}
                      </p>
                    </div>

                    {!isLast && (
                      <div
                        className="progression-arrow"
                        style={{
                          display: 'none',
                          position: 'absolute',
                          right: '-16px',
                          top: '20px',
                          color: 'var(--border-medium)'
                        }}
                      >
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .progression-col {
            grid-column: span 3 !important;
          }
          .progression-arrow {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
