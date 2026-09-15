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
  return (
    <section id="distribution" className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header (Document 14 § 8) */}
        <div className="section-header" style={{ maxWidth: '720px' }}>
          <div className="section-eyebrow">
            DISTRIBUTION & DISCOVERABILITY
          </div>
          <h2 className="section-title">
            Making Codju easier to find.
          </h2>
          <p className="section-subtitle">
            Worked across the channels where educators, schools and prospects could encounter Codju.
          </p>
        </div>

        {/* 3-Column Editorial Grid: YouTube, LinkedIn, Google Business */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {/* CARD 1: YouTube */}
          <div style={{ gridColumn: 'span 12' }} className="dist-grid-card">
            <div
              className="card"
              style={{
                padding: '24px 26px',
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
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      color: '#dc2626',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <YoutubeIcon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      YOUTUBE
                    </span>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.25 }}>
                      YouTube restructuring
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px', minHeight: '38px' }}>
                  Reworked playlists, titles, descriptions, metadata and channel presentation to make the library searchable.
                </p>

                {/* Metrics Box */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}>
                    75.5K <span style={{ fontSize: '14px', fontWeight: 650, color: 'var(--text-secondary)' }}>views</span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 650, color: 'var(--text-secondary)', marginBottom: '10px' }}>
                    1.9K watch hours · +1.2K subscribers
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-primary)',
                      backgroundColor: 'rgba(239, 68, 68, 0.06)',
                      border: '1px solid rgba(239, 68, 68, 0.18)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '6px 10px',
                      lineHeight: 1.4
                    }}
                  >
                    <span style={{ fontWeight: 750, color: '#dc2626' }}>Insight:</span> 18.1% discovered via search; 11.5% via playlists.
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', marginTop: 'auto' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Source: YouTube Analytics
                </span>
                <a
                  href="https://www.youtube.com/@codjutech/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 750,
                    color: '#dc2626',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Channel</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: LinkedIn */}
          <div style={{ gridColumn: 'span 12' }} className="dist-grid-card">
            <div
              className="card"
              style={{
                padding: '24px 26px',
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
                      backgroundColor: 'rgba(10, 102, 194, 0.1)',
                      color: '#0a66c2',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#0a66c2', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      LINKEDIN
                    </span>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.25 }}>
                      Brand presence & content
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px', minHeight: '38px' }}>
                  Maintained consistent publishing, content planning and professional identity across Codju's company profile.
                </p>

                {/* Metrics Box */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}>
                    1,597 <span style={{ fontSize: '14px', fontWeight: 650, color: 'var(--text-secondary)' }}>followers</span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 650, color: 'var(--text-secondary)', marginBottom: '10px' }}>
                    76.8K impressions · 2,745 reactions
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-primary)',
                      backgroundColor: 'rgba(10, 102, 194, 0.06)',
                      border: '1px solid rgba(10, 102, 194, 0.18)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '6px 10px',
                      lineHeight: 1.4
                    }}
                  >
                    <span style={{ fontWeight: 750, color: '#0a66c2' }}>Insight:</span> High engagement on curriculum pedagogy & updates.
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', marginTop: 'auto' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Source: LinkedIn Analytics
                </span>
                <a
                  href="https://www.linkedin.com/company/codjutech/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 750,
                    color: '#0a66c2',
                    backgroundColor: 'rgba(10, 102, 194, 0.08)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Company Page</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3: Google Business */}
          <div style={{ gridColumn: 'span 12' }} className="dist-grid-card">
            <div
              className="card"
              style={{
                padding: '24px 26px',
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
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      color: '#16a34a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#16a34a', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      GOOGLE BUSINESS
                    </span>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.25 }}>
                      Local & search presence
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '16px', minHeight: '38px' }}>
                  Managed Codju's Google Business identity and tracked institutional search volume and interactions.
                </p>

                {/* Metrics Box */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}>
                    42.0K <span style={{ fontSize: '14px', fontWeight: 650, color: 'var(--text-secondary)' }}>profile views</span>
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 650, color: 'var(--text-secondary)', marginBottom: '10px' }}>
                    11.6K searches · 37 interactions
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'var(--text-primary)',
                      backgroundColor: 'rgba(34, 197, 94, 0.06)',
                      border: '1px solid rgba(34, 197, 94, 0.18)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '6px 10px',
                      lineHeight: 1.4
                    }}
                  >
                    <span style={{ fontWeight: 750, color: '#16a34a' }}>Insight:</span> Discovery remained brand-led (~11K 'Codju' searches).
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', marginTop: 'auto' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Source: Google Business Profile
                </span>
                <a
                  href="https://share.google/74j2gsdUwcflPEkmp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '11.5px',
                    fontWeight: 750,
                    color: '#16a34a',
                    backgroundColor: 'rgba(34, 197, 94, 0.08)',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Profile</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Consistency Horizontal Statement */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px 24px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 2px 6px -2px rgba(0,0,0,0.03)'
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--brand-accent)' }} />
              <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--brand-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ONE BRAND. ACROSS ALL CHANNELS.
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Standardized naming, typography, visual positioning, and profile presentation across Codju's digital touchpoints.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            {[
              { name: 'LinkedIn', url: 'https://www.linkedin.com/company/codjutech/posts/?feedView=all' },
              { name: 'YouTube', url: 'https://www.youtube.com/@codjutech/videos' },
              { name: 'Google Business', url: 'https://share.google/74j2gsdUwcflPEkmp' },
              { name: 'Instagram', url: 'https://www.instagram.com/codjutech/' },
              { name: 'X', url: 'https://x.com/Codjutech' },
              { name: 'Facebook', url: 'https://www.facebook.com/people/Codju/61590299614330/?sk=directory_activites' }
            ].map((ch) => (
              <a
                key={ch.name}
                href={ch.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  backgroundColor: '#f8fafc',
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                }}
              >
                <Check size={12} color="var(--brand-accent)" strokeWidth={2.5} />
                <span>{ch.name}</span>
                <ExternalLink size={10} color="var(--text-muted)" />
              </a>
            ))}
          </div>
        </div>

        {/* Editorial Narrative Bridge */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '24px 20px 8px 20px',
            borderTop: '1px dashed var(--border-subtle)'
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontWeight: 800,
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '8px'
            }}
          >
            NARRATIVE EVOLUTION
          </div>
          <p style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 700, lineHeight: 1.5, marginBottom: '10px' }}>
            “Once the channels were in place, the next question was what sat behind them.”
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '11.5px',
              fontWeight: 800,
              color: 'var(--brand-primary)',
              letterSpacing: '0.06em',
              backgroundColor: 'var(--brand-primary-subtle)',
              padding: '6px 14px',
              borderRadius: '20px'
            }}
          >
            <span>CONTENT</span>
            <span>→</span>
            <span>WEB</span>
            <span>→</span>
            <span>SYSTEMS</span>
            <span>→</span>
            <span>MEASUREMENT</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .dist-grid-card { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
};
