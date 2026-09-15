import type { MetricItem } from '../types';

export const metricsData: MetricItem[] = [
  {
    id: 'linkedin-followers',
    value: '1,597',
    label: 'Codju LinkedIn followers',
    date: 'September 2026 snapshot',
    source: 'LinkedIn Analytics',
    type: 'current_snapshot',
    context: 'Organic brand presence; selected annual analytics show 76.8K impressions, 2,745 reactions, 88 comments, and 8 reposts.'
  },
  {
    id: 'youtube-views',
    value: '75.5K',
    label: 'YouTube channel views',
    date: 'Selected 365-day period',
    source: 'YouTube Studio Analytics',
    type: 'current_snapshot',
    context: 'Channel-level selected analytics period recorded 75.5K views, 1.9K watch hours, and +1.2K subscribers.'
  },
  {
    id: 'google-business-views',
    value: '42.0K',
    label: 'Google Business Profile views',
    date: 'April – September 2026',
    source: 'Google Business Profile',
    type: 'current_snapshot',
    context: '42,028 profile views, 11,628 searches, and 37 interactions; queries were heavily brand-led (~11K searches for "Codju").'
  },
  {
    id: 'newsletter-subscribers',
    value: '527',
    label: 'Newsletter subscribers',
    date: 'Current snapshot',
    source: 'LinkedIn Newsletter Analytics',
    type: 'current_snapshot',
    context: 'AI & Skill Learning in Schools newsletter subscriber audience built through recurring educational writing.'
  }
];
