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

        {/* 3-Column Editorial Grid: YouTube, LinkedIn, Google Business (§§ 8–14) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {/* CARD 1: YouTube Restructuring & Discoverability (§§ 10–11) */}
          <div style={{ gridColumn: 'span 12' }} className="dist-grid-card">
            <div
              className="card"
              style={{
                padding: '28px',
                backgroundColor: '#ffffff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
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
                    <span style={{ fontSize: '11px', fontWeight: 750, color: 'var(--brand-primary)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                      YOUTUBE
                    </span>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.25 }}>
                      YouTube restructuring & discoverability
                    </h3>
                  </div>
                </div>

                {/* Description (Small & Concise) */}
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                  Reworked playlists, titles, descriptions, metadata and channel presentation to make the library more consistent and searchable.
                </p>

                {/* Primary Metrics (Visually Large & Clear § 11) */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 18px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}>
                    75.5K <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-secondary)' }}>views</span>
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: 650, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    1.9K watch hours · +1.2K subscribers
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 750, color: 'var(--brand-primary)' }}>
                    18.1% Search · 11.5% Playlists
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Source: YouTube Analytics · selected 365-day period
                </span>
                <a
                  href="https://www.youtube.com/@codjutech/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '11.5px', fontWeight: 700, color: '#dc2626', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                >
                  <span>Channel</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: LinkedIn Brand Presence & Content (§ 12) */}
          <div style={{ gridColumn: 'span 12' }} className="dist-grid-card">
            <div
              className="card"
              style={{
                padding: '28px',
                backgroundColor: '#ffffff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
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
                    <span style={{ fontSize: '11px', fontWeight: 750, color: 'var(--brand-primary)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                      LINKEDIN
                    </span>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.25 }}>
                      Brand presence & content
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                  Maintained consistent publishing, content planning and brand presentation across Codju's LinkedIn presence.
                </p>

                {/* Primary Metrics (§ 12: 1,597 followers primary, 76.8K impressions & 2,745 reactions secondary) */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 18px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}>
                    1,597 <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-secondary)' }}>followers</span>
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: 650, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    76.8K impressions · 2,745 reactions
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    Annual platform engagement snapshot
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Source: LinkedIn Analytics
                </span>
                <a
                  href="https://www.linkedin.com/company/codjutech/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '11.5px', fontWeight: 700, color: '#0a66c2', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                >
                  <span>Company Page</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3: Google Business Profile (§§ 13–14) */}
          <div style={{ gridColumn: 'span 12' }} className="dist-grid-card">
            <div
              className="card"
              style={{
                padding: '28px',
                backgroundColor: '#ffffff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)'
              }}
            >
              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
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
                    <span style={{ fontSize: '11px', fontWeight: 750, color: 'var(--brand-accent)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                      GOOGLE BUSINESS
                    </span>
                    <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--text-primary)', margin: 0, lineHeight: 1.25 }}>
                      Local & search presence
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                  Maintained and improved Codju's Google Business presence while monitoring how people discovered the company.
                </p>

                {/* Primary Metrics (§ 13: 42.0K views, 11.6K searches, 37 interactions) */}
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 18px',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '6px' }}>
                    42.0K <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-secondary)' }}>profile views</span>
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: 650, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                    11.6K searches · 37 interactions
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    April–September 2026 documented snapshot
                  </div>
                </div>
              </div>

              <div>
                {/* Search Discovery Insight (§ 14) */}
                <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: 650, lineHeight: 1.45, marginBottom: '10px' }}>
                  <span style={{ color: 'var(--brand-primary)' }}>Insight:</span> Discovery remained strongly brand-led. ‘Codju’ accounted for the majority of observed searches (~11K).
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                    Source: Google Business Profile · Apr–Sep 2026
                  </span>
                  <a
                    href="https://share.google/74j2gsdUwcflPEkmp"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '11.5px', fontWeight: 750, color: '#16a34a', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                  >
                    <span>Profile</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Consistency Horizontal Statement (§ 15) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '20px 24px',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--brand-primary)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
              ONE BRAND. ACROSS THE CHANNELS.
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Standardized naming, visuals, positioning and profile presentation across Codju's major digital touchpoints.
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
                  fontSize: '12px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  backgroundColor: 'var(--bg-subtle)',
                  padding: '5px 11px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  textDecoration: 'none',
                  transition: 'border-color 0.15s ease'
                }}
              >
                <Check size={11} color="var(--brand-accent)" />
                <span>{ch.name}</span>
                <ExternalLink size={10} color="var(--text-muted)" />
              </a>
            ))}
          </div>
        </div>

        {/* Subtle Transition after Distribution (§ 17) */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '12px',
            borderTop: '1px dashed var(--border-subtle)'
          }}
        >
          <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', fontWeight: 650, marginBottom: '8px' }}>
            “Once the channels were in place, the next question was what sat behind them.”
          </p>
          <div style={{ fontSize: '12.5px', fontWeight: 750, color: 'var(--brand-primary)', letterSpacing: '0.06em' }}>
            CONTENT → WEB → SYSTEMS → MEASUREMENT
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .dist-grid-card { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
};
