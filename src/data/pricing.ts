export interface PricingTier {
  name: string;
  tagline: string;
  featured: boolean;
  includesPrevious?: string;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    tagline: 'Perfect for one-off analysis and clean data setup.',
    featured: false,
    features: [
      'Consultation',
      'Data Cleaning and Organization',
      'Basic Exploratory Data Analysis (EDA) Report',
      'Standard Dashboard (Snapshot)',
      'Final Insight Presentation',
      'Cleaned Dataset Handover',
    ],
  },
  {
    name: 'Business',
    tagline: 'Comprehensive insights, forecasting & strategy.',
    featured: true,
    includesPrevious: 'Everything in Starter, plus:',
    features: [
      'Advanced ML Forecasting',
      'Interactive BI Dashboards',
      'User Documentation & Training',
      'Strategy & Review Session',
    ],
  },
];
