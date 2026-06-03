---
name: newsletter-generator
description: "Generate a monthly newsletter in Docusaurus format with release information. Use when: creating news updates, documenting monthly extension releases, formatting release notes into newsletter structure with frontmatter, extension sections, callouts, and featured content."
argument-hint: "Provide month/year and release information"
user-invocable: true
---

# Newsletter Generator

Generate professionally formatted monthly newsletters for the AIR native extensions documentation site.

## When to Use

- Create a new monthly newsletter with multiple extension releases
- Document breaking changes, new features, or important announcements
- Compile release information into a structured news post with metadata
- Format diverse release notes into consistent newsletter sections

## What You Provide

Describe your newsletter with:
- **Month and year** (e.g., May 2026)
- **Release summary** (what was the focus/theme for the month)
- **Key focus areas** (2-3 bullet points of highlights)
- **Extension updates** (name, version, and what changed)
- **Important notices** (beta releases, migrations, breaking changes)
- **Author name** (defaults to `marchbold` if not specified)

## Procedure

### 1. Gather Release Information

Collect details for each extension:
- Extension name and icon/image reference
- Latest version number and release tag
- Brief description of what changed
- 2-5 bullet points of key updates or fixes
- Any code examples demonstrating new features

### 2. Structure the Newsletter

The generator creates this layout:

```
---
slug: YYYY-MM
title: Month Year
description: Extension Updates
image: images/adobeair.png
authors: [ name ]
tags: [newsletter, ...]
---

# Opening Section
> Release Theme

## Key Focus
- Bullet points of highlights

## Important Notices (if applicable)
:::info callouts with breaking changes/betas

<!-- truncate -->

## Extension Updates Summary
:::note sections with version info

## Individual Extension Sections
Headers with extension details, descriptions, and bullet updates

## Further Information
Footer with links and next steps
```

### 3. Customize Sections

- **Add code examples**: Include `\`\`\`actionscript` blocks for featured features
- **Include callouts**: Use `:::info`, `:::warning`, or `:::note` for important notices
- **Link to GitHub**: Reference release tags and documentation links
- **Add tags**: Include relevant tags in frontmatter (newsletter, extension names, features)

### 4. Generate & Preview

The newsletter will be created at:
```
news/YYYY-MM-DD-Month-news.md
```
(Use the publication date for the YYYY-MM-DD prefix)

Review these elements:
- YAML frontmatter has correct date and author
- Tags include `newsletter` plus extension names (e.g., `[newsletter, inappbilling, googleplay]`)
- `<!-- truncate -->` marker positions preview break correctly
- All extension names and versions are accurate
- Links point to correct GitHub repositories and documentation
- Code examples follow ActionScript conventions

## Example Input Format

```
Month/Year: May 2026
Focus: "Billing flows and Play Integrity"

Key Focus:
- Fix for restore purchases on Android Amazon
- New GooglePlay extension with Integrity API
- InAppBilling v19 beta with StoreKit 2

Extensions:
1. InAppBilling v18.1.1
   - Android Amazon restore purchases fix
   
2. GooglePlay v1.2.0
   - Google Play Integrity API support
   - New security verification features

Important: InAppBilling v19 beta migration to StoreKit 2
```

## Reference

- [Newsletter template](./assets/newsletter-template.md) — Copy this structure for consistency
- Existing newsletters: `news/` folder for examples and style guide
- Frontmatter format: Follow YAML structure with `slug`, `title`, `description`, `image`, `authors`, `tags`
  - `slug`: Month in YYYY-MM format (e.g., `2026-05` for May 2026)
  - `title`: Human-readable month and year (e.g., `May 2026`)
  - `tags`: Always include `newsletter`, plus extension names as lowercase tags (e.g., `[newsletter, inappbilling, googleplay, beta]`)

## Tips

- Keep extension descriptions brief (1-2 sentences)
- Lead with the most impactful change for each extension
- Use version numbers consistently (v1.2.0 format)
- Include 2-3 bulleted updates per extension for readability
- Test links before finalizing the newsletter
