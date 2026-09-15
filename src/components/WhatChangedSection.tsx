import React from 'react';
import { PackageCheck, BarChart2, Sparkles } from 'lucide-react';

export const WhatChangedSection: React.FC = () => {
  const pillars = [
    {
      category: 'SHIPPED',
      title: 'What now exists.',
      icon: PackageCheck,
      color: 'var(--brand-primary)',
      bgColor: 'var(--brand-primary-subtle)',
      items: [
        'Main website & campaign landing pages',
        'WhatsApp marketing operations hub',
        'Content operations dashboard & workflow',
        'TeachBoost educator web experience',
        'Blog hero visual design system',
        'AI / hybrid promotional video'
      ]
    },
    {
      category: 'MEASURED',
      title: 'What the data shows.',
      icon: BarChart2,
      color: 'var(--brand-accent)',
      bgColor: 'rgba(88, 204, 2, 0.1)',
      items: [
        'YouTube (library restructuring & search discovery)',
        'LinkedIn (presence, impressions & reactions)',
        'Google Business (profile views & discovery searches)',
        'Website analytics (GA4 & Clarity behavioral tracking)',
        'Search Console (branded demand & query audits)'
      ]
    },
    {
      category: 'ITERATING',
      title: 'What is still being tested.',
      icon: Sparkles,
      color: '#d97706',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      items: [
        'Broader non-brand SEO discovery',
        'AI / LLM-oriented content structure',
        'API & webhook integration experiments',
        'Lightweight distribution automation',
        'AI-assisted rapid workflows'
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
                  padding: '28px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  {/* Category Pill */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
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
                      <Icon size={16} />
                    </div>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 750,
                        color: col.color,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase'
                      }}
                    >
                      {col.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: 'var(--text-primary)',
                      marginBottom: '16px',
                      lineHeight: 1.3
                    }}
                  >
                    {col.title}
                  </h3>

                  {/* Bulleted List */}
                  <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {col.items.map((item, iIdx) => (
                      <li
                        key={iIdx}
                        style={{
                          fontSize: '13.5px',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.5
                        }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .what-changed-card { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
};
