import React from 'react';
import { PackageCheck, BarChart2, Sparkles, CheckCircle2 } from 'lucide-react';

export const WhatChangedSection: React.FC = () => {
  const pillars = [
    {
      category: 'SHIPPED',
      title: 'What now exists.',
      icon: PackageCheck,
      color: 'var(--brand-primary)',
      bgColor: 'rgba(124, 58, 237, 0.08)',
      borderColor: 'rgba(124, 58, 237, 0.22)',
      tag: '6 Core Systems Delivered',
      items: [
        { highlight: 'Main Website & Camp Funnels', desc: 'codju.com revamped & summercamp.codju.com launched' },
        { highlight: 'WhatsApp Operations Hub', desc: 'Edge-hosted Cloudflare Worker & lead routing pipeline' },
        { highlight: 'Content Ops Platform', desc: 'Unified scheduling dashboard across 8+ digital channels' },
        { highlight: 'TeachBoost Assessment', desc: 'Interactive browser diagnostic at teachboost.in' },
        { highlight: 'Blog Visual Architecture', desc: 'Clean editorial templates & technical SEO foundation' },
        { highlight: 'Hybrid Video Workflows', desc: 'Promotional production combining AI visuals & live footage' }
      ]
    },
    {
      category: 'MEASURED',
      title: 'What the data shows.',
      icon: BarChart2,
      color: 'var(--brand-accent)',
      bgColor: 'rgba(22, 163, 74, 0.08)',
      borderColor: 'rgba(22, 163, 74, 0.22)',
      tag: '5 Verified Signals',
      items: [
        { highlight: 'YouTube Library Discovery', desc: '75.5K views with 18.1% organic search discovery' },
        { highlight: 'LinkedIn Growth & Brand', desc: '1,597 followers with 76.8K annual impressions recorded' },
        { highlight: 'Google Business Profile', desc: '42K views, 11.6K searches, 37 direct customer actions' },
        { highlight: 'Behavioral Analytics', desc: 'GA4 custom events & Microsoft Clarity user heatmaps' },
        { highlight: 'Search Demand Audits', desc: 'Branded query dominance vs. non-brand keyword baseline' }
      ]
    },
    {
      category: 'ITERATING',
      title: 'What is still being tested.',
      icon: Sparkles,
      color: '#d97706',
      bgColor: 'rgba(217, 119, 6, 0.08)',
      borderColor: 'rgba(217, 119, 6, 0.22)',
      tag: '5 Active R&D Tracks',
      items: [
        { highlight: 'Non-Brand Search Ranking', desc: 'Expanding ranking footprint for AI & pedagogy terms' },
        { highlight: 'LLM & AI-Oriented SEO', desc: 'Structuring web schema for AI engine search citations' },
        { highlight: 'API & Webhook Scalability', desc: 'Connecting WhatsApp Cloud API to automated CRM actions' },
        { highlight: 'Distribution Workflows', desc: 'Streamlining cross-channel syndication pipelines' },
        { highlight: 'Rapid Prototyping Systems', desc: 'Leveraging AI tooling to accelerate full-stack delivery' }
      ]
    }
  ];

  return (
    <section id="what-changed" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px' }}>
          <div className="section-eyebrow">
            BUSINESS CONTEXT
          </div>
          <h2 className="section-title">
            What changed.
          </h2>
          <p className="section-subtitle">
            A grounded summary of what was delivered, what the available data recorded, and what remains under active experimentation.
          </p>
        </div>

        {/* Symmetrical 3-Column Grid: SHIPPED, MEASURED, ITERATING */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px'
          }}
        >
          {pillars.map((col, idx) => {
            const Icon = col.icon;
            return (
              <div
                key={idx}
                className="card what-changed-card"
                style={{
                  gridColumn: 'span 12',
                  padding: '24px 26px',
                  backgroundColor: '#ffffff',
                  border: `1px solid ${col.borderColor}`,
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 2px 8px -2px rgba(0,0,0,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
              >
                <div>
                  {/* Category Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          backgroundColor: col.bgColor,
                          color: col.color,
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
                          fontSize: '11px',
                          fontWeight: 800,
                          color: col.color,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {col.category}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: 'var(--text-muted)',
                        backgroundColor: '#f8fafc',
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      {col.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '16px',
                      lineHeight: 1.25
                    }}
                  >
                    {col.title}
                  </h3>

                  {/* Structured Rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {col.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          padding: '8px 10px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #f1f5f9'
                        }}
                      >
                        <CheckCircle2
                          size={15}
                          color={col.color}
                          style={{ flexShrink: 0, marginTop: '2px', opacity: 0.9 }}
                        />
                        <div>
                          <div
                            style={{
                              fontSize: '13px',
                              fontWeight: 750,
                              color: 'var(--text-primary)',
                              lineHeight: 1.35
                            }}
                          >
                            {item.highlight}
                          </div>
                          <div
                            style={{
                              fontSize: '12px',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.4,
                              marginTop: '2px'
                            }}
                          >
                            {item.desc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom subtle anchor line */}
                <div
                  style={{
                    marginTop: '20px',
                    paddingTop: '12px',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '11px',
                    color: 'var(--text-muted)',
                    fontWeight: 600
                  }}
                >
                  <span>Status: Documented</span>
                  <span style={{ color: col.color, fontWeight: 700 }}>Active Record</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .what-changed-card { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
};
