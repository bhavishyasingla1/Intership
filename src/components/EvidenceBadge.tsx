import React from 'react';
import type { ResultType } from '../types';
import { CheckCircle, Eye, Activity, Sparkles, Clock, HelpCircle } from 'lucide-react';

interface EvidenceBadgeProps {
  type: ResultType | 'live' | 'analytics' | 'screenshot';
  label?: string;
  size?: 'sm' | 'md';
}

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ type, label, size = 'sm' }) => {
  let badgeClass = 'badge-delivered';
  let Icon = CheckCircle;
  let text = label;

  switch (type) {
    case 'live':
    case 'delivered_output':
      badgeClass = 'badge-live';
      Icon = CheckCircle;
      text = text || 'Live System';
      break;
    case 'analytics':
    case 'measured_impact':
      badgeClass = 'badge-analytics';
      Icon = Activity;
      text = text || 'Analytics Verified';
      break;
    case 'current_snapshot':
      badgeClass = 'badge-analytics';
      Icon = Eye;
      text = text || 'Current Snapshot';
      break;
    case 'experiment':
      badgeClass = 'badge-experiment';
      Icon = Sparkles;
      text = text || 'Experiment';
      break;
    case 'in_progress':
      badgeClass = 'badge-experiment';
      Icon = Clock;
      text = text || 'In Progress';
      break;
    case 'qualitative_outcome':
    default:
      badgeClass = 'badge-qualitative';
      Icon = HelpCircle;
      text = text || 'Qualitative Outcome';
      break;
  }

  return (
    <span className={`badge-evidence ${badgeClass}`} style={{ fontSize: size === 'sm' ? '11px' : '13px' }}>
      <Icon size={size === 'sm' ? 12 : 14} />
      <span>{text}</span>
    </span>
  );
};
