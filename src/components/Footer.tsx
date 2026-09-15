import React from 'react';
import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react';

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const webExperiences = [
    { title: 'Codju Main Website', url: 'https://codju.com', badge: 'Core Site' },
    { title: 'Educational Blog', url: 'https://codju.com/blog/', badge: 'Editorial' },
    { title: 'Computational Thinking', url: 'https://codju.com/computational-thinking/', badge: 'Pedagogy' },
    { title: 'Codju Summer Camp', url: 'https://summercamp.codju.com/', badge: 'Campaign' },
    { title: 'TeachBoost Platform', url: 'https://teachboost.in/', badge: 'Workshops' }
  ];

  const systemsOps = [
    { title: 'WhatsApp Marketing Hub', url: 'https://whatsapp-dashboard.codju-tech25.workers.dev/', badge: 'Live Worker' },
    { title: 'Content Operations Hub', url: 'https://codju-content.bhavishyasingla2005.workers.dev/', badge: 'Live Worker' },
    { title: 'Google Business Profile', url: 'https://share.google/74j2gsdUwcflPEkmp', badge: 'Verified' }
  ];

  const brandChannels = [
    { title: 'Codju on LinkedIn', url: 'https://www.linkedin.com/company/codjutech/posts/?feedView=all', badge: '1.6K+' },
    { title: 'Codju on YouTube', url: 'https://www.youtube.com/@codjutech/videos', badge: 'Videos' },
    { title: 'Codju on Instagram', url: 'https://www.instagram.com/codjutech/', badge: 'Social' },
    { title: 'Codju on X', url: 'https://x.com/Codjutech', badge: 'Updates' },
    { title: 'Codju on Facebook', url: 'https://www.facebook.com/people/Codju/61590299614330/?sk=directory_activites', badge: 'Page' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#090d16',
        color: '#94a3b8',
        paddingTop: '68px',
        paddingBottom: '44px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Tier 1: Identity & Personal Header Card */}
        <div
          style={{
            backgroundColor: '#111726',
            border: '1px solid rgba(255, 255, 255, 0.09)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px 36px',
            marginBottom: '44px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          {/* Left: Bhavishya Identity */}
          <div style={{ maxWidth: '540px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--brand-accent)'
                }}
              />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 750,
                  color: 'var(--brand-accent)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}
              >
                Documented Case Study
              </span>
            </div>

            <h3
              style={{
                fontSize: '24px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                margin: '0 0 6px 0'
              }}
            >
              Bhavishya Singla
            </h3>

            <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.5, margin: 0 }}>
              Growth × Web × Analytics × AI — Nine months of building web systems, analytics pipelines, and tools at Codju.
            </p>
          </div>

          {/* Right: Direct Actions (Email + Social Chips) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'flex-start' }}>
            <a
              href="mailto:say@hibhavishya.in"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                backgroundColor: 'rgba(100, 22, 184, 0.25)',
                border: '1px solid rgba(168, 85, 247, 0.4)',
                borderRadius: 'var(--radius-sm)',
                color: '#ffffff',
                fontSize: '13.5px',
                fontWeight: 700,
                textDecoration: 'none',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(100, 22, 184, 0.45)';
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(100, 22, 184, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.4)';
              }}
            >
              <Mail size={15} color="#c084fc" />
              <span>say@hibhavishya.in</span>
            </a>

            {/* Social Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/bhavishyasingla1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavishya on LinkedIn"
                className="footer-social-chip"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://x.com/Bhavishyas_1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavishya on X"
                className="footer-social-chip"
              >
                <XIcon size={14} />
                <span>X / Twitter</span>
              </a>

              <a
                href="https://www.instagram.com/bhavishyasingla1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavishya on Instagram"
                className="footer-social-chip"
              >
                <InstagramIcon size={14} />
                <span>Instagram</span>
              </a>

              <a
                href="https://www.youtube.com/@bhavishyasingla1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bhavishya on YouTube"
                className="footer-social-chip"
              >
                <YoutubeIcon size={14} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Tier 2: Symmetrical 3-Column Ecosystem Directory */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '48px',
            marginBottom: '32px'
          }}
        >
          {/* Column 1: Web Experiences */}
          <div style={{ gridColumn: 'span 12' }} className="footer-dir-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c084fc' }} />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Web Experiences
              </span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {webExperiences.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link-row"
                  >
                    <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{item.title}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="footer-badge-tag">{item.badge}</span>
                      <ArrowUpRight size={12} className="footer-arrow-icon" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Systems & Operations */}
          <div style={{ gridColumn: 'span 12' }} className="footer-dir-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--brand-accent)' }} />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Systems & Operations
              </span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {systemsOps.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link-row"
                  >
                    <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{item.title}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="footer-badge-tag" style={{ color: '#86efac', backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                        {item.badge}
                      </span>
                      <ArrowUpRight size={12} className="footer-arrow-icon" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 14px',
                fontSize: '12px',
                color: '#94a3b8',
                lineHeight: 1.45
              }}
            >
              Custom internal tools built on Cloudflare Workers and Meta WhatsApp Cloud API to automate operations and tracking.
            </div>
          </div>

          {/* Column 3: Codju Brand Channels & Leadership */}
          <div style={{ gridColumn: 'span 12' }} className="footer-dir-col">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#60a5fa' }} />
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Codju Channels & Team
              </span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {brandChannels.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link-row"
                  >
                    <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{item.title}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="footer-badge-tag">{item.badge}</span>
                      <ArrowUpRight size={12} className="footer-arrow-icon" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tier 3: Bottom Bar (Copyright & Back to Top) */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} Bhavishya Singla • Built during internship at Codju Technologies
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: 'var(--radius-sm)',
              padding: '7px 16px',
              color: '#cbd5e1',
              fontSize: '12.5px',
              fontWeight: 700,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = '#cbd5e1';
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-social-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: var(--radius-sm);
          color: #cbd5e1;
          font-size: 12.5px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .footer-social-chip:hover {
          background-color: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }
        .footer-link-row {
          display: flex;
          align-items: center;
          justifyContent: space-between;
          padding: 8px 10px;
          border-radius: 6px;
          text-decoration: none;
          font-size: 13px;
          transition: all 0.15s ease;
        }
        .footer-link-row:hover {
          background-color: rgba(255, 255, 255, 0.04);
        }
        .footer-link-row:hover .footer-arrow-icon {
          color: #ffffff;
          transform: translate(1px, -1px);
        }
        .footer-arrow-icon {
          color: #64748b;
          transition: all 0.15s ease;
        }
        .footer-badge-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.03em;
          padding: 2px 6px;
          border-radius: 4px;
          background-color: rgba(255, 255, 255, 0.06);
          color: #94a3b8;
        }
        @media (min-width: 900px) {
          .footer-dir-col {
            grid-column: span 4 !important;
          }
        }
        @media (max-width: 899px) and (min-width: 580px) {
          .footer-dir-col {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </footer>
  );
};
