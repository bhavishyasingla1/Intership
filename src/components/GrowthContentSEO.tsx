import React from 'react';
import type { EvidenceItem } from '../types';
import { TrendingUp, Search, FileSpreadsheet, Share2, Eye } from 'lucide-react';

interface GrowthContentSEOProps {
  onOpenLightbox: (item: EvidenceItem) => void;
}

export const GrowthContentSEO: React.FC<GrowthContentSEOProps> = ({ onOpenLightbox }) => {
  const seoEvidence: EvidenceItem = {
    id: 'li-growth-evidence',
    title: 'LinkedIn Audience Scale (1.6K Followers)',
    caption: 'Zoho Social multi-channel summary verifying 1.6K total followers on LinkedIn in September 2026.',
    src: './evidence/linkedin-audience-1.6k.png',
    date: 'September 2026 Snapshot',
    source: 'Zoho Social Reports',
    type: 'analytics'
  };

  const gmbEvidence: EvidenceItem = {
    id: 'gmb-interactions-evidence',
    title: 'Google My Business Interactions',
    caption: 'Codju Technologies Pvt. Ltd. knowledge panel recording 36 customer interactions after profile standardisation.',
    src: './evidence/google-business-profile-36-interactions.png',
    date: 'September 2026 Snapshot',
    source: 'Google Search & Business Dashboard',
    type: 'screenshot'
  };

  const ytEvidence: EvidenceItem = {
    id: 'yt-channel-evidence',
    title: 'YouTube Channel Management',
    caption: 'Codju Technologies YouTube channel content repository and structured curriculum playlists.',
    src: './evidence/youtube-channel-codju.png',
    date: 'September 2026 Snapshot',
    source: 'YouTube Studio',
    type: 'screenshot'
  };

  return (
    <section id="growth-seo" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '780px' }}>
          <div className="section-eyebrow">
            <TrendingUp size={13} />
            <span>AUDIENCE & DISCOVERY</span>
          </div>
          <h2 className="section-title">
            Growth, Content & Search Strategy.
          </h2>
          <p className="section-subtitle">
            How I shifted from manual social posting to architecting a repeatable content engine, diagnosing organic search query intent, and scaling brand footprints.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '32px',
          marginBottom: '56px'
        }}>
          {/* Pillar 1: The Content Engine */}
          <div style={{ gridColumn: 'span 12' }} className="growth-pillar-col">
            <div className="card" style={{ height: '100%', padding: '32px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(100, 22, 184, 0.08)',
                color: '#6416b8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <FileSpreadsheet size={22} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                1. The Repeatable Content Engine
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Instead of treating content as isolated tasks, I organized it into a structured 5-stage pipeline:
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                backgroundColor: '#f8fafc',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px'
              }}>
                <div style={{ color: '#0f172a' }}><strong>01 Research:</strong> CBSE/ICSE curriculum & NEP 2020 guidelines</div>
                <div style={{ color: '#0f172a' }}><strong>02 Production:</strong> Document carousels, blogs & educator newsletters</div>
                <div style={{ color: '#0f172a' }}><strong>03 Multi-Channel:</strong> LinkedIn B2B, YouTube walkthroughs & Instagram</div>
                <div style={{ color: '#0f172a' }}><strong>04 Measurement:</strong> Tracking engagement & retention in Zoho Social</div>
              </div>
            </div>
          </div>

          {/* Pillar 2: The SEO Diagnosis */}
          <div style={{ gridColumn: 'span 12' }} className="growth-pillar-col">
            <div className="card" style={{ height: '100%', padding: '32px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(88, 204, 2, 0.12)',
                color: '#2e7d00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Search size={22} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                2. The Search Console Diagnosis
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Auditing Google Search Console revealed an essential strategic realization:
              </p>
              <div style={{
                backgroundColor: '#f8fafc',
                borderLeft: '3px solid #58cc02',
                padding: '16px',
                borderRadius: '0 12px 12px 0',
                marginBottom: '16px'
              }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#2e7d00', textTransform: 'uppercase', marginBottom: '4px' }}>
                  Documented Observation
                </div>
                <p style={{ fontSize: '14px', color: '#334155', margin: 0, lineHeight: 1.5 }}>
                  "Search visibility was predominantly branded queries. Non-brand discovery around AI education and curriculum was limited. We responded with topic-focused content clusters and internal linking."
                </p>
              </div>
              <p style={{ fontSize: '13px', color: '#64748b' }}>
                Focused future search acquisitions on specific educator searches rather than high-competition generic keywords.
              </p>
            </div>
          </div>

          {/* Pillar 3: Multi-Platform Reporting */}
          <div style={{ gridColumn: 'span 12' }} className="growth-pillar-col">
            <div className="card" style={{ height: '100%', padding: '32px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                color: '#1d4ed8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                <Share2 size={22} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                3. Unified Channel Command
              </h3>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                Connected and managed all brand footprints through Zoho Social:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '13px' }}>
                <div style={{ padding: '8px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontWeight: 600 }}>
                  LinkedIn: 1.6K+ Followers
                </div>
                <div style={{ padding: '8px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontWeight: 600 }}>
                  YouTube: 1.35K+ Subs
                </div>
                <div style={{ padding: '8px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontWeight: 600 }}>
                  Google Business: 36 Actions
                </div>
                <div style={{ padding: '8px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontWeight: 600 }}>
                  Newsletter: ~340 Readers
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Evidence Showcase Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {/* Item 1: LinkedIn Snapshot */}
          <div 
            className="browser-frame"
            onClick={() => onOpenLightbox(seoEvidence)}
            style={{ cursor: 'pointer' }}
          >
            <div className="browser-header">
              <span className="browser-address-bar">social.zoho.in/.../Home.do#reports/lnsummary</span>
              <Eye size={14} color="#64748b" />
            </div>
            <div className="screenshot-preview" style={{ height: '200px' }}>
              <img src={seoEvidence.src} alt={seoEvidence.title} style={{ objectFit: 'cover', height: '100%' }} />
              <div className="screenshot-overlay">
                <span>Inspect LinkedIn 1.6K Report</span>
              </div>
            </div>
            <div style={{ padding: '14px 18px', backgroundColor: '#ffffff' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                Zoho Social LinkedIn Dashboard
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                Documented snapshot verifying 1.6K audience scale.
              </div>
            </div>
          </div>

          {/* Item 2: Google Business Profile */}
          <div 
            className="browser-frame"
            onClick={() => onOpenLightbox(gmbEvidence)}
            style={{ cursor: 'pointer' }}
          >
            <div className="browser-header">
              <span className="browser-address-bar">google.com/search?q=Codju+Technologies</span>
              <Eye size={14} color="#64748b" />
            </div>
            <div className="screenshot-preview" style={{ height: '200px' }}>
              <img src={gmbEvidence.src} alt={gmbEvidence.title} style={{ objectFit: 'cover', height: '100%' }} />
              <div className="screenshot-overlay">
                <span>Inspect Google Business Dashboard</span>
              </div>
            </div>
            <div style={{ padding: '14px 18px', backgroundColor: '#ffffff' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                Google Business Profile Verification
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                36 verified customer interactions on local knowledge panel.
              </div>
            </div>
          </div>

          {/* Item 3: YouTube Management */}
          <div 
            className="browser-frame"
            onClick={() => onOpenLightbox(ytEvidence)}
            style={{ cursor: 'pointer' }}
          >
            <div className="browser-header">
              <span className="browser-address-bar">youtube.com/@codjutech</span>
              <Eye size={14} color="#64748b" />
            </div>
            <div className="screenshot-preview" style={{ height: '200px' }}>
              <img src={ytEvidence.src} alt={ytEvidence.title} style={{ objectFit: 'cover', height: '100%' }} />
              <div className="screenshot-overlay">
                <span>Inspect YouTube Management</span>
              </div>
            </div>
            <div style={{ padding: '14px 18px', backgroundColor: '#ffffff' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>
                YouTube Channel Repository
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                Structured playlists supporting B2B curriculum walkthroughs.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .growth-pillar-col { grid-column: span 4 !important; }
        }
      `}</style>
    </section>
  );
};
