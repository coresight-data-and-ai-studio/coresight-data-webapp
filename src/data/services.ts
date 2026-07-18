import type { LucideIcon } from 'lucide-react';
import { Search, TrendingUp, LayoutDashboard, Database, Zap, Users } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: 'Exploratory Data Analysis (EDA)',
    description:
      'Deep dive into your raw data to uncover hidden patterns, anomalies, and actionable insights before modeling begins.',
    icon: Search,
  },
  {
    title: 'ML Prediction and Forecasting',
    description:
      'Leveraging state-of-the-art machine learning algorithms to predict future trends, customer behaviors, and market shifts.',
    icon: TrendingUp,
  },
  {
    title: 'Dashboards & Web Apps',
    description:
      'Custom-built, interactive visualizations and web applications that bring your data to life for stakeholders.',
    icon: LayoutDashboard,
  },
  {
    title: 'Data Cleaning & Organization',
    description:
      'Expert cleaning and organizing of messy data. We transform unstructured inputs into high-quality datasets ready for critical analysis.',
    icon: Database,
  },
  {
    title: 'Automation Service',
    description:
      'Streamlining repetitive data workflows and reporting processes to save your team valuable time and reduce errors.',
    icon: Zap,
  },
  {
    title: 'Consulting',
    description:
      'Strategic guidance on data infrastructure, tool selection, and building a data-driven culture within your organization.',
    icon: Users,
  },
];
