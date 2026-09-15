export type ResultType = 
  | 'measured_impact' 
  | 'current_snapshot' 
  | 'delivered_output' 
  | 'qualitative_outcome' 
  | 'experiment' 
  | 'in_progress';

export type OwnershipLevel = 
  | 'Owned' 
  | 'Built' 
  | 'Co-built' 
  | 'Contributed' 
  | 'Managed' 
  | 'Experimented' 
  | 'Supported'
  | 'Authored'
  | 'Tested'
  | 'Produced'
  | 'Implemented';

export type ProjectCategory = 
  | 'Web' 
  | 'Systems' 
  | 'Analytics' 
  | 'SEO' 
  | 'Automation' 
  | 'AI & Creative' 
  | 'Growth'
  | 'Product / Web'
  | 'Content Operations'
  | 'Web Development'
  | 'Growth & Web'
  | 'Growth & Discovery'
  | 'Measurement'
  | 'Conversational UX'
  | 'Small Automation'
  | 'Content Experiments'
  | 'Video Operations'
  | 'Local Search'
  | 'SEO Experiment'
  | 'Creative Experiments';

export interface EvidenceItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  date: string;
  source: string;
  type: 'live_system' | 'screenshot' | 'analytics' | 'dashboard' | 'workflow';
  redacted?: boolean;
  liveUrl?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: ProjectCategory;
  eyebrow: string;
  shortDescription: string;
  status: string;
  ownership: OwnershipLevel;
  problem: string;
  whatIDid: string[];
  whatIBuilt: string;
  howItWorked: string;
  resultType: ResultType;
  result: string;
  learning: string;
  tools: string[];
  transferableSkills: string[];
  evidence: EvidenceItem[];
  liveUrl?: string;
  isFlagship: boolean;
  priority: number;
}

export interface TimelineNode {
  period: string;
  month: string;
  title: string;
  focus: string;
  whatChanged: string;
  evidence: string;
  tags: string[];
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  date: string;
  source: string;
  type: 'activity' | 'current_snapshot' | 'documented_change';
  context: string;
  baseline?: string;
}

export interface CapabilityCard {
  id: string;
  category: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}
