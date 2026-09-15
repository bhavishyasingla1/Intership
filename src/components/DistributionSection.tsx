import React from 'react';
import { MapPin, Check, ExternalLink } from 'lucide-react';

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const DistributionSection: React.FC = () => {
  const channelCards = [
    {
      id: 'linkedin',
      tag: 'LINKEDIN',
      title: 'LinkedIn Presence & Growth',
      icon: LinkedinIcon,
      iconColor: '#0a66c2',
      iconBg: 'rgba(10, 102, 194, 0.1)',
      borderAccent: 'rgba(10, 102, 194, 0.18)',
      summary: "Maintained consistent publishing schedules, content planning, and distribution across Codju's company page, alongside managing Nitish's LinkedIn profile.",
      metricValue: '1,597',
      metricUnit: 'followers',
      subMetric: '76.8K impressions · 2,745 reactions',
      insight: "High engagement on curriculum pedagogy & updates; actively managed Nitish's LinkedIn profile.",
      source: 'LinkedIn Analytics',
      buttonLabel: 'Company Page',
      url: 'https://www.linkedin.com/company/codjutech/posts/?feedView=all',
      secondaryButtonLabel: "Nitish's Profile",
      secondaryUrl: 'https://www.linkedin.com/in/nitishcodju/?skipRedirect=true'
    },
    {
      id: 'youtube',
      tag: 'YOUTUBE',
      title: 'YouTube SEO & Channels',
      icon: YoutubeIcon,
      iconColor: '#dc2626',
      iconBg: 'rgba(239, 68, 68, 0.1)',
      borderAccent: 'rgba(239, 68, 68, 0.18)',
      summary: 'Reworked playlists, titles, descriptions, metadata and channel presentation to make the technical curriculum searchable.',
      metricValue: '75.5K',
      metricUnit: 'views',
      subMetric: '1.9K watch hours · +1.2K subscribers',
      insight: '18.1% discovered via search; 11.5% via playlists.',
      source: 'YouTube Analytics',
      buttonLabel: 'Video Channel',
      url: 'https://www.youtube.com/@codjutech/videos'
    },
    {
      id: 'google',
      tag: 'GOOGLE BUSINESS',
      title: 'Local Google Presence',
      icon: MapPin,
      iconColor: '#16a34a',
      iconBg: 'rgba(34, 197, 94, 0.1)',
      borderAccent: 'rgba(34, 197, 94, 0.18)',
      summary: "Managed Codju's Google Business identity and tracked institutional search volume, discovery queries, and lead interactions.",
      metricValue: '42.0K',
      metricUnit: 'profile views',
      subMetric: '11.6K searches · 37 lead interactions',
      insight: "Discovery remained brand-led (~11K 'Codju' searches).",
      source: 'Google Business Profile',
      buttonLabel: 'Google Profile',
      url: 'https://share.google/74j2gsdUwcflPEkmp'
    }
  ];

  const officialChannels = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/codjutech/posts/?feedView=all' },
    { name: 'YouTube', url: 'https://www.youtube.com/@codjutech/videos' },
    { name: 'Google Business', url: 'https://share.google/74j2gsdUwcflPEkmp' },
    { name: 'Instagram', url: 'https://www.instagram.com/codjutech/' },
    { name: 'X / Twitter', url: 'https://x.com/Codjutech' },
    { name: 'Facebook', url: 'https://www.facebook.com/people/Codju/61590299614330/?sk=directory_activites' }
  ];

  return (
    <section
      id="distribution"
      className="section"
      style={{
        backgroundColor: '#f8fafc',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '64px',
        paddingBottom: '64px'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto 40px auto', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 12px auto' }}>
            DISTRIBUTION
          </div>
          <h2 className="section-title">
            Discoverability & reach.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Search optimization, educational content, and multi-channel audience growth.
          </p>
        </div>

        {/* 3 Symmetrical Channel Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px',
            marginBottom: '24px'
          }}
        >
          {channelCards.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.id} style={{ gridColumn: 'span 12' }} className="dist-card-col">
                <div
                  className="card"
                  style={{
                    padding: '24px',
                    backgroundColor: '#ffffff',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 2px 8px -2px rgba(0,0,0,0.04)'
                  }}
                >
                  <div>
                    {/* Header Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: card.iconBg,
                          color: card.iconColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={19} />
                      </div>
                      <div>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            color: card.iconColor,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase'
                          }}
                        >
                          {card.tag}
                        </span>
                        <h3
                          style={{
                            fontSize: '18px',
                            fontWeight: 800,
                            color: 'var(--text-primary)',
                            margin: 0,
                            lineHeight: 1.25
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    {/* Uniform Summary Paragraph */}
                    <p
                      style={{
                        fontSize: '13px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        marginBottom: '16px',
                        minHeight: '40px'
                      }}
                    >
                      {card.summary}
                    </p>

                    {/* Symmetrical Metric Box */}
                    <div
                      style={{
                        backgroundColor: '#f8fafc',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '16px',
                        marginBottom: '16px'
                      }}
                    >
                      <div
                        style={{
                          fontSize: '28px',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          letterSpacing: '-0.02em',
                          lineHeight: 1,
                          marginBottom: '6px'
                        }}
                      >
                        {card.metricValue}{' '}
                        <span style={{ fontSize: '14px', fontWeight: 650, color: 'var(--text-secondary)' }}>
                          {card.metricUnit}
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: '12.5px',
                          fontWeight: 650,
                          color: 'var(--text-secondary)',
                          marginBottom: '10px',
                          minHeight: '18px'
                        }}
                      >
                        {card.subMetric}
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: 'var(--text-primary)',
                          backgroundColor: card.iconBg,
                          border: `1px solid ${card.borderAccent}`,
                          borderRadius: 'var(--radius-sm)',
                          padding: '7px 10px',
                          lineHeight: 1.4,
                          minHeight: '44px',
                          display: 'flex',
                          alignItems: 'center'
                        }}
                      >
                        <span>
                          <strong style={{ fontWeight: 750, color: card.iconColor }}>Insight: </strong>
                          {card.insight}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Symmetrical Card Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '14px',
                      marginTop: 'auto'
                    }}
                  >
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Source: {card.source}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 750,
                          color: card.iconColor,
                          backgroundColor: card.iconBg,
                          padding: '5px 12px',
                          borderRadius: 'var(--radius-sm)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          transition: 'opacity 0.15s ease'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                      >
                        <span>{card.buttonLabel}</span>
                        <ExternalLink size={11} />
                      </a>
                      {card.secondaryUrl && card.secondaryButtonLabel && (
                        <a
                          href={card.secondaryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 700,
                            color: 'var(--text-secondary)',
                            backgroundColor: '#ffffff',
                            border: '1px solid var(--border-subtle)',
                            padding: '5px 10px',
                            borderRadius: 'var(--radius-sm)',
                            textDecoration: 'none',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            transition: 'all 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'var(--brand-primary)';
                            e.currentTarget.style.color = 'var(--brand-primary)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'var(--border-subtle)';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                          }}
                        >
                          <span>{card.secondaryButtonLabel}</span>
                          <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Symmetrical Brand Consistency Container */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px 24px',
            marginBottom: '24px',
            boxShadow: '0 2px 6px -2px rgba(0,0,0,0.03)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '16px',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '14px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-accent)' }} />
                <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--brand-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  BRAND CONSISTENCY
                </div>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                Unified presence across official channels
              </h3>
            </div>
            <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', margin: 0, maxWidth: '440px', lineHeight: 1.45 }}>
              Standardized typography, visual tone, and verified profiles across all public platforms.
            </p>
          </div>

          {/* Symmetrical 6-Column Channels Grid */}
          <div className="channels-symmetric-grid">
            {officialChannels.map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-grid-item"
                style={{
                  fontSize: '12px',
                  fontWeight: 750,
                  color: 'var(--text-primary)',
                  backgroundColor: '#f8fafc',
                  padding: '9px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 2px 8px -2px rgba(100, 22, 184, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={13} color="var(--brand-accent)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
                  <span>{ch.name}</span>
                </div>
                <ExternalLink size={11} color="var(--text-muted)" style={{ flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>

        {/* Symmetrical Narrative Evolution Banner */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '18px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            boxShadow: '0 2px 6px -2px rgba(0,0,0,0.03)'
          }}
        >
          <div>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: 'var(--brand-primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '3px'
              }}
            >
              NARRATIVE EVOLUTION
            </div>
            <div style={{ fontSize: '14px', fontWeight: 750, color: 'var(--text-primary)', lineHeight: 1.4 }}>
              “Once the channels were in place, the next question was what sat behind them.”
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}
          >
            {['CONTENT', 'WEB INFRASTRUCTURE', 'INTERNAL SYSTEMS', 'MEASUREMENT'].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <span
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    backgroundColor: 'var(--brand-primary-subtle)',
                    color: 'var(--brand-primary)',
                    border: '1px solid rgba(100, 22, 184, 0.16)'
                  }}
                >
                  {step}
                </span>
                {idx < arr.length - 1 && (
                  <span style={{ fontSize: '11.5px', color: 'var(--text-muted)', fontWeight: 700 }}>
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .dist-card-col { grid-column: span 4 !important; }
        }
        .channels-symmetric-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        @media (min-width: 640px) {
          .channels-symmetric-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .channels-symmetric-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
