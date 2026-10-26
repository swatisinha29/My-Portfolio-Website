# Swati Sinha — portfolio site

A custom Jekyll site for a product manager portfolio.
It uses no plugins beyond plain Jekyll, has no Sass or JS build step, and needs no npm.

## Run it locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. The built site is written to `_site/`; upload that folder to any static host (GitHub Pages, Netlify, Cloudflare Pages).

## Where things live

| To change…                              | Edit                                  |
| --------------------------------------- | ------------------------------------- |
| Name, email, photo, links, home results | `_data/profile.yml`                   |
| Home page bio and tagline               | `index.md`                            |
| Resume: experience, education, skills   | `_data/cv.yml`                        |
| Case studies                            | `_projects/*.md`, one file each       |
| Navigation                              | `nav:` in `_config.yml`               |
| Colours, fonts, spacing                 | top of `assets/css/main.css`          |

### Adding a case study

Create `_projects/my-product.md`:

```markdown
---
title: Product name
summary: One-sentence description.
kind: shipped          # shipped | prototype | concept (sets the group and tag colour)
kind_label: 0→1 product
years: 2024–2025
order: 8               # position on the Work page
featured: true         # optional, also show on the home page
demo: https://…        # optional, adds a "Try the live demo" button
facts:                 # optional "at a glance" card
  - label: Role
    value: Product Manager
---

Body text in Markdown.
```

Prototypes (`kind: prototype`) also appear on the Resume page; give them a `tagline` and `resume_points`.

## Notes

- Light and dark themes follow the visitor's system setting. The toggle in the header overrides it, and the choice is remembered.
- The Resume page prints cleanly (header, footer and buttons are hidden in print).
- Set `url:` in `_config.yml` to the final domain before deploying, so canonical and social-preview links are absolute.
