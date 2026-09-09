# FARANET Corporate Website

A premium, SEO-first corporate website for **FARANET (توسعه ارتباطات هوشمند نیکان)**. 
Built as a highly optimized, fully responsive, and native RTL landing page tailored for IT infrastructure and network support services in Hamedan.

## Tech Stack
- Next.js (App Router, Server Components)
- TypeScript
- Tailwind CSS v4
- Vazirmatn Font (Google Fonts)
- Lucide React Icons

## Features
- **Premium Design System**: Minimal, professional, and elegant UI reflecting an Enterprise IT business.
- **Native RTL & Persian Support**: Correct document direction (`dir="rtl"`), accurate Persian typography (`Vazirmatn`), and meticulous handling of technical LTR text.
- **Technical SEO First**: Semantic HTML, LocalBusiness JSON-LD, configured OpenGraph metadata, and NAP consistency.
- **High Performance**: Built with Server Components and minimal client-side JavaScript.
- **Mobile First**: Fully responsive layout from 320px up to 1920px.

## Setup & Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Build for production:
   ```bash
   npm run build
   npm start
   ```

## Centralized Configuration

All core business data is centralized in `src/config/site.ts`. 
To update the phone number, address, social links, or working hours, modify `siteConfig` in this file. This ensures NAP consistency across the entire application (including Structured Data).

## Architecture & Future Expansion

The project is structured to easily scale into a multi-page corporate site:
- `src/components/ui/` for reusable elements.
- `src/components/layout/` for global headers/footers.
- `src/sections/` for modular page sections.
- `src/app/` for the Next.js App Router routing.

For future service pages or blog features, simply create directories under `src/app/`.
