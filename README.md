# ezLancing — AI-Powered Freelance Protection Platform

A stunning, animated landing page for **ezLancing**, built with **Angular 19** and **Tailwind CSS v4**.

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ installed
- **npm** 9+ installed

### Installation & Running

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm start

# 3. Open in browser
# Navigate to http://localhost:4200
```

That's it! The app runs entirely in the browser — **no backend required**.

## 🎨 Features

### Landing Page Sections
- **Hero** — Bold headline with animated typing effect and mock contract preview
- **Social Proof** — Animated stats (12,000+ freelancers, $2.4M+ recovered)
- **Features** — 6 feature cards with gradient icons and hover animations
- **How It Works** — 3-step animated flow with connected timeline
- **Client Risk Score Demo** — Interactive AI risk scoring gauge with red flag indicators
- **Competitive Comparison** — Feature matrix vs Bonsai, HoneyBook, DocuSign, Wave
- **Testimonials** — Carousel with quotes from fictional users worldwide
- **Pricing / Paywall** — 4 pricing plans ($9/mo, $79/yr, $129/yr, $49 lifetime) with annual/monthly toggle
- **FAQ** — Expandable accordion with 6 questions
- **Footer** — Brand, links, social icons

### Design Features
- ✅ **Dark / Light Mode** — Toggle with system preference detection + localStorage persistence
- ✅ **Arabic / English (i18n)** — Full RTL support with Cairo font for Arabic
- ✅ **Scroll Reveal Animations** — Elements fade in as you scroll (Intersection Observer)
- ✅ **Glassmorphism** — Frosted glass navbar and card effects
- ✅ **Gradient Orbs** — Animated floating background orbs
- ✅ **Micro-interactions** — Hover effects, scale animations, smooth transitions
- ✅ **Responsive Design** — Works on desktop, tablet, and mobile
- ✅ **Custom Scrollbar** — Purple-themed scrollbar
- ✅ **SEO Optimized** — Meta tags, semantic HTML, proper heading hierarchy

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Angular 19 | Frontend framework (standalone components) |
| Tailwind CSS v4 | Utility-first CSS with CSS-first configuration |
| TypeScript | Type-safe development |
| Intersection Observer | Scroll-triggered animations |
| CSS Keyframes | Floating orbs, shimmer, typing, pulse effects |
| Google Fonts | Inter (Latin) + Cairo (Arabic) + JetBrains Mono |

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Fixed navbar with glassmorphism
│   │   ├── hero/            # Hero section with typing animation
│   │   ├── social-proof/    # Stats counter section
│   │   ├── features/        # 6 feature cards grid
│   │   ├── how-it-works/    # 3-step process flow
│   │   ├── risk-score/      # AI risk score demo with SVG gauge
│   │   ├── comparison/      # Competitive comparison table
│   │   ├── testimonials/    # Testimonial carousel
│   │   ├── pricing/         # Pricing/paywall with 4 plans
│   │   ├── faq/             # Accordion FAQ
│   │   └── footer/          # Footer with links
│   ├── directives/
│   │   └── scroll-reveal.directive.ts
│   └── services/
│       ├── theme.service.ts     # Dark/light mode management
│       └── language.service.ts  # Arabic/English i18n
├── styles.css                   # Global styles + Tailwind theme
└── public/
    └── i18n/
        ├── en.json              # English translations
        └── ar.json              # Arabic translations
```

## 🎯 Design Rationale

### Color Palette
- **Primary Purple (#6C3CE9)** — Conveys trust, professionalism, and intelligence (AI-powered)
- **Accent Mint (#06D6A0)** — Represents money/success/security — perfect for a payment protection tool
- **Warm gradients** — Purple-to-mint gradient creates a modern, premium feel

### Typography
- **Inter** — Clean, modern sans-serif for English — widely used in top SaaS products
- **Cairo** — Beautiful Arabic font that pairs well with Inter's geometric style

### Animation Strategy
- Scroll-triggered reveals create a sense of discovery as users explore
- Floating gradient orbs add depth and visual richness without distraction
- Typing animation in the hero demonstrates the product's core value (plain English → contract)
- Subtle hover effects on cards provide tactile feedback
- The risk score gauge animation draws attention to the AI intelligence feature

### Layout Decisions
- Single-page scrolling keeps the user in a continuous narrative flow
- Pricing section uses 4-column grid to show all options at once — reducing decision fatigue
- Comparison table directly addresses the "why switch?" objection
- Testimonials carousel saves space while providing social proof diversity

## 📝 Pricing (as displayed)

| Plan | Price | Key Features |
|------|-------|-------------|
| Solo Monthly | $9/month | 10 contracts/month, basic tracking |
| Solo Annual | $79/year | Unlimited contracts, smart follow-ups |
| Pro Annual | $129/year | Risk scoring, red flags, multi-currency |
| One-Time License | $49 lifetime | All Pro features, 1 year updates |
