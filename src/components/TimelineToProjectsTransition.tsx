import React from 'react';

export const TimelineToProjectsTransition: React.FC = () => {
  const spineStages = [
    'Brand Presence',
    'Search Discovery',
    'Web Platforms',
    'Internal Systems',
    'Analytics Tracking',
    'AI Automation'
  ];

  return (
    <section
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        paddingTop: '64px',
        paddingBottom: '64px',
        textAlign: 'center'
      }}
    >
      <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: 750,
            color: 'var(--brand-primary)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}
        >
          THE TRANSITION
        </div>

        <h3
          style={{
            fontSize: 'clamp(22px, 2.6vw, 30px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            marginBottom: '8px'
          }}
        >
          From visibility to infrastructure.
        </h3>
        <p
          style={{
            fontSize: 'clamp(16px, 1.8vw, 19px)',
            color: 'var(--brand-primary)',
            fontWeight: 700,
            lineHeight: 1.4,
            margin: '0 auto 28px auto'
          }}
        >
          Building the platforms and automated systems behind the brand.
        </p>

        {/* Quiet Progression Spine */}
        <div
          className="transition-spine-container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'nowrap',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 700,
            overflowX: 'auto',
            paddingBottom: '4px',
            maxWidth: '100%'
          }}
        >
          {spineStages.map((stage, idx) => {
            const isLast = idx === spineStages.length - 1;
            return (
              <React.Fragment key={stage}>
                <span
                  style={{
                    color: isLast ? 'var(--brand-accent)' : 'var(--text-secondary)',
                    backgroundColor: isLast ? 'rgba(88, 204, 2, 0.1)' : 'var(--bg-subtle)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                >
                  {stage}
                </span>
                {!isLast && (
                  <span style={{ color: 'var(--text-muted)', userSelect: 'none', flexShrink: 0 }}>→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .transition-spine-container {
            justify-content: flex-start !important;
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
    </section>
  );
};
