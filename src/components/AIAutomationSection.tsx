import React from 'react';
import { ArrowRight, Code2, Bot, Zap, Film, CheckCircle2 } from 'lucide-react';

export const AIAutomationSection: React.FC = () => {
  const workflowSteps = [
    { label: 'IDEA', isHuman: false },
    { label: 'AI ASSISTANCE', isHuman: false },
    { label: 'BUILD', isHuman: false },
    { label: 'HUMAN REVIEW', isHuman: true },
    { label: 'FINAL OUTPUT', isHuman: false }
  ];

  const initiatives = [
    {
      title: 'AI-Assisted Engineering',
      tag: 'WEB DEVELOPMENT',
      icon: Code2,
      summary: 'Used AI coding workflows for component scaffolding and responsive layout prototyping on TeachBoost and campaign pages.'
    },
    {
      title: 'Conversational Web Layer',
      tag: 'CUDO INTEGRATION',
      icon: Bot,
      summary: 'Integrated CUDO to provide an interactive guidance layer on the main website, answering curriculum queries and guiding educators.'
    },
    {
      title: 'Distribution Automation',
      tag: 'WORKFLOW HOOKS',
      icon: Zap,
      summary: 'Constructed comment-to-DM routing and notification triggers to direct engaged educators directly to relevant pedagogy articles.'
    },
    {
      title: 'Generative Media & Video',
      tag: 'HYBRID PRODUCTION',
      icon: Film,
      summary: 'Experimented with AI visual generation, curriculum packaging, and paced video workflows to support multi-channel campaigns.'
    }
  ];

  return (
    <section
      id="ai-automation"
      className="section"
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '64px',
        paddingBottom: '64px'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '680px', marginBottom: '24px' }}>
          <div className="section-eyebrow">
            SYSTEMS & EXPERIMENTATION
          </div>
          <h2 className="section-title">
            AI became another tool in the workflow.
          </h2>
          <p className="section-subtitle">
            Used AI-assisted development, generative media, and lightweight automation to prototype, iterate, and ship faster.
          </p>
        </div>

        {/* Compact, Restrained Execution Pipeline Banner */}
        <div
          style={{
            backgroundColor: '#f8fafc',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 18px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 800,
                color: 'var(--brand-primary)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginRight: '4px'
              }}
            >
              EXECUTION PIPELINE:
            </span>
            {workflowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <span
                  style={{
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '11px',
                    fontWeight: step.isHuman ? 800 : 700,
                    backgroundColor: step.isHuman ? 'rgba(22, 163, 74, 0.08)' : '#ffffff',
                    color: step.isHuman ? '#16a34a' : 'var(--text-primary)',
                    border: step.isHuman ? '1px solid rgba(22, 163, 74, 0.28)' : '1px solid var(--border-subtle)',
                    letterSpacing: '0.04em'
                  }}
                >
                  {step.label}
                </span>
                {idx < workflowSteps.length - 1 && (
                  <ArrowRight size={12} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                )}
              </React.Fragment>
            ))}
          </div>

          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 550, fontStyle: 'italic' }}>
            Human review ensures AI accelerates execution without replacing judgment.
          </div>
        </div>

        {/* 4 Grouped Symmetrical Initiative Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '18px',
            marginBottom: '20px'
          }}
        >
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="ai-card-col"
                style={{
                  gridColumn: 'span 12',
                  display: 'flex'
                }}
              >
                <div
                  className="card"
                  style={{
                    padding: '20px 20px',
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: '100%',
                    boxShadow: '0 2px 8px -2px rgba(0,0,0,0.04)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '6px',
                          backgroundColor: 'var(--brand-primary-subtle)',
                          color: 'var(--brand-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <Icon size={15} strokeWidth={2.2} />
                      </div>
                      <span
                        style={{
                          fontSize: '10.5px',
                          fontWeight: 800,
                          color: 'var(--brand-primary)',
                          letterSpacing: '0.06em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {item.tag}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        marginBottom: '6px',
                        lineHeight: 1.3
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '12.5px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                        margin: 0
                      }}
                    >
                      {item.summary}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet Grounded Takeaway */}
        <div
          style={{
            padding: '14px 18px',
            backgroundColor: '#f8fafc',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '12.5px',
            color: 'var(--text-secondary)',
            lineHeight: 1.45
          }}
        >
          <CheckCircle2 size={16} color="var(--brand-accent)" style={{ flexShrink: 0 }} />
          <span>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Practical takeaway: </strong>
            Not every experiment shipped directly — early exploratory attempts on third-party APIs clarified rate limits, authentication constraints, and where human discretion is non-negotiable.
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 600px) {
          .ai-card-col { grid-column: span 6 !important; }
        }
        @media (min-width: 1024px) {
          .ai-card-col { grid-column: span 3 !important; }
        }
      `}</style>
    </section>
  );
};
