import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, Database } from 'lucide-react';
import type { EvidenceItem } from '../types';

interface LightboxProps {
  item: EvidenceItem | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div 
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(9, 13, 22, 0.88)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        animation: 'fadeIn 0.2s ease-out'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          position: 'relative',
          maxWidth: '1100px',
          width: '100%',
          maxHeight: '92vh',
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc'
        }}>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a' }}>{item.title}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '4px', fontSize: '13px', color: '#64748b' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={13} /> {item.date}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Database size={13} /> Source: {item.source}
              </span>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: '#e2e8f0',
              border: 'none',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#334155',
              transition: 'all 0.2s'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Image Container */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          backgroundColor: '#0b0f19',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}>
          <img 
            src={item.src} 
            alt={item.title} 
            style={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }} 
          />
        </div>

        {/* Footer Caption */}
        <div style={{
          padding: '16px 24px',
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          <p style={{ fontSize: '14px', color: '#334155', lineHeight: 1.5, margin: 0 }}>
            {item.caption}
          </p>
          {item.liveUrl && (
            <a 
              href={item.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
              style={{ flexShrink: 0 }}
            >
              Open Live <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
