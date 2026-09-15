import React from 'react';
import type { EvidenceItem } from '../types';
import { BarChart3, CheckCircle2, Eye } from 'lucide-react';

interface AnalyticsInfrastructureProps {
  onOpenLightbox: (item: EvidenceItem) => void;
}

export const AnalyticsInfrastructure: React.FC<AnalyticsInfrastructureProps> = ({ onOpenLightbox }) => {
  const clarityEvidence: EvidenceItem = {
    id: 'clarity-full-evidence',
    title: 'Microsoft Clarity Behavioral Analytics',
    caption: 'Active Clarity project yi2ur6p2il for Codju Technologies measuring session replays, dead clicks, and heatmaps.',
    src: './evidence/microsoft-clarity-dashboard.png',
    date: 'September 2026 Snapshot',
    source: 'clarity.microsoft.com',
    type: 'analytics'
  };

  const ga4Evidence: EvidenceItem = {
    id: 'ga4-full-evidence',
    title: 'Google Analytics 4 Account Property',
    caption: 'GA4 account property for Codju Technologies tracking acquisition channels and interaction events.',
    src: './evidence/google-analytics-dashboard.png',
    date: 'September 2026 Snapshot',
    source: 'analytics.google.com',
    type: 'analytics'
  };

  return (
    <section id="analytics-section" className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '780px' }}>
          <div className="section-eyebrow">
            <BarChart3 size={13} />
            <span>MEASUREMENT LAYER</span>
          </div>
          <h2 className="section-title">
            Making the website measurable.
          </h2>
          <p className="section-subtitle">
            Moving from guesswork to empirical behavioral data by implementing Google Analytics 4 and Microsoft Clarity across core digital properties.
          </p>
        </div>

        {/* Visual Data Pipeline (Collect -> Understand -> Act -> Measure) */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          padding: '32px',
          marginBottom: '56px',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-mono)', color: '#6416b8', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '24px' }}>
            The Behavioral Data Pipeline
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            position: 'relative'
          }}>
            {/* Stage 1 */}
            <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#6416b8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>1</span>
                <span>COLLECT</span>
              </div>
              <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                GA4 event tags & Clarity tracking code embedded across codju.com.
              </p>
            </div>

            {/* Stage 2 */}
            <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#6416b8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>2</span>
                <span>UNDERSTAND</span>
              </div>
              <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                Heatmaps, scroll depth, dead-clicks, and anonymous user session replays.
              </p>
            </div>

            {/* Stage 3 */}
            <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#6416b8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>3</span>
                <span>ACT</span>
              </div>
              <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                Restructure CTAs, simplify curriculum navigation, and remove friction points.
              </p>
            </div>

            {/* Stage 4 */}
            <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#58cc02', color: '#0b1a04', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>4</span>
                <span>MEASURE</span>
              </div>
              <p style={{ fontSize: '13px', color: '#475569', margin: 0 }}>
                Evaluate session duration, demo schedule click rates, and conversion flow.
              </p>
            </div>
          </div>
        </div>

        {/* 2 Big Dashboard Frames */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px'
        }}>
          {/* Clarity Frame */}
          <div style={{ gridColumn: 'span 12' }} className="analytics-col">
            <div 
              className="browser-frame"
              onClick={() => onOpenLightbox(clarityEvidence)}
              style={{ cursor: 'pointer' }}
            >
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot red" />
                  <span className="browser-dot yellow" />
                  <span className="browser-dot green" />
                </div>
                <div className="browser-address-bar">
                  clarity.microsoft.com/projects/view/yi2ur6p2il (Codju Technologies)
                </div>
                <Eye size={14} color="#64748b" />
              </div>
              <div className="screenshot-preview">
                <img src={clarityEvidence.src} alt={clarityEvidence.title} />
                <div className="screenshot-overlay">
                  <span>Inspect Microsoft Clarity Dashboard</span>
                </div>
              </div>
              <div style={{ padding: '20px 24px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    Microsoft Clarity Behavioral Tracking
                  </h4>
                  <span className="badge-evidence badge-analytics">Active Project</span>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  Capturing anonymous session recordings and interaction heatmaps to understand where educators pause, click, or abandon registration funnels.
                </p>
              </div>
            </div>
          </div>

          {/* GA4 Frame */}
          <div style={{ gridColumn: 'span 12' }} className="analytics-col">
            <div 
              className="browser-frame"
              onClick={() => onOpenLightbox(ga4Evidence)}
              style={{ cursor: 'pointer' }}
            >
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot red" />
                  <span className="browser-dot yellow" />
                  <span className="browser-dot green" />
                </div>
                <div className="browser-address-bar">
                  analytics.google.com (All accounts &gt; Codju Technologies)
                </div>
                <Eye size={14} color="#64748b" />
              </div>
              <div className="screenshot-preview">
                <img src={ga4Evidence.src} alt={ga4Evidence.title} />
                <div className="screenshot-overlay">
                  <span>Inspect Google Analytics 4 Dashboard</span>
                </div>
              </div>
              <div style={{ padding: '20px 24px', backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                    Google Analytics 4 Measurement Property
                  </h4>
                  <span className="badge-evidence badge-analytics">Active Stream</span>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  Standardizing traffic acquisition channels (Direct, Referral, Organic Search) and core curriculum interaction events for ongoing performance tracking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Factuality Note */}
        <div style={{
          marginTop: '40px',
          padding: '16px 20px',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <CheckCircle2 size={18} color="#6416b8" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
            <strong>Integrity Note:</strong> Setting up analytics does not automatically claim business growth. It created the essential feedback loop required to evaluate future marketing iterations with confidence.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .analytics-col { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
};
