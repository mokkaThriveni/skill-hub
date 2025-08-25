
# E‑Learning Platform(Skill hub) (React + Tailwind)

A starter implementation that matches your task spec: landing, courses with filters,
course detail with accordion syllabus, multi‑step registration, and a protected student dashboard.
Includes dark mode, Framer Motion, and a JSON Server for mock data.

## Quick start

```bash
npm install
npm run dev          # http://localhost:5173
npm run server       # JSON Server on http://localhost:5186
```

## Pages
- `/` Landing (carousel)
- `/coursesListeningpage` Course listing (filters + live search)
- `/coursesDetails/:id` Course detail (accordion syllabus)
- `/registerpage` Multi‑step registration
- `/studentDashboardpage` Protected dashboard (progress tracking)

### Auth (demo)
Use the Register page. The demo "auth" stores a fake token in `localStorage`.
Protected routes are handled by `ProtectedRoute`.

### JSON Server
Data lives in `server/Corses.json`.
```bash
npm run server
# GET http://localhost:5186/courses
```

### Design System
Tailwind config + `/src/styles/index.css` define tokens and utilities.
See `/public/brand/brand_guide.pdf` for palette, typography, and usage.

### Deploy
- **Vercel/Netlify:** Connect the repo, set build command `npm run build`, output `dist`.
