import React from 'react';

interface TimelineActivity {
  number: string;
  period: string;
  title: string;
  summary: string;
  evidence: string;
}

const activities: TimelineActivity[] = [
  {
    number: '01',
    period: 'JANUARY 2026',
    title: 'Foundation & Brand Presence',
    summary: 'Standardized digital profiles, established brand consistency, and aligned content strategy.',
    evidence: 'Channel setup records & profile audit'
  },
  {
    number: '02',
    period: 'FEBRUARY – MARCH 2026',
    title: 'Search & Content Growth',
    summary: 'Expanded educational content, structured YouTube channels, and analyzed Search Console queries.',
    evidence: 'Search Console audits & YouTube analytics'
  },
  {
    number: '03',
    period: 'APRIL – MAY 2026',
    title: 'Web Platforms & UX',
    summary: 'Revamped the primary Codju website, organized curriculum resources, and integrated the CUDO chatbot.',
    evidence: 'Production codju.com release & CUDO widget'
  },
  {
    number: '04',
    period: 'SUMMER 2026',
    title: 'Systems & Operations',
    summary: 'Built internal marketing tools, TeachBoost.in, camp funnels, and automated WhatsApp workflows.',
    evidence: 'Live TeachBoost.in & WhatsApp Worker hub'
  },
  {
    number: '05',
    period: 'SEPTEMBER 2026',
    title: 'Analytics & AI Workflows',
    summary: 'Implemented GA4 and Microsoft Clarity tracking, with AI-assisted workflow automation.',
    evidence: 'Active Clarity dashboard & GA4 property'
  }
];

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto 48px auto', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 12px auto' }}>
            TIMELINE
          </div>
          <h2 className="section-title">
            Nine months of progress.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Key milestones and shipped initiatives from January to September 2026.
          </p>
        </div>

        {/* Perfectly Symmetrical Centered Timeline Spine (Desktop) */}
        <div
          className="timeline-container"
          style={{
            position: 'relative',
            maxWidth: '960px',
            margin: '0 auto'
          }}
        >
          {/* Center Vertical Track Spine */}
          <div
            className="timeline-spine"
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '24px',
              left: '50%',
              width: '2px',
              backgroundColor: 'var(--border-medium)',
              transform: 'translateX(-50%)'
            }}
          />

          {activities.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const isLast = idx === activities.length - 1;

            return (
              <div
                key={idx}
                className={`timeline-row ${isEven ? 'timeline-row-right' : 'timeline-row-left'}`}
                style={{
                  position: 'relative',
                  marginBottom: isLast ? 0 : '36px',
                  display: 'flex',
                  justifyContent: isEven ? 'flex-end' : 'flex-start',
                  width: '100%'
                }}
              >
                {/* Central Axis Marker Dot */}
                <div
                  className="timeline-marker"
                  style={{
                    position: 'absolute',
                    top: '22px',
                    left: '50%',
                    transform: 'translate(-50%, 0)',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: isLast ? 'var(--brand-accent)' : 'var(--brand-primary)',
                    border: '3px solid #ffffff',
                    boxShadow: '0 0 0 2px var(--border-medium)',
                    zIndex: 3
                  }}
                />

                {/* Milestone Card */}
                <div
                  className="card timeline-card"
                  style={{
                    width: 'calc(50% - 36px)',
                    padding: '24px 28px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'border-color 0.2s ease, transform 0.2s ease'
                  }}
                >
                  {/* Period Badge & Number */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 750,
                        color: 'var(--brand-primary)',
                        backgroundColor: 'var(--brand-primary-subtle)',
                        padding: '4px 10px',
                        borderRadius: 'var(--radius-sm)',
                        letterSpacing: '0.07em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {item.period}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--text-muted)' }}>
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.55,
                      marginBottom: '14px'
                    }}
                  >
                    {item.summary}
                  </p>

                  {/* Evidence Source */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '10px',
                      fontSize: '11.5px',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'baseline',
                      gap: '6px'
                    }}
                  >
                    <strong style={{ color: 'var(--text-primary)', fontWeight: 650 }}>Evidence:</strong>
                    <span>{item.evidence}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .timeline-spine {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-marker {
            left: 20px !important;
            transform: none !important;
          }
          .timeline-row {
            justify-content: flex-start !important;
            padding-left: 44px !important;
          }
          .timeline-card {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
