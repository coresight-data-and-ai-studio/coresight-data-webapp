export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  impact: string;
  stack: string[];
  image: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    title: 'CO\u2082Vision \u2013 Global CO\u2082 Emission Analytics',
    category: 'Data Analytics \u00b7 Forecasting \u00b7 Interactive Dashboards',
    description:
      'Built an end-to-end analytics system to explore, evaluate, and forecast global CO\u2082 emissions at the country level. The project focuses on robust data cleaning, exploratory analysis, climate-risk scoring, and statistically sound time-series forecasting using ARIMA.',
    impact:
      'Delivered a fully reproducible analytics pipeline with an interactive Streamlit dashboard, enabling country-level emission analysis and ARIMA-based forecasts.',
    stack: ['Python', 'pandas', 'ARIMA', 'Streamlit', 'Matplotlib'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Global Health & Nutrition Analytics Platform',
    category: 'SQL Analytics Engineering \u00b7 Public Health \u00b7 Dashboards',
    description:
      'Transforms high-dimensional global health and nutrition datasets into structured SQL models. This project builds an end-to-end system performing deep exploratory analysis to deliver interactive dashboards and automated country-level reports.',
    impact:
      'Built a full SQL-driven pipeline covering 22,000+ records. Reduced analysis complexity by centralizing transformations in SQL views, enabling faster EDA.',
    stack: ['Python', 'SQL', 'Streamlit', 'Automated Reporting', 'Data Modeling'],
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  },
];
