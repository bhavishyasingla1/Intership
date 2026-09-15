import React, { useState } from 'react';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

interface FlagshipDefinition {
  id: string;
  number: string;
  title: string;
  category: string;
  whyContext: string;
  myContribution: string;
  whatExistsNow: string;
  status: string;
  isInternal: boolean;
  liveUrl?: string;
  imageSrc?: string;
  problem: string;
  whatIDid: string[];
  learning: string;
  tools: string[];
}

const flagshipData: FlagshipDefinition[] = [
  // 01 Codju Website & Web Experiences
  {
    id: 'codju-website',
    number: '01',
    title: 'Codju Website & Web Experiences',
    category: 'Product / Web Architecture',
    whyContext: "The main website needed to evolve with Codju's expanding content, offerings and campaigns.",
    myContribution: 'Revamped and expanded the main Codju website across structure, content, resources, blog visual system, and supporting functionality.',
    whatExistsNow: 'Updated and expanded web experience deployed at codju.com with resource hubs, blog visual system, and interactive navigation.',
    status: 'DELIVERED',
    isInternal: false,
    liveUrl: 'https://codju.com',
    imageSrc: './pics/codju.com.png',
    problem: 'As Codju expanded AICT curriculums and sample books, the website needed a clear architectural structure to present products to school leadership while establishing institutional credibility.',
    whatIDid: [
      'Restructured website architecture into clean product pillars: Products, Books, Platform, and Training.',
      'Designed responsive modular sections highlighting NEP 2020 alignment and CBSE circular guidelines.',
      'Created clear action funnels for school leadership ("Schedule Demo", "Explore Curriculum").',
      'Developed an approachable blog hero illustration system using Codju characters for editorial consistency.',
      'Embedded the interactive CUDO assistant for immediate visitor inquiry handling.'
    ],
    learning: 'Web design for school leaders requires clarity, curriculum compliance, and consistent visual storytelling over arbitrary decoration.',
    tools: ['HTML5', 'Modern CSS', 'Responsive Grid', 'Component Architecture', 'Chatbot Integration', 'Visual Design']
  },

  // 02 WhatsApp Marketing Operations Hub
  {
    id: 'whatsapp-hub',
    number: '02',
    title: 'WhatsApp Marketing Operations Hub',
    category: 'Internal Marketing System',
    whyContext: 'WhatsApp outreach required a more structured way to manage contacts, audiences and broadcasts.',
    myContribution: 'Built an internal marketing operations interface for contacts, audiences and broadcast workflows.',
    whatExistsNow: 'An internal marketing operations system handling contacts, audiences, broadcasts, and campaigns.',
    status: 'BUILT',
    isInternal: true,
    liveUrl: 'https://whatsapp-dashboard.codju-tech25.workers.dev/',
    imageSrc: './pics/whatsapp.png',
    problem: 'Managing outbound school outreach through scattered spreadsheets and individual devices caused fragmented tracking and lacked audience segmentation.',
    whatIDid: [
      'Architected an internal operations interface for contact list organization and tag-based audience segmentation.',
      'Connected the Meta WhatsApp Cloud API for authenticated messaging workflows.',
      'Established broadcast campaign workflows for workshops and curriculum updates.',
      'Trained team members on list hygiene and compliance standards.'
    ],
    learning: 'Internal tools only succeed if they eliminate friction for the people who operate them daily.',
    tools: ['Meta WhatsApp Cloud API', 'Audience Segmentation', 'Broadcast Workflows', 'Internal Operations']
  },

  // 03 Content Operations Dashboard
  {
    id: 'content-operations',
    number: '03',
    title: 'Content Operations Dashboard',
    category: 'Workflow Infrastructure',
    whyContext: 'Content planning needed structure across social and written content.',
    myContribution: 'Built a centralized workspace for planning, organizing and tracking content through publishing stages.',
    whatExistsNow: 'A centralized internal workspace structuring the entire content lifecycle across social posts, blogs, and newsletters.',
    status: 'BUILT',
    isInternal: true,
    liveUrl: 'https://codju-content.bhavishyasingla2005.workers.dev/',
    imageSrc: './pics/content.png',
    problem: 'Balancing social posts, educational newsletters, and SEO blog articles across multiple platforms without a single source of truth created review delays and irregular publishing rhythms.',
    whatIDid: [
      'Designed a unified content production pipeline across four stages: Planning → Draft → Ready → Published.',
      'Deployed serverless state synchronization on Cloudflare Workers for collaborative status updates.',
      'Integrated cross-platform scheduling cues aligned with educational calendar events.',
      'Standardized asset attachment guidelines for carousels, blog hero images, and newsletters.'
    ],
    learning: 'The value of a content operations system is predictability and consistent cadence, not arbitrary content volume.',
    tools: ['Cloudflare Workers', 'Workflow Design', 'Multi-channel Calendar', 'State Management']
  },

  // 04 TeachBoost.in Platform Build
  {
    id: 'teachboost',
    number: '04',
    title: 'TeachBoost.in',
    category: 'Educator Enablement Platform',
    whyContext: 'Built the website experience for TeachBoost on top of the existing project.',
    myContribution: 'Developed the web experience with AI-assisted workflows and collaboration from the team.',
    whatExistsNow: 'A standalone educator enablement web platform at teachboost.in supporting teacher workshops.',
    status: 'LAUNCHED',
    isInternal: false,
    liveUrl: 'https://teachboost.in',
    imageSrc: './pics/teachboost.png',
    problem: 'Educators attending Codju professional development workshops required a dedicated platform to discover module schedules, access pedagogy resources, and verify training credentials.',
    whatIDid: [
      'Built responsive, accessible front-end interfaces for workshop registration and curriculum discovery.',
      'Utilized AI-assisted rapid prototyping workflows with guidance and collaboration from the team.',
      'Structured teacher resource hubs with downloadable classroom activity sheets and lesson frameworks.',
      'Ensured seamless cross-linking with Codju curriculum resources while preserving TeachBoost brand identity.'
    ],
    learning: 'Building on existing foundations requires aligning with established standards while iterating quickly on user experience.',
    tools: ['Responsive Web Development', 'AI-assisted Workflows', 'Component Scaffolding', 'LMS UI/UX']
  },

  // 05 Campaign Landing Pages
  {
    id: 'campaign-landing',
    number: '05',
    title: 'Campaign Landing Pages',
    category: 'Conversion Web Experiences',
    whyContext: 'Campaigns needed focused web experiences rather than sending every audience to the same page.',
    myContribution: 'Designed and built campaign-specific landing experiences combining content, UX, web implementation and visual media.',
    whatExistsNow: 'Targeted campaign landing experiences under the Codju ecosystem combining visual curriculum previews and transparent enrollment funnels.',
    status: 'DELIVERED',
    isInternal: false,
    liveUrl: 'https://summercamp.codju.com',
    imageSrc: './pics/summer camp.png',
    problem: 'Seasonal campaigns like summer camps and specialized workshops require distinct messaging, urgency, and pricing transparency that would clutter the primary institutional homepage.',
    whatIDid: [
      'Engineered standalone conversion architecture for Codju Summer Camp at summercamp.codju.com.',
      'Designed dedicated curriculum modules for AI Creator Camp highlighting hands-on creative projects.',
      'Structured the Computational Thinking landing experience within the broader Codju web ecosystem (codju.com/computational-thinking/).',
      'Integrated registration CTAs and tracking elements for campaign attribution.'
    ],
    learning: 'Campaign landing pages require progressive disclosure: hook with student outcomes, follow with week-by-week curriculum, and remove friction.',
    tools: ['Responsive Web Design', 'Conversion Copywriting', 'Visual Asset Integration', 'CTA Funnels']
  },

  // 06 SEO + Content Strategy
  {
    id: 'seo-search',
    number: '06',
    title: 'SEO + Content Strategy',
    category: 'SEO & Content Architecture',
    whyContext: 'Search data showed that Codju was already discoverable for its own brand, while broader topic discovery represented an opportunity.',
    myContribution: 'Worked on topic-focused content, internal linking, technical SEO, and search-oriented content structure.',
    whatExistsNow: 'An organized organic discovery library connecting educational blogs, guides, case studies, and curriculum intent.',
    status: 'IMPLEMENTED',
    isInternal: false,
    liveUrl: 'https://codju.com/blog',
    imageSrc: './pics/blogs.png',
    problem: 'Early Search Console audits revealed that nearly all organic impressions came from branded queries ("Codju"). High-intent searches for educational computer science curricula had minimal visibility.',
    whatIDid: [
      'AUDIT: Audited Search Console queries, identifying heavy branded search saturation and topic opportunities.',
      'BUILD: Restructured long-form blogs, internal linking, and technical SEO so content became part of the discoverability strategy.',
      'EXPERIMENT: Experimented with structuring useful, source-rich content with AI-assisted discovery in mind, plus external publishing tests.'
    ],
    learning: 'Long-form content became part of the website, content and discoverability strategy, not just a publishing task.',
    tools: ['Google Search Console', 'Topic Modeling', 'Information Architecture', 'Semantic SEO']
  },

  // 07 AI / Hybrid Video Production
  {
    id: 'ai-video-production',
    number: '07',
    title: 'AI / Hybrid Video Production',
    category: 'Creative Experimentation',
    whyContext: 'Promoting new initiatives like Computational Thinking called for creative experimentation beyond standard static posts.',
    myContribution: 'Experimented with combining AI-generated elements, real footage, audio pacing and editing into a promotional video.',
    whatExistsNow: 'A hybrid promotional video workflow merging AI-generated conceptual imagery with real classroom footage for Computational Thinking.',
    status: 'DELIVERED',
    isInternal: false,
    liveUrl: 'https://www.youtube.com/watch?v=dP5Cmo3I1ko',
    problem: 'Explaining abstract conceptual topics like Computational Thinking needed engaging visual storytelling without the multi-week overhead of traditional studio shoots.',
    whatIDid: [
      'Scripted and storyboarded the visual narrative for the Computational Thinking promotional release.',
      'Generated stylized conceptual visual assets using AI image and video synthesis tools.',
      'Composed and edited final sequences combining AI generations with real classroom footage and pacing.',
      'Packaged the final video for multi-channel release across YouTube and campaign channels.'
    ],
    learning: 'Hybrid production allows rapid visual conceptualization while retaining human storytelling and real classroom footage.',
    tools: ['Generative Media', 'Video Sequencing', 'Storyboarding', 'Creative Editing']
  }
];

