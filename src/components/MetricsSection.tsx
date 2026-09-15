import React from 'react';

interface MetricItem {
  value: string;
  label: string;
  context: string;
  date: string;
  source: string;
}

const verifiedMetrics: MetricItem[] = [
  {
    value: '1,597',
    label: 'LinkedIn followers',
    context: '76.8K impressions · 2,745 reactions',
    date: 'September 2026',
    source: 'LinkedIn Analytics'
  },
  {
    value: '75.5K',
    label: 'YouTube views',
    context: '1.9K watch hours · +1.2K subscribers · 18.1% Search · 11.5% Playlists',
    date: 'Selected analytics period',
    source: 'YouTube Studio Analytics'
  },
  {
    value: '42.0K',
    label: 'Google Business Profile views',
    context: '11,628 searches · 37 interactions',
    date: 'April–September 2026',
    source: 'Google Business Profile'
  },
  {
    value: '527',
    label: 'Newsletter subscribers',
    context: 'AI & Skill Learning in Schools newsletter',
    date: 'Documented subscriber count',
    source: 'LinkedIn Newsletter Analytics'
  }
];

export const MetricsSection: React.FC = () => {
  return (
    <section id="numbers" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '680px' }}>
          <div className="section-eyebrow">
            VERIFIED EVIDENCE
          </div>
          <h2 className="section-title">
            What the data shows.
          </h2>
          <p className="section-subtitle">
            Audited platform snapshots from verified channels for documented periods.
          </p>
        </div>

        {/* 4 Restrained Metric Cards Grid (Symmetrical 4 Columns) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {verifiedMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                padding: '28px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Small Accent Marker */}
                <div
                  style={{
                    width: '20px',
                    height: '3px',
                    backgroundColor: 'var(--brand-primary)',
                    borderRadius: '2px',
                    marginBottom: '16px'
                  }}
                />

                {/* Metric Number (Nunito) */}
                <div
                  style={{
                    fontSize: 'clamp(36px, 3.5vw, 46px)',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.03em',
                    marginBottom: '10px'
                  }}
                >
                  {metric.value}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: '15.5px',
                    fontWeight: 750,
                    color: 'var(--text-primary)',
                    marginBottom: '6px'
                  }}
                >
                  {metric.label}
                </div>

                {/* Context */}
                <div
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.45,
                    marginBottom: '12px'
                  }}
                >
                  {metric.context}
                </div>
              </div>

              {/* Date & Source Footnote */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '12px',
                  marginTop: '12px',
                  fontSize: '12px',
                  color: 'var(--text-muted)'
                }}
              >
                <div>{metric.date}</div>
                <div style={{ marginTop: '2px', fontWeight: 600 }}>SOURCE: {metric.source}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Required Precise Metric Footnote (§ 55) */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 20px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.55
          }}
        >
          <strong style={{ color: 'var(--text-primary)' }}>Documentation Note: </strong>
          Metrics are shown as platform-level observations for documented periods. They are not presented as individually attributable business outcomes unless explicitly stated.
        </div>
      </div>
    </section>
  );
};
