import React from 'react';

interface AdditionalItem {
  title: string;
  category: string;
  oneLineSummary: string;
  statusTag: string;
}

const initiatives: AdditionalItem[] = [
  {
    title: 'Analytics Infrastructure',
    category: 'Behavioral Analytics',
    oneLineSummary: 'Deployed Google Analytics 4 and Microsoft Clarity to track session replays, heatmaps, and funnel friction.',
    statusTag: 'IMPLEMENTED'
  },
  {
    title: 'CUDO Website Chatbot',
    category: 'Conversational UX',
    oneLineSummary: 'Added a conversational layer to the main website to help visitors find information and guidance.',
    statusTag: 'IMPLEMENTED'
  },
  {
    title: 'Instagram Auto-DM Workflow',
    category: 'Small Automation',
    oneLineSummary: 'Set up a lightweight comment-triggered DM flow that directed users to the relevant blog on Instagram.',
    statusTag: 'EXPERIMENT'
  },
  {
    title: 'Educational Newsletter',
    category: 'Direct Audience',
    oneLineSummary: 'The AI & Skill Learning in Schools newsletter currently shows 527 subscribers on LinkedIn.',
    statusTag: '527 SUBSCRIBERS'
  },
  {
    title: 'API & Automation Experiments',
    category: 'Integration & APIs',
    oneLineSummary: 'Explored Mail and Blogger APIs for distribution workflows; tested authentication and failure modes.',
    statusTag: 'EXPERIMENT'
  },
  {
    title: 'External Publishing & Medium',
    category: 'Distribution Test',
    oneLineSummary: 'Published selected articles on Medium as an additional distribution and audience experiment.',
    statusTag: 'EXPERIMENT'
  },
  {
    title: 'First Paid Marketing Experiment',
    category: 'Paid Search / Social',
    oneLineSummary: 'Ran early paid test campaigns to observe search acquisition costs and enrollment intent.',
    statusTag: 'EXPERIMENT'
  },
  {
    title: 'Blogger Backlink Experiment',
    category: 'SEO Experiment',
    oneLineSummary: 'Experimented with external publishing and backlink distribution to support broader search discovery.',
    statusTag: 'EXPERIMENT'
  }
];

export const ProjectOverview: React.FC = () => {
  return (
    <div style={{ marginTop: '56px', borderTop: '1px solid var(--border-subtle)', paddingTop: '44px' }}>
      {/* Subtitle */}
      <div style={{ marginBottom: '24px', maxWidth: '640px' }}>
        <div
          style={{
            fontSize: '11px',
            fontWeight: 750,
            color: 'var(--brand-primary)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '6px'
          }}
        >
          CURATED INITIATIVES
        </div>
        <h3
          style={{
            fontSize: 'clamp(20px, 2.2vw, 24px)',
            fontWeight: 800,
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '6px'
          }}
        >
          Additional work & experiments.
        </h3>
        <p style={{ fontSize: '14.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
          Supporting marketing workflows, creative experiments, and distribution tests documented across the internship.
        </p>
      </div>

      {/* Symmetrical 2-Column Grid of Compact Single-Line Cards (§ 51) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '16px'
        }}
      >
        {initiatives.map((item, idx) => {
          return (
            <div
              key={idx}
              className="card additional-card"
              style={{
                gridColumn: 'span 12',
                padding: '16px 20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '8px',
                transition: 'border-color 0.2s ease'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: 750, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {item.category}
                  </span>
                  <span
                    style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: item.statusTag === 'DELIVERED' || item.statusTag === 'IMPLEMENTED' ? '#166534' : 'var(--text-secondary)',
                      backgroundColor: item.statusTag === 'DELIVERED' || item.statusTag === 'IMPLEMENTED' ? 'rgba(88, 204, 2, 0.08)' : '#f1f5f9',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      letterSpacing: '0.03em',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {item.statusTag}
                  </span>
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 750, color: 'var(--text-primary)', margin: '0 0 4px 0' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
                  {item.oneLineSummary}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (min-width: 860px) {
          .additional-card { grid-column: span 6 !important; }
        }
      `}</style>
    </div>
  );
};
