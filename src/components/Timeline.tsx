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
    title: 'Establishing the foundation',
    summary: 'Focused on digital presence, profile standardization, content direction, and initial channel consistency across platforms.',
    evidence: 'Channel setup records & profile standardization audit'
  },
  {
    number: '02',
    period: 'FEBRUARY – MARCH 2026',
    title: 'Content, search & distribution',
    summary: 'Expanded content operations, improved YouTube channel structure, and began using Search Console to guide broader educational search work.',
    evidence: 'Search Console query audits & YouTube Studio analytics'
  },
  {
    number: '03',
    period: 'APRIL – MAY 2026',
    title: 'Building the web layer',
    summary: 'Revamped the main website, restructured curriculum and book resources, integrated the CUDO chatbot, and created campaign experiences.',
    evidence: 'Production codju.com release & CUDO widget integration'
  },
  {
    number: '04',
    period: 'SUMMER 2026',
    title: 'Building systems & tools',
    summary: 'Built internal marketing tools, campaign landing pages (summercamp.codju.com), TeachBoost.in, and WhatsApp workflow infrastructure.',
    evidence: 'Live TeachBoost.in build & WhatsApp Cloud API hub worker'
  },
  {
    number: '05',
    period: 'SEPTEMBER 2026',
    title: 'Measurement & experimentation',
    summary: 'Added behavioral measurement through GA4 and Microsoft Clarity, and continued experimenting with workflow automation and AI-assisted builds.',
    evidence: 'Active Clarity dashboard (yi2ur6p2il) & GA4 property'
  }
];

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto 48px auto', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 12px auto' }}>
            CHRONOLOGICAL RECORD
          </div>
          <h2 className="section-title">
            How the work changed over nine months.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            An activity-driven timeline documenting the actual work executed month by month.
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
