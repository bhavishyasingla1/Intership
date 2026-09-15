import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Overview', href: '#glance' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Projects', href: '#flagship' },
    { label: 'Distribution', href: '#distribution' },
    { label: 'Metrics', href: '#numbers' },
    { label: 'Automation', href: '#ai-automation' },
    { label: 'About', href: '#about' }
  ];

  const externalLinks = [
    { label: 'Codju.com', href: 'https://codju.com' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bhavishyasingla1/' },
    { label: 'X / Twitter', href: 'https://x.com/Bhavishyas_1' },
    { label: 'Instagram', href: 'https://www.instagram.com/bhavishyasingla1/' },
    { label: 'YouTube', href: 'https://www.youtube.com/@bhavishyasingla1' },
    { label: 'say@hibhavishya.in', href: 'mailto:say@hibhavishya.in' }
  ];

  return (
    <footer
      style={{
        backgroundColor: '#090d16',
        color: '#94a3b8',
        paddingTop: '48px',
        paddingBottom: '40px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '20px'
          }}
        >
          {/* Identity */}
          <div>
            <div
              style={{
                fontSize: '18px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.01em',
                marginBottom: '4px'
              }}
            >
              Bhavishya Singla
            </div>
            <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 500 }}>
              Marketing & Systems Intern • Codju Technologies
            </div>
          </div>

          {/* Minimal Dot-Separated Page Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 600
            }}
          >
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  style={{
                    color: '#cbd5e1',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--brand-accent)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#cbd5e1'; }}
                >
                  {link.label}
                </a>
                {idx < navLinks.length - 1 && (
                  <span style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '12px' }}>•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Minimal Dot-Separated External & Contact Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '8px',
              fontSize: '12.5px',
              fontWeight: 550,
              color: '#64748b'
            }}
          >
            {externalLinks.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
                >
                  {link.label}
                </a>
                {idx < externalLinks.length - 1 && (
                  <span style={{ color: 'rgba(255, 255, 255, 0.15)', fontSize: '11px' }}>•</span>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Bottom Line: Copyright & Back to Top */}
          <div
            style={{
              marginTop: '12px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '12px',
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
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-sm)',
                padding: '5px 12px',
                color: '#cbd5e1',
                fontSize: '11.5px',
                fontWeight: 650,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
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
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
