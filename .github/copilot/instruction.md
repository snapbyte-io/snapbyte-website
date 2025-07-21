 📘 Project: Snapbyte Site (Built with Astro + React + TypeScript)

Goal:
- Build a high-performance, modular, and maintainable static site using Astro.
- Render pages like Pricing, About Us, Contact, and Blog. 
- Follow modern standards in UI, UX, accessibility, and code structure.

Technical Stack:
- Astro (Static-first frontend framework)
- React (used selectively where interactivity is needed)
- TypeScript (strict mode, no `any` type)
- Tailwind CSS for styling (utility-first, responsive)
- Markdown (.md/.mdx) for blog content
- JSON or structured TS modules for content (plans, team, contact info, etc.)

Architectural Goals:
- All dynamic content (plans, team, metadata) must be sourced from JSON or Markdown,
   making it easy to refactor to a headless CMS in the future.
- Each page should be broken into modular, reusable Astro/React components.
- Components must follow clean code practices and be accessible and responsive.
- Use content collections (`/blog`) for blog posts.
- Animate UI with native CSS transitions or motion libraries like `@motionone/astro`.

Future-Proofing:
- Designed to be CMS-ready (e.g. Contentful, Sanity, Strapi)
- Easy to internationalize (i18n-ready)
- Blog must support SEO-friendly routes, metadata, and basic pagination
Do not create new readme or any markdown file
