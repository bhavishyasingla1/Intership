import React from 'react';

export const TimelineToProjectsTransition: React.FC = () => {
  const spineStages = [
    'Presence',
    'Discovery',
    'Web',
    'Systems',
    'Measurement',
    'Experimentation'
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
          The work started with visibility.
        </h3>
        <p
          style={{
            fontSize: 'clamp(17px, 2vw, 20px)',
            color: 'var(--brand-primary)',
            fontWeight: 700,
            lineHeight: 1.4,
            margin: '0 auto 28px auto'
          }}
        >
          Then I started building what sat underneath it.
        </p>

        {/* Quiet Progression Spine */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            fontSize: '13px',
            fontWeight: 700
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
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  {stage}
                </span>
                {!isLast && (
                  <span style={{ color: 'var(--text-muted)', userSelect: 'none' }}>→</span>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
