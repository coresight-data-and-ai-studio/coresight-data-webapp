<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/coresight-data-and-ai-studio/coresight-data-webapp/blob/main/public/assets/coresight-logo.png" />
</div>

# CoreSight Data & AI Studio

Our core services include:

- **Data Engineering**
  - Data ingestion, cleaning, transformation (ETL/ELT)
  - SQL and cloud-ready data pipelines
  - Structured, reproducible data workflows

- **Analytics & Dashboards**
  - Interactive dashboards (Streamlit, web-based)
  - KPI monitoring and reporting
  - Exploratory and descriptive analytics

- **Forecasting & Decision Support**
  - Time-series forecasting
  - Scenario analysis and trend exploration
  - Data-driven planning support

- **AI-Powered Solutions**
  - Applied machine learning for real business problems
  - Lightweight, explainable models
  - Practical AI 

---

## 🧠 Our Philosophy

We believe:
- **Good analytics should be understandable**, not intimidating  
- **AI should support decisions**, not replace human judgment  
- **Simple, well-designed systems beat complex ones** in the long run  

---

## 📁 Repository Structure

```text
public/
  assets/          Images (logos, founder photos)
  _headers         Cloudflare Pages security headers
  _redirects       SPA fallback so deep links (e.g. /services) work on refresh
  robots.txt
  sitemap.xml
src/
  components/
    layout/        Navbar, Footer, PublicLayout (composes the two + Outlet)
    CookieConsent.tsx
  data/            Static content as typed data (nav links, services, portfolio,
                   pricing, team, company contact info) \u2014 edit these files to
                   change site copy without touching component/layout code
  hooks/
    useSeo.ts       Sets per-page <title>, meta description, and canonical URL
  pages/            One file per route, plus pages/legal/ for the three legal pages
  App.tsx           Route definitions
  main.tsx          Entry point
```     
