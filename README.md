# Cybersecurity Portfolio

Modern single-page portfolio for Shubodaya Kumar, focused on Security Operations roles. Built with React + Vite and deployed to GitHub Pages.

## Live Site
- https://shubodaya.github.io/portfolio-sec/ (auto-deployed from `main`)

## Highlights
- Animated hero with location/availability chips, resume + contact CTAs.
- Experience and achievements grouped by role with responsibilities vs. wins.
- Project gallery covering SOC labs, automation, compliance, and security testing.
- Skills slider plus an interactive “SOC Live Logs” panel that streams simulated alerts.
- Education and certification badges for quick credibility scan.
- Contact form wired to Web3Forms for inbox delivery without a custom backend.

## Tech Stack
- React 19 + Vite 7
- React-Bootstrap 5, react-bootstrap-icons
- Styling with Bootstrap, custom CSS, and animate.css + react-on-screen for scroll reveals
- react-multi-carousel for skills slider; react-responsive-carousel for media

## Getting Started
1) Install Node.js 20+ and npm.  
2) Install deps: `npm ci` (or `npm install`).  
3) Run locally: `npm run dev` and open the shown localhost port (defaults to 5173).  
4) Build for production: `npm run build` (outputs to `dist/`).  
5) Preview a production build: `npm run preview`.

## Deployment
- GitHub Actions workflow `.github/workflows/deploy.yml` builds and publishes to GitHub Pages whenever `main` is pushed or the workflow is dispatched.
- Vite base path is set to `/portfolio-sec/` in `vite.config.js`; keep this in sync with the repository name if you fork/rename.
- The generated Pages URL is exposed by the workflow output (`page_url`).

## Contact Form
- Uses Web3Forms at `https://api.web3forms.com/submit`.
- Replace the `access_key` value in `src/components/Contact.jsx` with your own key to receive submissions.

## Customizing Content
- Hero & nav: `src/components/NavBar.jsx`, `src/components/Banner.jsx`
- Experience: `src/components/Experience.jsx`
- Projects: `src/components/Projects.jsx` and related images in `src/assets/img/`
- Skills & SOC log demo: `src/components/Skills.jsx`
- Education & certifications: `src/components/Education.jsx`, `src/components/Certifications.jsx`
- Contact + social links: `src/components/Contact.jsx`, `src/components/Footer.jsx`
