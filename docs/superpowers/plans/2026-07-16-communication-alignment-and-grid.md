# Layout Alignment & Article Grid Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Synchronize margins and widths of Header, Footer, and Main Content, build a 3-column responsive regular article list grid, and clean up heading decorations.

**Architecture:** Use unified Tailwind alignment wrapper `w-full max-w-7xl mx-auto px-6 md:px-8` and render structured mock cards.

**Tech Stack:** React, Next.js, Tailwind CSS, Lucide icons.

## Global Constraints
- Unified padding classes: `w-full max-w-7xl mx-auto px-6 md:px-8`.
- Remove manual margins or extra paddings.
- No graphic colored spans or irrelevant icons in main titles.

---

### Task 1: Update Header, Footer, and Main Layout Wrappers

**Files:**
- Modify: `d:\demo\home\components\Header.tsx`
- Modify: `d:\demo\home\components\Footer.tsx`
- Modify: `d:\demo\home\app\communication/page.tsx`

**Interfaces:**
- Consumes: Tailwind wrapper styles
- Produces: Synced container widths

- [ ] **Step 1: Update components/Header.tsx container**
  Change the outer container inside header from `max-w-[1200px] mx-auto px-4` to `w-full max-w-7xl mx-auto px-6 md:px-8`.

- [ ] **Step 2: Update components/Footer.tsx container**
  Change the outer container inside footer from `max-w-[1200px] mx-auto px-4` to `w-full max-w-7xl mx-auto px-6 md:px-8`.

- [ ] **Step 3: Update app/communication/page.tsx main container**
  Change the `<main>` wrapper from `max-w-[1200px] mx-auto w-full px-4 py-6 sm:px-6 lg:px-8` to `w-full max-w-7xl mx-auto px-6 md:px-8 py-8`.

---

### Task 2: Build the Article Grid on the Communication Page

**Files:**
- Modify: `d:\demo\home\app\communication/page.tsx`

**Interfaces:**
- Consumes: `featuredNews` data
- Produces: Rendered featured banner and 3-column articles grid

- [ ] **Step 1: Define mock regularArticles array**
  Define a `regularArticles` array at the top of the file containing 3 technology/community-related articles with thumbnail images, category tags, titles, summaries, dates, views, and comments count.

- [ ] **Step 2: Build the grid component layout**
  Within the `news` section (when `activeSection === 'news'`), wrap layout in a vertical stack containing the hero banner at the top, and a grid of 3 columns (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`) showing regular cards below.

- [ ] **Step 3: Remove decorative icon span from other section headings**
  Remove the vertical color bar span element from `"Thông báo nội bộ"` and `"Thông điệp Lãnh đạo"` headers.

- [ ] **Step 4: Verify build compiles cleanly**
  Run: `npm run build`
  Expected: Successful compilation without errors.

- [ ] **Step 5: Commit changes**
  ```bash
  git add components/Header.tsx components/Footer.tsx app/communication/page.tsx
  git commit -m "style: unify layout alignment container and build article grid on communication page"
  ```
