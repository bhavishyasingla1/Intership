# Bhavishya Singla — Codju Internship Case Study

An evidence-based personal internship case-study web application documenting Bhavishya Singla's ~9-month journey at **Codju Technologies**.

This is not a generic resume or company website. It is an interactive, factual impact record tracing how Bhavishya joined as **Marketing Intern – Growth & Brand** and expanded into web development, SEO, behavioral analytics, marketing technology, automation, and AI-assisted engineering.

---

## 🛠 Tech Stack
- **Framework:** React 19 + TypeScript
- **Bundler & Dev Server:** Vite (`base: './'` for universal GitHub Pages hosting)
- **Styling:** Vanilla CSS design tokens based on Codju's brand colors (`#6416b8` Primary Violet & `#58cc02` Accent Green)
- **Icons:** Lucide React & custom optimized SVGs
- **Deployment:** GitHub Pages via GitHub Actions workflow (`.github/workflows/deploy.yml`)

---

## 🚀 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production (TypeScript check + Vite bundle)
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

1. **Initialize Git & Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of internship case study web app"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub → **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
   - The included workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

---

## 📊 Core Architecture & Pillars
1. **Growth & Brand:** Multi-channel distribution (LinkedIn 1.6K+, YouTube 1.35K+, Google Business 36 interactions).
2. **Web & Landing Pages:** Main `codju.com` revamp, `teachboost.in`, and campaign landing pages (Codju Summer Camp, AI Creator Camp).
3. **Marketing Technology & Systems:** WhatsApp Operations Hub on Cloudflare Workers (`whatsapp-dashboard.codju-tech25.workers.dev`) connected to Meta WhatsApp Cloud API.
4. **Content Operations Platform:** Editorial calendar and campaign tracker on Cloudflare Workers (`codju-content.bhavishyasingla2005.workers.dev`).
5. **SEO & Organic Discovery:** Google Search Console query audit diagnosing branded search reliance, leading to topic-focused content clustering and internal linking.
6. **Analytics Layer:** Microsoft Clarity (`yi2ur6p2il`) heatmaps & GA4 behavioral tracking.
7. **AI & Automation:** CUDO website chatbot, Instagram auto-DM trigger workflow, and AI-assisted prototyping.
8. **Empirical Evidence Grid:** Strict labeling of all figures (Documented Change, Current Snapshot, Activity Metric) with zero metric inflation.
