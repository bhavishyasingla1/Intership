import type { Project } from '../types';

export const projectsData: Project[] = [
  // FLAGSHIP 01: Codju Website
  {
    id: 'codju-website-revamp',
    number: '01',
    title: 'Codju Website',
    category: 'Product / Web',
    eyebrow: 'WEB ARCHITECTURE & CURRICULUM PORTAL',
    shortDescription: 'Revamped and expanded the main Codju website across structure, content, resources and supporting functionality.',
    status: 'Delivered',
    ownership: 'Built',
    problem: 'As Codju introduced new educational offerings, the website needed a clear architectural structure to present AICT curriculums (Grades 1–10), Accel AI books, and teacher training while establishing institutional credibility for school decision-makers.',
    whatIDid: [
      'Restructured website architecture into clean product pillars: Products, Books, Platform, and Training.',
      'Designed responsive modular sections highlighting NEP 2020 alignment and CBSE/ICSE circular guidelines.',
      'Created clear action funnels for school leadership ("Schedule Demo", "Explore Curriculum").',
      'Embedded the interactive CUDO assistant for immediate visitor inquiry handling.',
      'Optimized page performance and semantic HTML structures for search indexing.'
    ],
    whatIBuilt: 'A structured, responsive multi-page portal at codju.com that acts as the primary credibility asset for school partnerships.',
    howItWorked: 'Visitor arrives → Selects target grade tier (Grades 1 to 10) → Inspects curriculum syllabus & sample books → Interacts with live demo booking or CUDO assistant.',
    resultType: 'delivered_output',
    result: 'Fully deployed production website at codju.com serving school administrators and teachers across India.',
    learning: 'Web design for B2B education is about clarity and credibility over visual noise. School principals prioritize curriculum compliance and ease of implementation.',
    tools: ['HTML5', 'Modern CSS', 'Responsive Grid', 'Component Architecture', 'Chatbot Integration'],
    transferableSkills: ['Information Architecture', 'B2B Web Development', 'UX Design', 'Conversion Optimization'],
    liveUrl: 'https://codju.com',
    isFlagship: true,
    priority: 5,
    evidence: []
  },

  // FLAGSHIP 02: WhatsApp Marketing Operations Hub
  {
    id: 'whatsapp-hub',
    number: '02',
    title: 'WhatsApp Marketing Operations Hub',
    category: 'Systems',
    eyebrow: 'INTERNAL MARKETING TOOL',
    shortDescription: 'Built an internal marketing operations interface for contacts, audiences and broadcast workflows.',
    status: 'Internal System',
    ownership: 'Built',
    problem: 'Managing outbound school outreach and workshop communications through scattered spreadsheets and individual devices caused fragmented tracking, missed follow-ups, and lack of audience segmentation.',
    whatIDid: [
      'Architected an internal operations interface for contact list organization and tag-based audience segmentation.',
      'Connected the Meta WhatsApp Cloud API for authenticated messaging workflows.',
      'Structured broadcast campaign dispatching for school outreach cycles.',
      'Built modules to manage contacts, audience segments, broadcasts, campaigns, and templates.'
    ],
    whatIBuilt: 'An internal marketing operations interface handling contacts, audiences, broadcasts, and campaigns.',
    howItWorked: 'Import contacts → Segment by institution & level → Select pre-approved template → Dispatch broadcast → Review delivery status.',
    resultType: 'delivered_output',
    result: 'Operationalized internal marketing tool eliminating manual device-based dispatch.',
    learning: 'Building internal tools is high leverage. Automating repeated operational steps frees team bandwidth for strategy.',
    tools: ['Meta WhatsApp Cloud API', 'Cloudflare Workers', 'TypeScript', 'Responsive Dashboard UI', 'Internal API'],
    transferableSkills: ['Marketing Operations', 'API Integration', 'Audience Segmentation', 'System Architecture'],
    // Security policy: No public liveUrl for internal security-sensitive systems
    isFlagship: true,
    priority: 5,
    evidence: []
  },

  // FLAGSHIP 03: Content Operations Dashboard
  {
    id: 'content-operations-dashboard',
    number: '03',
    title: 'Content Operations Dashboard',
    category: 'Content Operations',
    eyebrow: 'INTERNAL WORKFLOW SYSTEM',
    shortDescription: 'Built a centralized workspace for organizing social and written content across the publishing workflow.',
    status: 'Internal System',
    ownership: 'Built',
    problem: 'Balancing social posts, educational newsletters, and SEO blog articles across multiple platforms without a single source of truth created bottlenecks, review delays, and irregular publishing rhythms.',
    whatIDid: [
      'Designed and built a dedicated content operations workspace used between marketing and design.',
      'Structured the workflow into clear operational stages: Planning → Draft → Ready → Published.',
      'Separated content streams into Social Content and Written Publications (Blogs & Newsletters).',
      'Created calendar views to coordinate publishing dates with product announcements.'
    ],
    whatIBuilt: 'A centralized workspace structuring the entire content lifecycle from planning to publication.',
    howItWorked: 'Editorial idea logged → Categorized (Social vs. Written) → Assigned target date → Drafted & reviewed → Marked published.',
    resultType: 'delivered_output',
    result: 'Standardized content operations with clear status tracking across all publications.',
    learning: 'Creative output scales only when backed by operational systems. Systematizing the calendar removed daily friction about what to write next.',
    tools: ['Cloudflare Workers', 'TypeScript', 'Modern CSS', 'Content Schemas'],
    transferableSkills: ['Content Operations', 'Workflow Design', 'Editorial Planning', 'Tool Design'],
    liveUrl: 'https://codju-content.bhavishyasingla2005.workers.dev',
    isFlagship: true,
    priority: 5,
    evidence: []
  },

  // FLAGSHIP 04: TeachBoost.in Platform Build
  {
    id: 'teachboost-website',
    number: '04',
    title: 'TeachBoost.in',
    category: 'Web Development',
    eyebrow: 'AI-ASSISTED DEVELOPMENT WITH COLLABORATION',
    shortDescription: 'Built and developed the website experience with AI-assisted workflows, with guidance and collaboration from the team.',
    status: 'Delivered',
    ownership: 'Co-built',
    problem: 'A dedicated educator empowerment initiative required its own independent web presence, syllabus outlines, and registration pathways.',
    whatIDid: [
      'Built the website experience on top of the existing project structure.',
      'Utilized AI-assisted workflows for rapid component scaffolding and responsive layout design.',
      'Iterated on styling, typography hierarchy, and educator registration forms with team feedback.',
      'Validated cross-device mobile responsiveness for workshop attendees.'
    ],
    whatIBuilt: 'The educator enablement web platform at teachboost.in supporting teacher workshops.',
    howItWorked: 'Needs analysis → Rapid structural scaffolding with AI assistance → Styling & UX refinement with team guidance → Final verification.',
    resultType: 'delivered_output',
    result: 'Launched standalone web platform supporting educator training initiatives.',
    learning: 'AI-assisted development drastically accelerates the path from zero to prototype, but team collaboration and disciplined manual curation ensure production quality.',
    tools: ['AI-Assisted Workflows', 'React', 'CSS Architecture', 'Component Design'],
    transferableSkills: ['Rapid Prototyping', 'AI-Enabled Engineering', 'Educator Marketing', 'Team Collaboration'],
    liveUrl: 'https://teachboost.in',
    isFlagship: true,
    priority: 5,
    evidence: []
  },

  // FLAGSHIP 05: Campaign Landing Pages
  {
    id: 'campaign-landing-pages',
    number: '05',
    title: 'Campaign Landing Pages',
    category: 'Growth & Web',
    eyebrow: 'CONVERSION EXPERIENCES',
    shortDescription: 'Designed and built campaign-specific landing experiences combining content, UX, web implementation and visual media.',
    status: 'Delivered',
    ownership: 'Built',
    problem: 'Broad marketing campaigns directed to the homepage suffered high bounce rates because visitors needed targeted curriculum specifics, dates, pricing, and direct enrollment triggers for seasonal camps.',
    whatIDid: [
      'Designed standalone landing page architecture for Codju Summer Camp (`summercamp.codju.com`).',
      'Engineered campaign modules for AI Creator Camp with schedule previews and project showcases.',
      'Structured the Computational Thinking landing experience within the broader Codju web ecosystem.',
      'Integrated registration CTAs and tracking elements for campaign attribution.'
    ],
    whatIBuilt: 'Campaign-specific landing experiences under the Codju ecosystem combining visual punch and transparent signups.',
    howItWorked: 'Campaign traffic → Specialized landing page → Student project previews → Registration CTA.',
    resultType: 'delivered_output',
    result: 'Delivered focused campaign pages that supported student camp enrollment cycles.',
    learning: 'Event landing pages require progressive disclosure: hook with student outcomes, follow with week-by-week curriculum, and remove non-essential navigation.',
    tools: ['Responsive Web Design', 'Conversion Copywriting', 'Visual Asset Integration', 'CTA Funnels'],
    transferableSkills: ['Conversion Rate Optimization', 'Landing Page Architecture', 'Campaign Design'],
    isFlagship: true,
    priority: 5,
    evidence: []
  },

  // FLAGSHIP 06: SEO & Organic Search
  {
    id: 'seo-organic-search',
    number: '06',
    title: 'SEO & Organic Search',
    category: 'Growth & Discovery',
    eyebrow: 'FROM BRANDED SEARCH TO BROADER DISCOVERY',
    shortDescription: 'Search data showed strong brand-led discovery. I began expanding the content strategy toward broader educational and AI-related topics.',
    status: 'Implemented',
    ownership: 'Owned',
    problem: 'Early Search Console audits revealed that nearly all organic impressions came from people already searching "Codju". High-intent searches for "NEP 2020 AI curriculum for schools" had minimal visibility.',
    whatIDid: [
      'OBSERVE: Audited Google Search Console queries, identifying heavy branded search saturation.',
      'BUILD: Restructured long-form blogs, internal linking, and technical SEO so content became part of the product.',
      'EXPLORE: Experimented with structuring useful, source-rich content with the goal of improving discoverability across modern search and AI-assisted discovery.'
    ],
    whatIBuilt: 'A structured organic discovery playbook connecting educational guides and articles with school curriculum search intent.',
    howItWorked: 'Query analysis → Topic cluster definition → Targeted editorial production → Strategic internal links → Rank monitoring.',
    resultType: 'qualitative_outcome',
    result: 'Shifted SEO posture from passive brand presence to proactive non-branded discovery targeting school leadership.',
    learning: 'Long-form content became part of the discoverability strategy, not just a publishing task.',
    tools: ['Google Search Console', 'Topic Modeling', 'Information Architecture', 'Semantic SEO'],
    transferableSkills: ['SEO Strategy', 'Content Clustering', 'Search Intent Analysis', 'Technical SEO'],
    isFlagship: true,
    priority: 5,
    evidence: []
  },

  // FLAGSHIP 07: Analytics Infrastructure
  {
    id: 'analytics-infrastructure',
    number: '07',
    title: 'Analytics Infrastructure',
    category: 'Measurement',
    eyebrow: 'BEHAVIORAL MEASUREMENT & DATA PIPELINE',
    shortDescription: 'Once I started changing things, how did I know what was happening? Deployed GA4 for website activity and Microsoft Clarity for user behaviour.',
    status: 'Implemented',
    ownership: 'Built',
    problem: 'Prior to September, website updates relied on subjective assumptions without empirical visibility into visitor scroll depth, dead clicks, or demo drop-offs.',
    whatIDid: [
      'Deployed Microsoft Clarity (Project ID: `yi2ur6p2il`) in September 2026 for session replays and scroll heatmaps.',
      'Configured Google Analytics 4 property for Codju Technologies with custom event and conversion tracking.',
      'Audited visitor interaction patterns on curriculum and demo landing pages to identify friction points.'
    ],
    whatIBuilt: 'A behavioral measurement pipeline capturing live session recordings, heatmaps, and funnel drop-offs across codju.com.',
    howItWorked: 'Change → Measure (GA4 & Clarity) → Understand (heatmaps & drop-offs) → Iterate.',
    resultType: 'delivered_output',
    result: 'Operationalized empirical analytics infrastructure in September 2026 to guide data-driven UX decisions.',
    learning: 'Analytics does not automatically grow a business; it reveals where user intent collides with interface friction.',
    tools: ['Microsoft Clarity', 'Google Analytics 4', 'Event Tracking', 'Tag Deployment'],
    transferableSkills: ['Behavioral Analytics', 'Heatmap Analysis', 'Data-Driven UX', 'Conversion Funnel Analysis'],
    isFlagship: true,
    priority: 4,
    evidence: []
  },

  // SECONDARY 08: CUDO Chatbot
  {
    id: 'cudo-chatbot',
    number: '08',
    title: 'CUDO Website Chatbot',
    category: 'Conversational UX',
    eyebrow: 'WEBSITE CHATBOT',
    shortDescription: 'CUDO added an interactive layer to the main website for visitors exploring curriculum offerings.',
    status: 'Implemented',
    ownership: 'Implemented',
    problem: 'Educators visiting the site outside office hours had questions about grade eligibility, CBSE alignment, and demo bookings with no interactive mechanism to receive instant guidance.',
    whatIDid: [
      'Configured conversational pathways for school administrators, teachers, and parents.',
      'Integrated CUDO chatbot widget directly into codju.com footer and floating triggers.',
      'Aligned messaging tone with Codju’s accessible brand voice.'
    ],
    whatIBuilt: 'An interactive conversational layer on the main website providing immediate answers and guided navigation.',
    howItWorked: 'Visitor opens chat → CUDO offers targeted branches (Curriculum / Books / Demo) → Guides visitor to relevant page or demo form.',
    resultType: 'delivered_output',
    result: 'Live interactive conversational layer integrated into the primary company website.',
    learning: 'Chatbots on educational websites work best as navigators rather than artificial companions.',
    tools: ['Chatbot Integration', 'Conversational Scripting', 'Website Embed'],
    transferableSkills: ['Conversational UX', 'Visitor Qualification', 'Frontend Integration'],
    isFlagship: false,
    priority: 4,
    evidence: []
  },

  // SECONDARY 09: Instagram Auto-DM Workflow
  {
    id: 'instagram-auto-dm',
    number: '09',
    title: 'Instagram Auto-DM Workflow',
    category: 'Small Automation',
    eyebrow: 'SMALL AUTOMATION',
    shortDescription: 'Set up a simple comment-triggered DM flow that directed users to the relevant blog guide.',
    status: 'Automated',
    ownership: 'Built',
    problem: 'Educators commenting on social posts for guides had to be sent links manually, causing delays.',
    whatIDid: [
      'Configured automated trigger for specific educator keywords on Instagram posts.',
      'Dispatched direct messages linking directly to long-form curriculum blogs.',
      'Connected social engagement to website discovery smoothly.'
    ],
    whatIBuilt: 'A lightweight comment-triggered automation directing users to long-form resources.',
    howItWorked: 'Instagram comment → Automatic DM → Blog link.',
    resultType: 'delivered_output',
    result: 'Lightweight automation flow tested and operationalized.',
    learning: 'Small, targeted automations that connect channels provide immediate operational leverage.',
    tools: ['Meta API', 'Webhook Trigger', 'Automation Flow'],
    transferableSkills: ['Marketing Automation', 'Workflow Design', 'Social Conversion'],
    isFlagship: false,
    priority: 3,
    evidence: []
  },

  // SECONDARY 10: Content Experiments
  {
    id: 'content-experiments',
    number: '10',
    title: 'Newsletter & Medium Experiments',
    category: 'Content Experiments',
    eyebrow: 'EXTERNAL CONTENT EXPERIMENTS',
    shortDescription: 'The AI & Skill Learning in Schools newsletter currently shows 527 subscribers, and published selected articles on Medium as an additional distribution experiment.',
    status: 'Experimented',
    ownership: 'Authored',
    problem: 'Testing whether direct email distribution and external publishing channels could build a recurring educator audience.',
    whatIDid: [
      'Published regular newsletter issues on LinkedIn reaching 527 subscribers.',
      'Published selected articles on Medium as an external content experiment.'
    ],
    whatIBuilt: 'Supporting content distribution experiments across external platforms.',
    howItWorked: 'Research topic → Draft article → Distribute via newsletter and external platforms.',
    resultType: 'qualitative_outcome',
    result: 'Gained baseline understanding of email open cadences and external platform distribution.',
    learning: 'Long-form content creates significantly higher compounding value when hosted on the company’s own domain.',
    tools: ['LinkedIn Newsletter', 'Medium', 'Copywriting'],
    transferableSkills: ['Editorial Writing', 'Audience Research', 'Channel Evaluation'],
    isFlagship: false,
    priority: 3,
    evidence: []
  },

  // SECONDARY 11: YouTube Channel Restructuring
  {
    id: 'youtube-restructuring',
    number: '11',
    title: 'YouTube Restructuring & Discoverability',
    category: 'Video Operations',
    eyebrow: 'CHANNEL PACKAGING & METADATA',
    shortDescription: 'Reworked channel presentation, playlists, titles, descriptions and metadata to make the library more consistent and searchable.',
    status: 'Restructured',
    ownership: 'Managed',
    problem: 'Educational videos lacked structured playlists, clear titling for searchability, and consistent packaging for student learners.',
    whatIDid: [
      'Organized channel into structured playlists for Coding, Artificial Intelligence, and Teacher Walkthroughs.',
      'Edited video pacing and designed search-oriented titles and descriptions.',
      'Standardized channel identity and metadata alignment with broader brand presence.'
    ],
    whatIBuilt: 'A structured YouTube video repository supporting curriculum transparency for schools.',
    howItWorked: 'Instructional video produced → Edited for pacing → Structured with SEO metadata and playlists → Distributed to educators.',
    resultType: 'current_snapshot',
    result: 'Structured video hub recording 75.5K views with 18.1% Search and 11.5% Playlists in selected period.',
    learning: 'YouTube serves as both a discovery channel and sales collateral library for partner schools.',
    tools: ['YouTube Studio', 'Video Editing', 'Metadata Optimization', 'Playlist Architecture'],
    transferableSkills: ['Video Strategy', 'Channel Management', 'Searchable Metadata'],
    isFlagship: false,
    priority: 3,
    evidence: []
  },

  // SECONDARY 12: Google Business Profile
  {
    id: 'google-business-footprint',
    number: '12',
    title: 'Google Business Profile',
    category: 'Local Search',
    eyebrow: 'LOCAL / SEARCH PRESENCE',
    shortDescription: 'Maintained and improved Codju’s local/search presence and monitored how people discovered the company.',
    status: 'Verified',
    ownership: 'Managed',
    problem: 'Ensuring local searchers and prospective schools found verified, standardized information when searching for Codju.',
    whatIDid: [
      'Standardized official Google Business Profile for Codju Technologies Pvt. Ltd.',
      'Added core service offerings, educational program categories, and contact access points.',
      'Monitored search patterns: ~11K searches for "Codju", confirming strong brand-led discovery.'
    ],
    whatIBuilt: 'A verified Google local presence strengthening search credibility for institutional clients.',
    howItWorked: 'User searches brand locally → Google Business Knowledge Panel displays verified status, reviews, and contact options.',
    resultType: 'current_snapshot',
    result: 'Documented 42,028 profile views, 11,628 searches, and 37 interactions in April–September 2026 snapshot.',
    learning: 'Local search verification is low-hanging fruit with high credibility impact; it reinforced that brand awareness was high, while broader category SEO was the next frontier.',
    tools: ['Google Business Profile', 'Local SEO', 'Directory Management'],
    transferableSkills: ['Local SEO', 'Entity Optimization', 'Reputation Management'],
    isFlagship: false,
    priority: 3,
    evidence: []
  },

  // SECONDARY 13: Blogger Backlink Experiment
  {
    id: 'blogger-backlink-experiment',
    number: '13',
    title: 'Blogger Backlink Distribution',
    category: 'SEO Experiment',
    eyebrow: 'SEO EXPERIMENT',
    shortDescription: 'Built and experimented with backlink distribution across external publishing and discovery platforms.',
    status: 'Experimented',
    ownership: 'Tested',
    problem: 'Testing whether external blog properties could pass search indexing signals and referral traffic to core curriculum guides.',
    whatIDid: [
      'Configured trial publishing on Blogger with structured educational references.',
      'Tracked indexing speed and referral behavior to evaluate utility.'
    ],
    whatIBuilt: 'An isolated backlink test evaluating search crawl behavior.',
    howItWorked: 'Publish syndication snippet → Link to authoritative domain guide → Observe Search Console indexation.',
    resultType: 'qualitative_outcome',
    result: 'Completed trial; reinforced prioritizing authoritative first-party content on codju.com.',
    learning: 'Direct first-party SEO and high-quality internal links create vastly superior domain authority compared to external web2 properties.',
    tools: ['Blogger', 'Link Analysis', 'Search Console'],
    transferableSkills: ['SEO Experimentation', 'Backlink Auditing', 'Search Theory'],
    isFlagship: false,
    priority: 2,
    evidence: []
  },

  // SECONDARY 14: Creative & Video Experiments
  {
    id: 'creative-video-experiments',
    number: '14',
    title: 'Creative & Video Experiments',
    category: 'Creative Experiments',
    eyebrow: 'CREATIVE EXPERIMENTS',
    shortDescription: 'Produced Teacher’s Day campaign Reels, paced instructional video clips, and hybrid AI character prototypes.',
    status: 'Delivered',
    ownership: 'Produced',
    problem: 'Testing paced visual media formats to increase educator social engagement during key calendar moments.',
    whatIDid: [
      'Created Teacher’s Day campaign Reels and curriculum announcements.',
      'Experimented with hybrid AI-generated visual characters paired with human narration.',
      'Edited instructional pacing for student coding walkthroughs.'
    ],
    whatIBuilt: 'A series of creative video assets tailored for social distribution and homepage engagement.',
    howItWorked: 'Script concept → AI asset/character generation → Paced video editing → Multi-channel distribution.',
    resultType: 'delivered_output',
    result: 'Shipped engaging creative video collateral supporting marketing campaigns.',
    learning: 'AI video is most effective when supporting human narration rather than attempting to replace it entirely.',
    tools: ['Video Editing', 'AI Visual Tools', 'Visual Design'],
    transferableSkills: ['Video Packaging', 'Creative Production', 'Visual Storytelling'],
    isFlagship: false,
    priority: 2,
    evidence: []
  }
];
