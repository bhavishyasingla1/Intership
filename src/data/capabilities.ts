import type { CapabilityCard } from '../types';

export const capabilities: CapabilityCard[] = [
  {
    id: 'web',
    category: 'WEB DEVELOPMENT',
    title: 'Websites & Landing Pages',
    description: 'Redesigned core company web properties and deployed responsive campaign pages with modern UI architectures.',
    iconName: 'Layout',
    skills: ['Responsive UI', 'Component Structure', 'Performance Optimization', 'UX Architecture']
  },
  {
    id: 'systems',
    category: 'MARKETING TECHNOLOGY',
    title: 'Marketing Operations Hubs',
    description: 'Built centralized internal tools for WhatsApp broadcast workflows, contact tagging, and campaign operations.',
    iconName: 'Cpu',
    skills: ['WhatsApp Cloud API', 'Audience Segmentation', 'Internal Tools', 'Cloudflare Workers']
  },
  {
    id: 'analytics',
    category: 'ANALYTICS & DATA',
    title: 'Behavioral & Traffic Tracking',
    description: 'Implemented Google Analytics 4 and Microsoft Clarity to track user behavior, scroll depth, and interaction heatmaps.',
    iconName: 'BarChart3',
    skills: ['GA4 Property Setup', 'Microsoft Clarity Heatmaps', 'Session Replays', 'Conversion Events']
  },
  {
    id: 'seo',
    category: 'SEO & DISCOVERY',
    title: 'Organic Search Strategy',
    description: 'Shifted search exposure from brand-only queries to broader AI-in-education topic discovery via structured content.',
    iconName: 'Search',
    skills: ['Google Search Console', 'Technical SEO', 'Internal Linking', 'Information Architecture']
  },
  {
    id: 'content',
    category: 'CONTENT OPERATIONS',
    title: 'Repeatable Content Systems',
    description: 'Architected a structured operations dashboard to plan, review, and track monthly written and social content cadences.',
    iconName: 'FileText',
    skills: ['Content Calendar Systems', 'Editorial Workflows', 'Multi-channel Packaging', 'Audience Research']
  },
  {
    id: 'automation',
    category: 'AUTOMATION & APIS',
    title: 'Workflow Automation',
    description: 'Constructed automated triggers connecting social engagements directly to educational blog resources.',
    iconName: 'Zap',
    skills: ['Meta Cloud API Integration', 'Auto-DM Automation', 'Data Ingestion', 'Webhook Triggers']
  },
  {
    id: 'ai',
    category: 'AI-ASSISTED PRODUCTION',
    title: 'AI-Enabled Prototyping',
    description: 'Used AI as a practical execution multiplier for rapid web deployment, interactive components, and creative testing.',
    iconName: 'Sparkles',
    skills: ['AI-Assisted Web Dev', 'Interactive Chatbot Flow', 'Synthetic Creative Testing', 'Rapid Prototyping']
  },
  {
    id: 'growth',
    category: 'GROWTH & CHANNELS',
    title: 'Multi-Channel Brand Growth',
    description: 'Scaled organic channel footprints across LinkedIn (1.6K+), YouTube (1.35K+), and local Google presence.',
    iconName: 'TrendingUp',
    skills: ['Zoho Social Analytics', 'LinkedIn Profile Management', 'GMB Verification', 'Community Distribution']
  }
];
