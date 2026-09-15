import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '66vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '56px',
        paddingBottom: '56px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Focused Story & Hierarchy */}
          <div style={{ gridColumn: 'span 12' }} className="hero-text-col">
            {/* Small quiet eyebrow */}
            <div
              style={{
                fontSize: '12.5px',
                fontWeight: 700,
                color: 'var(--brand-primary)',
                letterSpacing: '0.04em',
                marginBottom: '14px',
                display: 'inline-block'
              }}
            >
              Marketing Intern — Growth & Brand
            </div>

            {/* Large H1 anchor */}
            <h1
              style={{
                fontSize: 'clamp(36px, 4.4vw, 56px)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                marginBottom: '18px'
              }}
            >
              Nine months of building at <span style={{ color: 'var(--brand-primary)' }}>Codju</span>.
            </h1>

            {/* Short supporting paragraph */}
            <p
              style={{
                fontSize: 'clamp(16.5px, 1.7vw, 18.5px)',
                lineHeight: 1.55,
                color: 'var(--text-secondary)',
                marginBottom: '26px',
                fontWeight: 400
              }}
            >
              I started with growth and brand. Over time, the work moved into websites,
              SEO, analytics, marketing systems, automation and AI-assisted development.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                alignItems: 'center',
                marginBottom: '28px'
              }}
            >
              <a href="#flagship" className="btn btn-primary">
                <span>SEE WHAT I BUILT</span>
                <Layers size={15} />
              </a>
              <a href="#numbers" className="btn btn-secondary">
                <span>SEE THE EVIDENCE</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Visually quiet metadata (with direct links) */}
            <div
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
              <span>~9 months</span>
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

          {/* Right Column: Exactly One Visual Placeholder */}
          <div style={{ gridColumn: 'span 12' }} className="hero-visual-col">
            <ProjectVisualPlaceholder
              imageSrc="/pics/codju.com.png"
              label="PRODUCTION PLATFORM"
              projectName="Codju Web & Digital Ecosystem"
              optionalNote="codju.com production release"
              aspectRatio="16/11"
              minHeight="280px"
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-text-col { grid-column: span 7 !important; }
          .hero-visual-col { grid-column: span 5 !important; }
        }
      `}</style>
    </section>
  );
};
