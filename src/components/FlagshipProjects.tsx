import React, { useState } from 'react';
import { ProjectVisualPlaceholder } from './ProjectVisualPlaceholder';
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

interface FlagshipHighlight {
  label: string;
  text: string;
}

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
  highlights: FlagshipHighlight[];
}

const flagshipData: FlagshipDefinition[] = [
  // 01 Codju Website & Web Experiences
  {
    id: 'codju-website',
    number: '01',
    title: 'Codju Web Platform',
    category: 'Web Architecture',
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
    tools: ['HTML5', 'Modern CSS', 'Responsive Grid', 'Component Architecture', 'Chatbot Integration', 'Visual Design'],
    highlights: [
      { label: 'Product Architecture', text: 'Restructured into clean pillars for Products, Books, Platform, and Training.' },
      { label: 'Curriculum Compliance', text: 'Modular sections highlighting NEP 2020 alignment and CBSE circular guidelines.' },
      { label: 'Editorial Brand System', text: 'Character illustration storytelling for long-form blog heroes and curriculum guides.' },
      { label: 'Conversational Layer', text: 'Embedded CUDO interactive assistant for immediate school inquiry handling.' }
    ]
  },

  // 02 WhatsApp Marketing Operations Hub
  {
    id: 'whatsapp-hub',
    number: '02',
    title: 'WhatsApp Operations Hub',
    category: 'Internal Marketing Tool',
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
    tools: ['Meta WhatsApp Cloud API', 'Audience Segmentation', 'Broadcast Workflows', 'Internal Operations'],
    highlights: [
      { label: 'Cloud API Integration', text: 'Connected Meta WhatsApp Cloud API for authenticated school messaging.' },
      { label: 'Audience Segmentation', text: 'Contact list organization with tag-based filters for educators and school leads.' },
      { label: 'Broadcast Workflows', text: 'Structured outbound campaign flows for workshops, camps, and curriculum updates.' },
      { label: 'Operational Hub', text: 'Replaced scattered personal spreadsheets with a centralized auditable workspace.' }
    ]
  },

  // 03 Content Operations Dashboard
  {
    id: 'content-operations',
    number: '03',
    title: 'Content Operations Hub',
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
    tools: ['Cloudflare Workers', 'Workflow Design', 'Multi-channel Calendar', 'State Management'],
    highlights: [
      { label: 'Production Pipeline', text: 'Designed unified 4-stage Kanban workflow: Planning → Draft → Ready → Published.' },
      { label: 'Serverless Backend', text: 'Deployed collaborative state synchronization on Cloudflare Workers.' },
      { label: 'Editorial Calendar', text: 'Aligned publication schedules across LinkedIn, YouTube, blogs, and newsletters.' },
      { label: 'Asset Checklists', text: 'Standardized guidelines for carousels, blog graphics, and pedagogical copy.' }
    ]
  },

  // 04 TeachBoost.in Platform Build
  {
    id: 'teachboost',
    number: '04',
    title: 'TeachBoost.in Web Portal',
    category: 'Educator Platform',
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
    tools: ['Responsive Web Development', 'AI-assisted Workflows', 'Component Scaffolding', 'LMS UI/UX'],
    highlights: [
      { label: 'Educator Portal', text: 'Built responsive workshop registration, module schedules, and curriculum discovery.' },
      { label: 'AI Scaffolding', text: 'Utilized rapid AI coding workflows for component scaffolding and layout iterations.' },
      { label: 'Resource Hub', text: 'Created downloadable lesson plans, classroom activity sheets, and pedagogy frameworks.' },
      { label: 'Brand Cohesion', text: 'Preserved standalone TeachBoost branding while connecting with Codju curriculums.' }
    ]
  },

  // 05 Campaign Landing Pages
  {
    id: 'campaign-landing',
    number: '05',
    title: 'Campaign Landing Funnels',
    category: 'Conversion Pages',
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
    tools: ['Responsive Web Design', 'Conversion Copywriting', 'Visual Asset Integration', 'CTA Funnels'],
    highlights: [
      { label: 'Summer Camp Funnel', text: 'High-converting registration flow with transparent pricing at summercamp.codju.com.' },
      { label: 'Computational Thinking', text: 'Dedicated pedagogy landing experience at codju.com/computational-thinking.' },
      { label: 'Curriculum Previews', text: 'Designed weekly project breakdowns and creative coding showcases for parents.' },
      { label: 'Dual Funnels', text: 'Engineered fast-path enrollment buttons and curriculum syllabus downloads.' }
    ]
  },

  // 06 SEO + Content Strategy
  {
    id: 'seo-search',
    number: '06',
    title: 'SEO & Content Engine',
    category: 'Search Architecture',
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
    tools: ['Google Search Console', 'Topic Modeling', 'Information Architecture', 'Semantic SEO'],
    highlights: [
      { label: 'Search Console Audit', text: 'Audited queries, identifying high-intent non-branded topic opportunities.' },
      { label: 'Semantic Clusters', text: 'Restructured educational blogs and guides with topic clusters and internal linking.' },
      { label: 'AI/LLM Retrieval', text: 'Structured source-rich, cited content optimized for modern AI search engines.' },
      { label: 'Funnel Integration', text: 'Connected informational search readers directly to curriculum demo requests.' }
    ]
  },

  // 07 AI / Hybrid Video Production
  {
    id: 'ai-video-production',
    number: '07',
    title: 'AI Video Production',
    category: 'Creative Media',
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
    tools: ['Generative Media', 'Video Sequencing', 'Storyboarding', 'Creative Editing'],
    highlights: [
      { label: 'Hybrid Production', text: 'Merged AI-generated conceptual visual elements with authentic classroom footage.' },
      { label: 'Paced Editing', text: 'Scripted and edited multi-track pacing for the Computational Thinking promotional release.' },
      { label: 'Creative Shorts', text: 'Produced dynamic animated Shorts featuring the Codju mascot and camp previews.' },
      { label: 'Audio Branding', text: 'Composed and produced the original Codju theme song for brand identity.' }
    ]
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
        <div className="section-header" style={{ maxWidth: '720px', margin: '0 auto 40px auto', textAlign: 'center' }}>
          <div className="section-eyebrow" style={{ margin: '0 auto 12px auto' }}>
            PROJECTS
          </div>
          <h2 className="section-title">
            What I built.
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Seven core systems, web platforms, and operational tools built at Codju.
          </p>
        </div>

        {/* Symmetrical Sub-Navigation Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
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
            padding: '24px 28px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.05)'
          }}
        >
          {/* Header Row with Clear Visual Hierarchy */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '16px',
              marginBottom: '22px'
            }}
          >
            <div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: 'var(--brand-primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '4px'
                }}
              >
                PROJECT {activeProject.number} • {activeProject.category}
              </div>
              <h3
                style={{
                  fontSize: 'clamp(20px, 2.2vw, 25px)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  margin: 0,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.25
                }}
              >
                {activeProject.title}
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  fontSize: '11.5px',
                  fontWeight: 750,
                  backgroundColor: activeProject.isInternal ? 'rgba(100, 22, 184, 0.08)' : 'rgba(88, 204, 2, 0.1)',
                  color: activeProject.isInternal ? 'var(--brand-primary)' : 'var(--brand-accent)',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)',
                  letterSpacing: '0.04em'
                }}
              >
                {activeProject.isInternal ? 'INTERNAL SYSTEM' : `STATUS: ${activeProject.status}`}
              </span>

              {activeProject.id === 'campaign-landing' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                  <a
                    href="https://summercamp.codju.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                    style={{ gap: '5px', fontSize: '11.5px', padding: '5px 12px' }}
                  >
                    <span>SUMMER CAMP</span>
                    <ExternalLink size={11} />
                  </a>
                  <a
                    href="https://codju.com/computational-thinking/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-secondary"
                    style={{ gap: '5px', fontSize: '11.5px', padding: '5px 12px' }}
                  >
                    <span>COMPUTATIONAL THINKING</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              ) : activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-secondary"
                  style={{ gap: '5px', fontSize: '11.5px', padding: '5px 12px' }}
                >
                  <span>
                    {activeProject.id === 'ai-video-production'
                      ? 'YOUTUBE VIDEO'
                      : activeProject.isInternal
                      ? 'OPEN DASHBOARD'
                      : 'VIEW SITE'}
                  </span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          </div>

          {/* Symmetrical 2-Column Scannable Layout */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '28px',
              alignItems: 'start'
            }}
          >
            {/* Left Column: Focused Executive Summary & Highlights */}
            <div style={{ gridColumn: 'span 12' }} className="case-study-content-col">
              {/* Context Summary */}
              <p
                style={{
                  fontSize: '13.5px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.55,
                  margin: '0 0 16px 0'
                }}
              >
                {activeProject.whyContext} {activeProject.myContribution}
              </p>

              {/* Key Deliverables & Architecture */}
              <div style={{ marginBottom: '16px' }}>
                <div
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    color: 'var(--brand-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '8px'
                  }}
                >
                  KEY HIGHLIGHTS & ARCHITECTURE
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {activeProject.highlights.map((hl, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: '12.5px',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.45,
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '6px'
                      }}
                    >
                      <span style={{ color: 'var(--brand-accent)', fontWeight: 800, fontSize: '14px', lineHeight: 1 }}>•</span>
                      <div>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 750 }}>{hl.label}: </strong>
                        <span>{hl.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact Output Banner */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '9px 12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.4,
                  marginBottom: '16px'
                }}
              >
                <CheckCircle2 size={15} color="var(--brand-accent)" style={{ flexShrink: 0 }} />
                <span>
                  <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Output: </strong>
                  {activeProject.whatExistsNow}
                </span>
              </div>

              {/* Expand Toggle */}
              <button
                onClick={toggleExpand}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--brand-primary)',
                  fontWeight: 750,
                  fontSize: '13px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  cursor: 'pointer',
                  padding: 0
                }}
              >
                <span>{isExpanded ? 'Hide deep technical details' : 'Read full technical details'}</span>
                {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              </button>

              {/* Expanded Deep Case Study Details */}
              {isExpanded && (
                <div
                  style={{
                    marginTop: '18px',
                    paddingTop: '18px',
                    borderTop: '1px dashed var(--border-subtle)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    gap: '16px'
                  }}
                >
                  <div style={{ gridColumn: 'span 12' }} className="deep-col-half">
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 750,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      THE PROBLEM
                    </span>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {activeProject.problem}
                    </p>
                  </div>

                  <div style={{ gridColumn: 'span 12' }} className="deep-col-half">
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 750,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '4px'
                      }}
                    >
                      KEY LEARNING
                    </span>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                      {activeProject.learning}
                    </p>
                  </div>

                  <div style={{ gridColumn: 'span 12' }}>
                    <span
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 750,
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        display: 'block',
                        marginBottom: '6px'
                      }}
                    >
                      TOOLS & TECHNOLOGIES
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {activeProject.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          style={{
                            fontSize: '11px',
                            fontWeight: 650,
                            backgroundColor: 'var(--bg-subtle)',
                            color: 'var(--text-secondary)',
                            padding: '3px 8px',
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
          .case-study-content-col { grid-column: span 6 !important; }
          .case-study-visual-col { grid-column: span 6 !important; }
          .deep-col-half { grid-column: span 6 !important; }
        }
      `}</style>
    </section>
  );
};
