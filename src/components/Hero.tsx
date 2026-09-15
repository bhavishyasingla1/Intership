import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        minHeight: '66vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '48px',
        paddingBottom: '48px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Focused Story & Hierarchy */}
          <div style={{ gridColumn: 'span 12' }} className="hero-text-col">
            {/* Small quiet eyebrow */}
            <div
              style={{
                fontSize: '12px',
                fontWeight: 750,
                color: 'var(--brand-primary)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '14px',
                display: 'inline-block'
              }}
            >
              Marketing & Systems Intern
            </div>

            {/* Large H1 anchor */}
            <h1
              className="hero-heading"
              style={{
                fontSize: 'clamp(32px, 4.2vw, 54px)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                marginBottom: '16px'
              }}
            >
              Internship at <span style={{ color: 'var(--brand-primary)' }}>Codju</span>.
            </h1>

            {/* Short supporting paragraph */}
            <p
              className="hero-subtext"
              style={{
                fontSize: 'clamp(15.5px, 1.6vw, 18px)',
                lineHeight: 1.55,
                color: 'var(--text-secondary)',
                marginBottom: '26px',
                fontWeight: 400
              }}
            >
              Started with brand and organic growth, then scaled into web architecture, SEO, analytics, and AI-assisted automation.
            </p>

            {/* CTAs */}
            <div
              className="hero-cta-group"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '28px'
              }}
            >
              <a href="#flagship" className="btn btn-primary">
                <span>EXPLORE MY WORK</span>
                <Layers size={15} />
              </a>
              <a href="#numbers" className="btn btn-secondary">
                <span>VERIFIED EVIDENCE</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Visually quiet metadata (with direct links) */}
            <div
              className="hero-meta-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                fontSize: '13px',
                color: 'var(--text-muted)',
                fontWeight: 500
              }}
            >
              <a
                href="https://codju.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-primary)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                Codju Technologies
              </a>
              <span>•</span>
              <span>2026</span>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/bhavishyasingla1/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--brand-primary)', fontWeight: 650, textDecoration: 'none' }}
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="mailto:say@hibhavishya.in"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
              >
                say@hibhavishya.in
              </a>
            </div>
          </div>

          {/* Right Column: Clean Hero Image without overlay box */}
          <div style={{ gridColumn: 'span 12' }} className="hero-visual-col">
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src="./pics/hero-image.png"
                alt="Nine months of building at Codju"
                className="hero-img-element"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '480px',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-text-col { grid-column: span 6 !important; }
          .hero-visual-col { grid-column: span 6 !important; }
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 36px !important;
            padding-bottom: 36px !important;
          }
          .hero-grid {
            gap: 28px !important;
          }
          .hero-heading {
            font-size: 32px !important;
            line-height: 1.18 !important;
            margin-bottom: 12px !important;
          }
          .hero-subtext {
            font-size: 15px !important;
            line-height: 1.5 !important;
            margin-bottom: 20px !important;
          }
          .hero-cta-group {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
            margin-bottom: 22px !important;
          }
          .hero-cta-group .btn {
            width: 100% !important;
          }
          .hero-meta-row {
            font-size: 12px !important;
            gap: 6px !important;
          }
          .hero-img-element {
            max-height: 320px !important;
          }
        }
      `}</style>
    </section>
  );
};
