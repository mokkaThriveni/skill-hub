
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

## features&Pages
- Landing Page (/)
Eye-catching carousel on the home page to showcase key features or promotions.

- Courses Listing (/coursesListeningpage)
Browse courses with filters and live search for efficient discovery.

- Course Details (/coursesDetails/:id)
Detailed view with an accordion-style syllabus—expand to view lessons and modules.

- Multi-Step Registration (/registerpage)
Streamlined user sign-up process with progress tracking across steps.

- Student Dashboard (/studentDashboardpage)
Protected route with simulated authentication—students can track course progress.

- Dark Mode
Toggle between light and dark themes for comfortable viewing.

- Smooth Animations
Enhanced user experience with Framer Motion transitions.
### Authentication (demo)
Registration generates a fake token saved in localStorage.

Access to the student dashboard is managed via a ProtectedRoute component that checks for this token.
### JSON Server
Data lives in `server/Corses.json`.
```bash
npm run server
# GET http://localhost:5186/courses
```

### Design System
Centralized styles via Tailwind config and src/styles/index.css.

Global design tokens (colors, typography, spacing).

Brand resources available at: /public/brand/brand_guide.pdf.
### Tech stack
React — Frontend UI

Tailwind CSS — Styling utility framework

Framer Motion — Enhanced UI animations

React Router v6 — App routing and protected routes

JSON Server — Local mock backend API

Local Storage — Demo authentication token

### Deploy
- **Vercel/Netlify:** 
asily deploy to platforms like Vercel or Netlify:

Build Command: npm run build

Publish Directory: `dist`