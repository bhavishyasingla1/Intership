import React from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';

export const TransformationSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      stage: 'I STARTED WITH',
      title: 'Growth & Brand Marketing',
      desc: 'Assigned to platform consistency, school outreach briefs, and regular social publishing.',
      color: '#64748b'
    },
    {
      step: '02',
      stage: 'I LEARNED TO',
      title: 'Diagnose Channel & Search Intent',
      desc: 'Used Search Console and Zoho Social to identify branded query saturation and build non-brand content clusters.',
      color: '#6416b8'
    },
    {
      step: '03',
      stage: 'I EXPANDED INTO',
      title: 'Web Restructuring & Landing Pages',
      desc: 'Rebuilt core pages on codju.com, created TeachBoost.in, and developed campaign-specific camp funnels.',
      color: '#6416b8'
    },
    {
      step: '04',
      stage: 'I BEGAN BUILDING',
      title: 'Marketing Systems & Internal Tools',
      desc: 'Engineered the WhatsApp Marketing Operations Hub on Cloudflare Workers and centralized content workflows.',
      color: '#6416b8'
    },
    {
      step: '05',
      stage: 'I EXPERIMENTED WITH',
      title: 'Automation & AI-Assisted Workflows',
      desc: 'Integrated CUDO chatbot, configured Instagram auto-DM triggers, and accelerated frontend builds.',
      color: '#58cc02'
    },
    {
      step: '06',
      stage: 'TODAY I CAN',
      title: 'Connect Code, Systems & Growth',
      desc: 'Bridge computer engineering with marketing operations to solve real business bottlenecks and measure the outcome.',
      color: '#0f172a',
      isHighlight: true
    }
  ];

  return (
    <section id="evolution" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '780px' }}>
          <div className="section-eyebrow">
            <TrendingUp size={13} />
            <span>THE CORE TAKEAWAY</span>
          </div>
          <h2 className="section-title">
            What nine months changed.
          </h2>
          <p className="section-subtitle">
            The progression was not an artificial title promotion—it was an organic expansion of ownership driven by solving real problems.
          </p>
        </div>

        {/* Progression Steps Flow */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginBottom: '56px'
        }}>
          {steps.map((item, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: item.isHighlight ? '#090d16' : '#f8fafc',
                color: item.isHighlight ? '#ffffff' : '#0f172a',
                border: item.isHighlight ? '1px solid #6416b8' : '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                position: 'relative',
                boxShadow: item.isHighlight ? '0 12px 30px rgba(100, 22, 184, 0.25)' : 'var(--shadow-xs)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: item.isHighlight ? '#86efac' : '#64748b'
                  }}>
                    {item.stage}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    fontWeight: 800,
                    color: item.isHighlight ? '#c084fc' : '#6416b8'
                  }}>
                    {item.step}
                  </span>
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: 800,
                  color: item.isHighlight ? '#ffffff' : '#0f172a',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: item.isHighlight ? '#94a3b8' : '#475569',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>

              {item.isHighlight && (
                <div style={{
                  marginTop: '20px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '12px',
                  color: '#86efac',
                  fontWeight: 600
                }}>
                  <Sparkles size={14} /> Ready for high-ownership growth roles
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
