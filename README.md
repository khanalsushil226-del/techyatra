# Yatra Technologies

Company website for Yatra Technologies — technology for tomorrow.

Built with **React + Vite**.

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
├── index.html
├── public/            # favicon, touch icons
└── src/
    ├── assets/        # optimized images (originals kept in assets/originals)
    ├── components/    # Header, Hero, Services, About, Process, Team, Cta, Footer
    ├── data/          # section content (services.jsx)
    ├── hooks/         # useReveal — scroll reveal animations
    └── styles/        # global.css holds design tokens; one file per section
```

## Design system

All colors, radii, shadows and spacing live as CSS variables in
`src/styles/global.css` — keep new styles consistent by reusing them.

## Contact

hello@yatratechnologies.com
