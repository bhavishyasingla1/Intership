import React from 'react';
import { ArrowRight, Code2, Bot, Zap, Film } from 'lucide-react';

export const AIAutomationSection: React.FC = () => {
  const workflowSteps = [
    'IDEA',
    'AI ASSISTANCE',
    'BUILD',
    'HUMAN REVIEW',
    'FINAL OUTPUT'
  ];

  const practicalExamples = [
    {
      title: 'AI-assisted web development',
      category: 'AI-ASSISTED WEB DEVELOPMENT',
      icon: Code2,
      summary: 'Used AI coding workflows for rapid component scaffolding and responsive layout prototyping on TeachBoost.in and campaign pages.'
    },
    {
      title: 'Conversational web layer',
      category: 'CONVERSATIONAL WEB',
      icon: Bot,
      summary: 'Integrated CUDO to provide an interactive navigation layer on the main website, answering curriculum queries and guiding educators to demos.'
    },
    {
      title: 'Lightweight distribution automation',
      category: 'LIGHTWEIGHT AUTOMATION',
      icon: Zap,
      summary: 'Constructed simple comment-triggered DM flows that directed engaged educators on Instagram directly to relevant educational blog articles.'
    },
    {
      title: 'Generative media & video packaging',
      category: 'GENERATIVE MEDIA',
      icon: Film,
      summary: 'Experimented with AI visual generation, curriculum packaging, and paced video workflows to support multi-channel distribution.'
    }
  ];

  return (
    <section
      id="ai-automation"
      className="section"
      style={{
        backgroundColor: '#160b24', // Deep dark purple / aubergine direction per Document 14 §§ 25-27
        color: '#f8fafc',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '680px' }}>
          <div
            className="section-eyebrow"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#c4b5fd'
            }}
          >
            SYSTEMS & EXPERIMENTATION
          </div>
          <h2
            className="section-title"
            style={{ color: '#ffffff' }}
          >
            AI became another tool in the workflow.
          </h2>
          <p
            className="section-subtitle"
            style={{ color: '#b3a4cb' }}
          >
            Used AI-assisted development, generative media and lightweight automation to experiment, prototype and ship faster.
          </p>
        </div>

        {/* The Practical Workflow Diagram (Document 14 § 29) */}
        <div
          style={{
            backgroundColor: '#22123b',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 'var(--radius-lg)',
            padding: '22px 26px',
            marginBottom: '32px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '16px'
            }}
          >
            <span
              style={{
                fontSize: '11px',
                fontWeight: 750,
                color: '#c4b5fd',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              PRACTICAL EXECUTION PIPELINE
            </span>
            <span style={{ fontSize: '12px', color: '#b3a4cb', fontStyle: 'italic' }}>
              Human review ensures AI accelerates execution without replacing judgment.
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            {workflowSteps.map((step, idx) => {
              const isLast = idx === workflowSteps.length - 1;
              const isHumanReview = step === 'HUMAN REVIEW';
              return (
                <React.Fragment key={idx}>
                  <div
                    style={{
                      padding: '8px 14px',
                      backgroundColor: isHumanReview ? 'rgba(88, 204, 2, 0.12)' : 'rgba(255, 255, 255, 0.06)',
                      border: isHumanReview ? '1px solid var(--brand-accent)' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: isHumanReview ? 'var(--brand-accent)' : (isLast ? '#ffffff' : '#e2e8f0'),
                      letterSpacing: '0.05em'
                    }}
                  >
                    {step}
                  </div>
                  {!isLast && (
                    <ArrowRight size={14} color="#82709a" style={{ flexShrink: 0 }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 4 Grouped System & Experiment Cards (§ 30: TITLE + ONE SENTENCE ONLY) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}
        >
          {practicalExamples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#22123b',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: 'var(--radius-md)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.07)',
                        color: '#c4b5fd',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Icon size={16} />
                    </div>
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 750,
                        color: '#c4b5fd',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em'
                      }}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '16.5px',
                      fontWeight: 750,
                      color: '#ffffff',
                      marginBottom: '8px',
                      lineHeight: 1.3
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#b3a4cb',
                      lineHeight: 1.55,
                      margin: 0
                    }}
                  >
                    {item.summary}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Experimentation & Learning (Document 15 §§ 33–38, 57–58) */}
        <div
          style={{
            marginTop: '44px',
            paddingTop: '36px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ maxWidth: '720px', marginBottom: '24px' }}>
            <span
              style={{
                fontSize: '11px',
                fontWeight: 750,
                color: '#c4b5fd',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '6px'
              }}
            >
              EXPERIMENTATION & LEARNING
            </span>
            <h3
              style={{
                fontSize: '20px',
                fontWeight: 800,
                color: '#ffffff',
                marginBottom: '8px'
              }}
            >
              Not every experiment shipped. They were still useful.
            </h3>
            <p style={{ fontSize: '14px', color: '#b3a4cb', lineHeight: 1.55, margin: 0 }}>
              "Not every experiment shipped. Some API and automation attempts did not work as intended — but working through them taught me how these systems behave in practice."
            </p>
          </div>

          {/* Small Horizontal Sequence: IDEA → TRY → BREAK → UNDERSTAND → ITERATE */}
          <div
            style={{
              backgroundColor: '#22123b',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}
          >
            {['IDEA', 'TRY', 'BREAK', 'UNDERSTAND', 'ITERATE'].map((stage, sIdx) => {
              const isBreak = stage === 'BREAK';
              const isLast = sIdx === 4;
              return (
                <React.Fragment key={sIdx}>
                  <div
                    style={{
                      padding: '5px 10px',
                      backgroundColor: isBreak ? 'rgba(239, 68, 68, 0.12)' : 'rgba(255, 255, 255, 0.06)',
                      border: isBreak ? '1px solid rgba(239, 68, 68, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 750,
                      color: isBreak ? '#fca5a5' : '#e2e8f0',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {stage}
                  </div>
                  {!isLast && <ArrowRight size={12} color="#82709a" style={{ flexShrink: 0 }} />}
                </React.Fragment>
              );
            })}
          </div>

          {/* 4 Quiet Experiment Cards with Neutral Labels (§ 37: SHIPPED, ITERATED, DISCONTINUED, UNRESOLVED) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '20px'
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', color: '#c4b5fd', fontWeight: 700 }}>API EXPLORATION</span>
                <span style={{ fontSize: '10px', color: '#fca5a5', backgroundColor: 'rgba(239, 68, 68, 0.15)', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>DISCONTINUED</span>
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>Blogger Publishing APIs</div>
              <div style={{ fontSize: '12px', color: '#b3a4cb', lineHeight: 1.45 }}>Tested headless sync from draft pipelines to Blogger; encountered auth token lifecycle limitations and discontinued.</div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', color: '#c4b5fd', fontWeight: 700 }}>EMAIL WORKFLOWS</span>
                <span style={{ fontSize: '10px', color: '#fde047', backgroundColor: 'rgba(234, 179, 8, 0.15)', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>ITERATED</span>
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>Mail & Notification Hooks</div>
              <div style={{ fontSize: '12px', color: '#b3a4cb', lineHeight: 1.45 }}>Prototyped automated delivery hooks for curriculum activity kits; shifted focus to WhatsApp for direct educator reach.</div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', color: '#c4b5fd', fontWeight: 700 }}>INTEGRATION PIPELINE</span>
                <span style={{ fontSize: '10px', color: 'var(--brand-accent)', backgroundColor: 'rgba(88, 204, 2, 0.15)', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>SHIPPED</span>
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>Meta WhatsApp Cloud API</div>
              <div style={{ fontSize: '12px', color: '#b3a4cb', lineHeight: 1.45 }}>Verified webhook endpoints and template approvals; transitioned successfully into the internal operations hub.</div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '8px',
                padding: '16px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <span style={{ fontSize: '11px', color: '#c4b5fd', fontWeight: 700 }}>AUTOMATION ATTEMPTS</span>
                <span style={{ fontSize: '10px', color: '#93c5fd', backgroundColor: 'rgba(59, 130, 246, 0.15)', padding: '2px 6px', borderRadius: '3px', fontWeight: 700 }}>EXPERIMENT</span>
              </div>
              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>Comment-to-DM Flow</div>
              <div style={{ fontSize: '12px', color: '#b3a4cb', lineHeight: 1.45 }}>Explored social webhook response triggers for blog content distribution; validated API limits and response latency.</div>
            </div>
          </div>

          <div style={{ fontSize: '12.5px', color: '#b3a4cb', fontStyle: 'italic', borderTop: '1px dashed rgba(255, 255, 255, 0.08)', paddingTop: '12px' }}>
            "I learned that building with unfamiliar APIs involves understanding constraints, authentication, data formats, edge cases and failure modes — not just getting the first request to work."
          </div>
        </div>
      </div>
    </section>
  );
};
