import React from 'react';
import { Users, MapPin, Mail, ShieldCheck } from 'lucide-react';

const YoutubeIcon: React.FC<{ size?: number }> = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

interface MetricItem {
  value: string;
  unit: string;
  channel: string;
  title: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  borderColor: string;
  primaryStat: string;
  secondaryStat: string;
  period: string;
  source: string;
}

const verifiedMetrics: MetricItem[] = [
  {
    value: '1,597',
    unit: 'followers',
    channel: 'LINKEDIN AUDIENCE',
    title: 'Brand Presence',
    icon: Users,
    iconColor: '#0a66c2',
    iconBg: 'rgba(10, 102, 194, 0.08)',
    borderColor: 'rgba(10, 102, 194, 0.2)',
    primaryStat: '76.8K Impressions',
    secondaryStat: '2,745 Member Reactions',
    period: 'Annual platform snapshot',
    source: 'LinkedIn Analytics'
  },
  {
    value: '75.5K',
    unit: 'views',
    channel: 'YOUTUBE LIBRARY',
    title: 'Search & Watch Time',
    icon: YoutubeIcon,
    iconColor: '#dc2626',
    iconBg: 'rgba(239, 68, 68, 0.08)',
    borderColor: 'rgba(239, 68, 68, 0.2)',
    primaryStat: '1.9K Watch Hours · +1.2K Subs',
    secondaryStat: '18.1% Search · 11.5% Playlists',
    period: 'Documented 365-day period',
    source: 'YouTube Studio'
  },
  {
    value: '42.0K',
    unit: 'profile views',
    channel: 'GOOGLE BUSINESS',
    title: 'Local & Discovery',
    icon: MapPin,
    iconColor: '#16a34a',
    iconBg: 'rgba(34, 197, 94, 0.08)',
    borderColor: 'rgba(34, 197, 94, 0.2)',
    primaryStat: '11,628 Search Impressions',
    secondaryStat: '37 Direct Lead Actions',
    period: 'Apr–Sep 2026 snapshot',
    source: 'Google Business'
  },
  {
    value: '527',
    unit: 'subscribers',
    channel: 'NEWSLETTER',
    title: 'Pedagogy Readers',
    icon: Mail,
    iconColor: 'var(--brand-primary)',
    iconBg: 'rgba(124, 58, 237, 0.08)',
    borderColor: 'rgba(124, 58, 237, 0.2)',
    primaryStat: 'AI & Skill Learning in Schools',
    secondaryStat: 'Curated Educator Audience',
    period: 'Verified subscriber count',
    source: 'LinkedIn Newsletter'
  }
];

export const MetricsSection: React.FC = () => {
  return (
    <section id="numbers" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto 44px auto', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 12px auto' }}>
            KEY METRICS
          </div>
          <h2 className="section-title">
            Audited data & results.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Audited performance snapshots from verified platforms across documented periods.
          </p>
        </div>

        {/* 4 Restrained Metric Cards Grid (Symmetrical 4 Columns) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px',
            marginBottom: '32px'
          }}
        >
          {verifiedMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="metric-card-col"
                style={{
                  gridColumn: 'span 12',
                  display: 'flex'
                }}
              >
                <div
                  className="card"
                  style={{
                    padding: '24px 22px',
                    backgroundColor: '#ffffff',
                    border: `1px solid ${metric.borderColor}`,
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    boxShadow: '0 2px 8px -2px rgba(0,0,0,0.04)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <div>
                    {/* Channel Header Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '8px',
                            backgroundColor: metric.iconBg,
                            color: metric.iconColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Icon size={16} strokeWidth={2.2} />
                        </div>
                        <span
                          style={{
                            fontSize: '10.5px',
                            fontWeight: 800,
                            color: metric.iconColor,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase'
                          }}
                        >
                          {metric.channel}
                        </span>
                      </div>
                    </div>

                    {/* Metric Number & Label */}
                    <div style={{ marginBottom: '14px' }}>
                      <div
                        style={{
                          fontSize: 'clamp(34px, 3.2vw, 44px)',
                          fontWeight: 800,
                          lineHeight: 1,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.03em',
                          marginBottom: '6px'
                        }}
                      >
                        {metric.value}
                      </div>
                      <div
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 750,
                          color: 'var(--text-secondary)',
                          textTransform: 'capitalize'
                        }}
                      >
                        {metric.unit}
                      </div>
                    </div>

                    {/* Structured Stat Pill Box */}
                    <div
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid #f1f5f9',
                        borderRadius: 'var(--radius-sm)',
                        padding: '10px 12px',
                        marginBottom: '16px'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '12.5px',
                          fontWeight: 750,
                          color: 'var(--text-primary)',
                          lineHeight: 1.4,
                          marginBottom: '4px'
                        }}
                      >
                        {metric.primaryStat}
                      </div>
                      <div
                        style={{
                          fontSize: '11.5px',
                          color: 'var(--text-secondary)',
                          fontWeight: 600,
                          lineHeight: 1.35
                        }}
                      >
                        {metric.secondaryStat}
                      </div>
                    </div>
                  </div>

                  {/* Date & Source Footnote */}
                  <div
                    style={{
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '12px',
                      marginTop: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '3px'
                    }}
                  >
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 550 }}>
                      {metric.period}
                    </div>
                    <div
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 750,
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <span>{metric.source}</span>
                      <span
                        style={{
                          fontSize: '10px',
                          fontWeight: 800,
                          color: metric.iconColor,
                          backgroundColor: metric.iconBg,
                          padding: '2px 6px',
                          borderRadius: '4px',
                          textTransform: 'uppercase'
                        }}
                      >
                        Verified
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit Documentation Note */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            backgroundColor: '#f8fafc',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: 1.5,
            textAlign: 'center'
          }}
        >
          <ShieldCheck size={18} color="var(--brand-accent)" style={{ flexShrink: 0 }} />
          <div>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 750 }}>Audit Note: </strong>
            Metrics reflect verified platform analytics for documented periods, representing recorded channel data.
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 600px) {
          .metric-card-col { grid-column: span 6 !important; }
        }
        @media (min-width: 1024px) {
          .metric-card-col { grid-column: span 3 !important; }
        }
      `}</style>
    </section>
  );
};
