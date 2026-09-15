import React from 'react';
import { Image, User, Users } from 'lucide-react';

export interface ProjectVisualPlaceholderProps {
  projectName: string;
  label?: string;
  optionalNote?: string;
  aspectRatio?: string;
  minHeight?: string;
  className?: string;
  imageSrc?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const ProjectVisualPlaceholder: React.FC<ProjectVisualPlaceholderProps> = ({
  projectName,
  label = 'PROJECT VISUAL',
  optionalNote = 'Evidence will be added later',
  aspectRatio = '16/10',
  minHeight = '240px',
  className = '',
  imageSrc,
  onClick,
  style = {}
}) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setHasError(false);
  }, [imageSrc]);

  if (imageSrc && !hasError) {
    return (
      <div
        className={`project-visual-placeholder ${className}`}
        onClick={onClick}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio,
          minHeight,
          backgroundColor: '#0f172a',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          cursor: onClick ? 'pointer' : 'default',
          boxShadow: 'var(--shadow-card)',
          ...style
        }}
      >
        <img
          key={imageSrc}
          src={imageSrc}
          alt={projectName}
          loading="eager"
          decoding="async"
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />

        {/* Subtle Bottom Meta Banner */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '10px 16px',
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pointerEvents: 'none'
          }}
        >
          <div>
            <div style={{ fontSize: '10px', fontWeight: 750, color: 'var(--brand-accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {label}
            </div>
            <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
              {projectName}
            </div>
          </div>
          {optionalNote && (
            <div style={{ fontSize: '11px', color: '#cbd5e1', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
              {optionalNote}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`project-visual-placeholder ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        minHeight,
        backgroundColor: '#f8fafc',
        border: '1px solid #cbd5e1',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        textAlign: 'center',
        overflow: 'hidden',
        ...style
      }}
    >
      {/* Abstract subtle boundary guides to give an architectural, deliberate look */}
      <div
        style={{
          position: 'absolute',
          inset: '8px',
          border: '1px dashed #e2e8f0',
          borderRadius: '8px',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          backgroundColor: '#f1f5f9',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#64748b',
          marginBottom: '12px'
        }}
      >
        <Image size={18} strokeWidth={1.8} />
      </div>

      <div
        style={{
          fontSize: '12px',
          fontWeight: 700,
          color: '#334155',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '4px'
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: '14px',
          fontWeight: 600,
          color: '#0f172a',
          marginBottom: '4px',
          maxWidth: '85%'
        }}
      >
        {projectName}
      </div>

      <div
        style={{
          fontSize: '12px',
          color: '#64748b',
          fontWeight: 500
        }}
      >
        {optionalNote}
      </div>
    </div>
  );
};

export interface PersonalPhotoPlaceholderProps {
  label?: string;
  sublabel?: string;
  aspectRatio?: string;
  minHeight?: string;
  imageSrc?: string;
}

export const PersonalPhotoPlaceholder: React.FC<PersonalPhotoPlaceholderProps> = ({
  label = 'BHAVISHYA SINGLA',
  sublabel = 'Personal photo to be added',
  aspectRatio = '4/5',
  minHeight = '320px',
  imageSrc
}) => {
  const [hasError, setHasError] = React.useState(false);

  if (imageSrc && !hasError) {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio,
          minHeight,
          backgroundColor: '#0f172a',
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          boxShadow: 'var(--shadow-card)'
        }}
      >
        <img
          src={imageSrc}
          alt={label}
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px 20px',
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0) 100%)',
            color: '#ffffff'
          }}
        >
          <div style={{ fontSize: '15px', fontWeight: 800, letterSpacing: '-0.01em' }}>
            {label}
          </div>
          <div style={{ fontSize: '12px', color: '#cbd5e1', marginTop: '2px' }}>
            {sublabel}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        minHeight,
        backgroundColor: '#f8fafc',
        border: '1px solid #cbd5e1',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '28px',
        textAlign: 'center',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '8px',
          border: '1px dashed #e2e8f0',
          borderRadius: '12px',
          pointerEvents: 'none'
        }}
      />

      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#f1f5f9',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#64748b',
          marginBottom: '16px'
        }}
      >
        <User size={28} strokeWidth={1.8} />
      </div>

      <div
        style={{
          fontSize: '13px',
          fontWeight: 700,
          color: '#0f172a',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          marginBottom: '4px'
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: '12px',
          color: '#64748b',
          fontWeight: 500
        }}
      >
        {sublabel}
      </div>
    </div>
  );
};

export interface TeamPhotoPlaceholderProps {
  title: string;
  note?: string;
  aspectRatio?: string;
}

export const TeamPhotoPlaceholder: React.FC<TeamPhotoPlaceholderProps> = ({
  title,
  note = 'Photo to be added',
  aspectRatio = '16/10'
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#64748b',
          marginBottom: '8px'
        }}
      >
        <Users size={16} strokeWidth={1.8} />
      </div>
      <div style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{title}</div>
      <div style={{ fontSize: '11px', color: '#64748b' }}>{note}</div>
    </div>
  );
};