export interface ShowcaseVideo {
  id: string;
  title: string;
  category: string;
  isShort?: boolean;
}

export const aiVideos: ShowcaseVideo[] = [
  { id: 'dP5Cmo3I1ko', title: 'Computational Thinking (Promotional Video)', category: 'Main Promo' },
  { id: 'AvfB1pGyIFE', title: 'Codju Theme Song (Original Production)', category: 'Theme Song' },
  { id: 'xoCqW-ngJDQ', title: 'Codju Summer Camp (Campaign Promo)', category: 'Camp Video' },
  { id: 'ZMPl3Wapj8E', title: 'Summer Camp (Dynamic Promo Short)', category: 'Camp Short', isShort: true },
  { id: '8ku9aSEXllI', title: "Teacher's Day & AI Experiment (Short)", category: "Teacher's Day", isShort: true },
  { id: 'WSCAGNVV5G0', title: 'Codju Mascot Dancing (Fun Creative Short)', category: 'Mascot Fun', isShort: true }
];

export const FlagshipProjects: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(flagshipData[0].id);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<string>('dP5Cmo3I1ko');
  const [campaignVisual, setCampaignVisual] = useState<'summer-camp' | 'ct-ai'>('summer-camp');

  // Preload and decode all project images in memory so switching tabs is instantaneous
  React.useEffect(() => {
    const imagesToPreload = [
      './pics/codju.com.png',
      './pics/whatsapp.png',
      './pics/content.png',
      './pics/teachboost.png',
      './pics/summer camp.png',
      './pics/ct-ai.png',
      './pics/blogs.png',
      './pics/bhavishya-profile.png'
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      if ('decode' in img) {
        img.decode().catch(() => {});
      }
    });
  }, []);

  const activeProject = flagshipData.find((p) => p.id === activeId) || flagshipData[0];
  const isExpanded = expandedId === activeProject.id;

  const toggleExpand = () => {
    setExpandedId(isExpanded ? null : activeProject.id);
  };

  return (
    <section id="flagship" className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ maxWidth: '720px' }}>
          <div className="section-eyebrow">
            FLAGSHIP BUILDS
          </div>
          <h2 className="section-title">
            What I built.
          </h2>
          <p className="section-subtitle">
            Seven primary systems, websites and experiences across the internship — framed through context, action, output, and evidence.
          </p>
        </div>

        {/* Symmetrical Sub-Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '36px'
          }}
        >
          {flagshipData.map((project) => {
            const isSelected = project.id === activeProject.id;
            return (
              <button
                key={project.id}
                onClick={() => {
                  setActiveId(project.id);
                  setExpandedId(null);
                }}
                style={{
                  padding: '9px 16px',
                  borderRadius: 'var(--radius-md)',
                  border: isSelected ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                  backgroundColor: isSelected ? 'var(--brand-primary-subtle)' : '#ffffff',
                  color: isSelected ? 'var(--brand-primary)' : 'var(--text-secondary)',
                  fontWeight: isSelected ? 750 : 600,
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.15s ease'
                }}
              >
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 750,
                    opacity: isSelected ? 1 : 0.6,
                    color: isSelected ? 'var(--brand-primary)' : 'var(--text-muted)'
                  }}
                >
                  {project.number}
                </span>
                <span>{project.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Showcase Card */}
        <div
          className="card"
          style={{
            padding: '36px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-card)'
          }}
        >
          {/* Header Row with Clear Visual Hierarchy */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '24px',
              marginBottom: '28px'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: 750,
                  color: 'var(--brand-primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '6px'
                }}
              >
                PROJECT {activeProject.number} • {activeProject.category}
              </div>
              <h3
                style={{
                  fontSize: 'clamp(24px, 2.8vw, 32px)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  margin: 0,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2
                }}
              >
                {activeProject.title}
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 750,
                  backgroundColor: activeProject.isInternal ? 'rgba(100, 22, 184, 0.08)' : 'rgba(88, 204, 2, 0.1)',
                  color: activeProject.isInternal ? 'var(--brand-primary)' : 'var(--brand-accent)',
                  padding: '5px 12px',
                  borderRadius: 'var(--radius-sm)',
                  letterSpacing: '0.04em'
                }}
              >
                {activeProject.isInternal ? 'INTERNAL SYSTEM' : `STATUS: ${activeProject.status}`}
              </span>

              {activeProject.id === 'campaign-landing' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <a
                    href="https://summercamp.codju.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                    style={{ gap: '6px' }}
                  >
                    <span>VIEW SUMMER CAMP</span>
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href="https://codju.com/computational-thinking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                    style={{ gap: '6px' }}
                  >
                    <span>VIEW COMPUTATIONAL THINKING</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              ) : activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-secondary"
                  style={{ gap: '6px' }}
                >
                  <span>
                    {activeProject.id === 'ai-video-production'
                      ? 'WATCH ON YOUTUBE'
                      : activeProject.isInternal
                      ? 'OPEN DASHBOARD'
                      : 'VIEW SITE'}
                  </span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

          {/* Symmetrical 2-Column Scannable Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '36px',
              alignItems: 'start'
            }}
          >
            {/* Left Column: The 4 Founder Questions (Context → Action → Output → Evidence) */}
            <div style={{ gridColumn: 'span 12' }} className="case-study-content-col">
              {/* Question 1: WHY (CONTEXT) */}
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 750,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '6px'
                  }}
                >
                  01 • WHY THE WORK EXISTED (CONTEXT)
                </span>
                <p
                  style={{
                    fontSize: '16px',
                    color: 'var(--text-primary)',
                    fontWeight: 700,
                    lineHeight: 1.5,
                    margin: 0
                  }}
                >
                  "{activeProject.whyContext}"
                </p>
              </div>

              {/* Question 2: WHAT I DID (ACTION) */}
              <div style={{ marginBottom: '20px' }}>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 750,
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '6px'
                  }}
                >
                  02 • MY CONTRIBUTION (ACTION)
                </span>
                <p
                  style={{
                    fontSize: '14.5px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55,
                    margin: 0
                  }}
                >
                  {activeProject.myContribution}
                </p>
              </div>

              {/* Project-Specific Editorial Workflow / Context Box */}
              {activeProject.id === 'codju-website' && (
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 18px',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      CONTENT DESIGN • BLOG HERO SYSTEM
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--brand-primary)' }}>Visual Identity</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                    Built a consistent visual language for Codju's long-form content using brand characters and an approachable educational style (adapting Duolingo-inspired character storytelling into Codju's own brand language).
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    <div style={{ backgroundColor: '#ffffff', border: '1px dashed var(--border-subtle)', borderRadius: '6px', padding: '12px 8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-primary)' }}>AI & Pedagogy</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px' }}>Character Storyframe 01</div>
                    </div>
                    <div style={{ backgroundColor: '#ffffff', border: '1px dashed var(--border-subtle)', borderRadius: '6px', padding: '12px 8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-primary)' }}>Computational Thinking</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px' }}>Character Storyframe 02</div>
                    </div>
                    <div style={{ backgroundColor: '#ffffff', border: '1px dashed var(--border-subtle)', borderRadius: '6px', padding: '12px 8px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-primary)' }}>Skill Curriculums</div>
                      <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px' }}>Character Storyframe 03</div>
                    </div>
                  </div>
                </div>
              )}

              {activeProject.id === 'whatsapp-hub' && (
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    marginBottom: '20px'
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                    WHAT IT HANDLES
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Contacts', 'Audiences', 'Broadcasts', 'Campaigns'].map((item) => (
                      <span key={item} style={{ fontSize: '12px', fontWeight: 700, color: 'var(--brand-primary)', backgroundColor: 'var(--brand-primary-subtle)', padding: '4px 10px', borderRadius: '4px' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeProject.id === 'content-operations' && (
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    marginBottom: '20px'
                  }}
                >
                  <span style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px' }}>
                    CONTENT WORKFLOW
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', fontSize: '12px', fontWeight: 700 }}>
                    <span style={{ color: 'var(--text-primary)', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', padding: '3px 8px', borderRadius: '4px' }}>Planning</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--text-primary)', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', padding: '3px 8px', borderRadius: '4px' }}>Draft</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--text-primary)', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', padding: '3px 8px', borderRadius: '4px' }}>Ready</span>
                    <span style={{ color: 'var(--brand-accent)', backgroundColor: 'rgba(88, 204, 2, 0.1)', padding: '3px 8px', borderRadius: '4px' }}>Published</span>
                  </div>
                </div>
              )}

              {activeProject.id === 'campaign-landing' && (
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 18px',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      CAMPAIGN EXPERIENCES & TOUCHPOINTS
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--brand-primary)' }}>Live Conversion Pages</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '0 0 12px 0' }}>
                    Engineered dedicated standalone conversion experiences for Codju's summer programs and pedagogy initiatives:
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '10px' }}>
                    <a
                      href="https://summercamp.codju.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--brand-primary)';
                        e.currentTarget.style.color = 'var(--brand-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Codju Summer Camp</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>summercamp.codju.com</span>
                      </div>
                      <ExternalLink size={13} color="var(--brand-primary)" />
                    </a>

                    <a
                      href="https://codju.com/computational-thinking/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 14px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-sm)',
                        textDecoration: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '12.5px',
                        fontWeight: 700,
                        transition: 'all 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--brand-primary)';
                        e.currentTarget.style.color = 'var(--brand-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>Computational Thinking</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>codju.com/computational-thinking</span>
                      </div>
                      <ExternalLink size={13} color="var(--brand-primary)" />
                    </a>
                  </div>
                </div>
              )}

              {activeProject.id === 'seo-search' && (
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 18px',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      CONTENT & DISCOVERY RELATIONSHIP
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--brand-primary)' }}>SEO Strategy</span>
                  </div>
                  {/* Sequence: TOPIC → CONTENT → SEARCH → DISCOVERY */}
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', fontSize: '11.5px', fontWeight: 750, marginBottom: '12px' }}>
                    <span style={{ color: 'var(--text-primary)', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', padding: '3px 8px', borderRadius: '4px' }}>TOPIC</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--brand-primary)', backgroundColor: 'var(--brand-primary-subtle)', padding: '3px 8px', borderRadius: '4px' }}>CONTENT</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--brand-primary)', backgroundColor: 'var(--brand-primary-subtle)', padding: '3px 8px', borderRadius: '4px' }}>SEARCH</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--brand-accent)', backgroundColor: 'rgba(88, 204, 2, 0.1)', padding: '3px 8px', borderRadius: '4px' }}>DISCOVERY</span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '12.5px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                    <span>• <strong style={{ color: 'var(--text-primary)' }}>Blogs</strong> (Curriculum insights)</span>
                    <span>• <strong style={{ color: 'var(--text-primary)' }}>Guides</strong> (Computational thinking)</span>
                    <span>• <strong style={{ color: 'var(--text-primary)' }}>Case studies</strong> (Pedagogy & outcomes)</span>
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', fontStyle: 'italic', borderTop: '1px solid var(--border-subtle)', paddingTop: '8px', marginBottom: '8px' }}>
                    "Long-form content became part of the website, content and discoverability strategy."
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '11px', color: 'var(--text-muted)' }}>
                    <div>• <strong>AI/LLM Search:</strong> Structuring source-rich content for modern discovery.</div>
                    <div>• <strong>Backlinks:</strong> External publishing experiment for organic authority.</div>
                  </div>
                </div>
              )}

              {activeProject.id === 'ai-video-production' && (
                <div
                  style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 18px',
                    marginBottom: '20px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      PRODUCTION WORKFLOW
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--brand-primary)' }}>Hybrid Video Production</span>
                  </div>
                  {/* Sequence: IDEA → AI GENERATION → REAL FOOTAGE → EDITING → FINAL VIDEO */}
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '6px', fontSize: '11.5px', fontWeight: 750, marginBottom: '12px' }}>
                    <span style={{ color: 'var(--text-primary)', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', padding: '3px 8px', borderRadius: '4px' }}>IDEA</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--brand-primary)', backgroundColor: 'var(--brand-primary-subtle)', padding: '3px 8px', borderRadius: '4px' }}>AI GENERATION</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--brand-primary)', backgroundColor: 'var(--brand-primary-subtle)', padding: '3px 8px', borderRadius: '4px' }}>REAL FOOTAGE</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--text-primary)', backgroundColor: '#ffffff', border: '1px solid var(--border-subtle)', padding: '3px 8px', borderRadius: '4px' }}>EDITING</span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--brand-accent)', backgroundColor: 'rgba(88, 204, 2, 0.1)', padding: '3px 8px', borderRadius: '4px' }}>FINAL VIDEO</span>
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                    "Experimented with combining AI-generated elements and real footage into a promotional piece for Computational Thinking."
                  </div>
                </div>
              )}

              {/* Question 3 & 4: WHAT EXISTS NOW (OUTPUT) & RESULT (EVIDENCE) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    padding: '14px 16px',
                    backgroundColor: '#f8fafc',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    03 • WHAT EXISTS NOW (OUTPUT)
                  </div>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-primary)', fontWeight: 650, lineHeight: 1.45 }}>
                    {activeProject.whatExistsNow}
                  </div>
                </div>

                <div
                  style={{
                    padding: '14px 16px',
                    backgroundColor: '#f8fafc',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ fontSize: '11px', fontWeight: 750, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                    04 • EVIDENCE & STATUS
                  </div>
                  <div style={{ fontSize: '13.5px', color: 'var(--text-primary)', fontWeight: 650, lineHeight: 1.45 }}>
                    Status: {activeProject.status} • {activeProject.isInternal ? 'Internal system record' : 'Live production site'}
                  </div>
                </div>
              </div>

              {/* Expand Toggle for Deep Case Study */}
              <button
                onClick={toggleExpand}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--brand-primary)',
                  fontWeight: 750,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <span>{isExpanded ? 'Hide case study details' : 'Read full case study details'}</span>
                {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {/* Symmetrical 2-Column Expanded Case Study Details */}
              {isExpanded && (
                <div
                  style={{
                    marginTop: '24px',
                    paddingTop: '24px',
                    borderTop: '1px dashed var(--border-subtle)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '20px'
                  }}
                >
                  <div style={{ gridColumn: 'span 12' }} className="deep-col-half">
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 750,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '6px'
                      }}
                    >
                      THE PROBLEM
                    </span>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {activeProject.problem}
                    </p>
                  </div>

                  <div style={{ gridColumn: 'span 12' }} className="deep-col-half">
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 750,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '6px'
                      }}
                    >
                      KEY LEARNING
                    </span>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                      {activeProject.learning}
                    </p>
                  </div>

                  <div style={{ gridColumn: 'span 12' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 750,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      DETAILED STEPS
                    </span>
                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                      {activeProject.whatIDid.map((step, sIdx) => (
                        <li key={sIdx} style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '5px', lineHeight: 1.5 }}>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ gridColumn: 'span 12' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 750,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '8px'
                      }}
                    >
                      TOOLS & TECHNOLOGIES
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {activeProject.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '11.5px',
                            fontWeight: 650,
                            backgroundColor: 'var(--bg-subtle)',
                            color: 'var(--text-secondary)',
                            padding: '4px 9px',
                            borderRadius: 'var(--radius-sm)'
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Visual Evidence (Embedded Video or Screenshot) */}
            <div style={{ gridColumn: 'span 12' }} className="case-study-visual-col">
              {activeProject.id === 'ai-video-production' ? (
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow-card)'
                  }}
                >
                  {/* 16:9 YouTube Video Embed */}
                  <div style={{ position: 'relative', paddingTop: '56.25%', width: '100%', backgroundColor: '#090d16' }}>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${selectedVideoId}?rel=0`}
                      title="Codju Video Production"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                      }}
                    />
                  </div>

                  {/* Video Selector & Meta Bar */}
                  <div style={{ padding: '16px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--brand-primary)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>
                        PRODUCED VIDEOS & CREATIVE EXPERIMENTS ({aiVideos.length})
                      </span>
                      <a
                        href={
                          aiVideos.find((v) => v.id === selectedVideoId)?.isShort
                            ? `https://www.youtube.com/shorts/${selectedVideoId}`
                            : `https://www.youtube.com/watch?v=${selectedVideoId}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '11px',
                          fontWeight: 700,
                          color: 'var(--text-secondary)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          textDecoration: 'none'
                        }}
                      >
                        <span>Open on YouTube</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {aiVideos.map((vid) => {
                        const isSelected = vid.id === selectedVideoId;
                        return (
                          <button
                            key={vid.id}
                            onClick={() => setSelectedVideoId(vid.id)}
                            style={{
                              padding: '6px 11px',
                              borderRadius: 'var(--radius-sm)',
                              border: isSelected ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                              backgroundColor: isSelected ? 'var(--brand-primary-subtle)' : '#f8fafc',
                              color: isSelected ? 'var(--brand-primary)' : 'var(--text-primary)',
                              fontSize: '11.5px',
                              fontWeight: isSelected ? 750 : 600,
                              cursor: 'pointer',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              transition: 'all 0.15s ease'
                            }}
                          >
                            <span>{vid.category}</span>
                            {vid.isShort && (
                              <span style={{ fontSize: '9px', opacity: 0.7, textTransform: 'uppercase' }}>Short</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : activeProject.id === 'campaign-landing' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <ProjectVisualPlaceholder
                    key={`campaign-${campaignVisual}`}
                    imageSrc={campaignVisual === 'summer-camp' ? './pics/summer camp.png' : './pics/ct-ai.png'}
                    projectName={campaignVisual === 'summer-camp' ? 'Codju Summer Camp Landing Page' : 'Computational Thinking Landing Experience'}
                    label="CAMPAIGN VISUAL EVIDENCE"
                    optionalNote={campaignVisual === 'summer-camp' ? 'summercamp.codju.com capture' : 'codju.com/computational-thinking capture'}
                    aspectRatio="16/11"
                    minHeight="280px"
                  />
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    <button
                      onClick={() => setCampaignVisual('summer-camp')}
                      style={{
                        padding: '5px 12px',
                        fontSize: '11.5px',
                        fontWeight: campaignVisual === 'summer-camp' ? 750 : 600,
                        borderRadius: 'var(--radius-sm)',
                        border: campaignVisual === 'summer-camp' ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                        backgroundColor: campaignVisual === 'summer-camp' ? 'var(--brand-primary-subtle)' : '#ffffff',
                        color: campaignVisual === 'summer-camp' ? 'var(--brand-primary)' : 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}
                    >
                      Summer Camp Landing
                    </button>
                    <button
                      onClick={() => setCampaignVisual('ct-ai')}
                      style={{
                        padding: '5px 12px',
                        fontSize: '11.5px',
                        fontWeight: campaignVisual === 'ct-ai' ? 750 : 600,
                        borderRadius: 'var(--radius-sm)',
                        border: campaignVisual === 'ct-ai' ? '1px solid var(--brand-primary)' : '1px solid var(--border-subtle)',
                        backgroundColor: campaignVisual === 'ct-ai' ? 'var(--brand-primary-subtle)' : '#ffffff',
                        color: campaignVisual === 'ct-ai' ? 'var(--brand-primary)' : 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}
                    >
                      Computational Thinking Landing
                    </button>
                  </div>
                </div>
              ) : (
                <ProjectVisualPlaceholder
                  key={activeProject.id}
                  imageSrc={activeProject.imageSrc}
                  projectName={activeProject.title}
                  label="PRODUCTION EVIDENCE"
                  optionalNote="Verified screenshot from live build"
                  aspectRatio="16/11"
                  minHeight="280px"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .case-study-content-col { grid-column: span 7 !important; }
          .case-study-visual-col { grid-column: span 5 !important; }
          .deep-col-half { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
};
