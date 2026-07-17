# Design Spec: Unified Alignment & Article Grid Redesign

This document specifies the alignment and grid redesign for the Communication page (`app/communication/page.tsx`).

## Goal
Unify the layout grid margins across Header, Main Content, and Footer, and implement a grid layout of articles below the featured post.

---

## 1. Unified Sizing (w-full max-w-7xl mx-auto px-6 md:px-8)
- Update `components/Header.tsx`, `components/Footer.tsx`, and `app/communication/page.tsx` containers.
- Align Logo and Sidebar left edges vertically.
- Align Header search/profile icons and Article Card right edges vertically.

---

## 2. Article Grid Layout
- Display a Featured banner on top (retaining featuredNews data).
- Render a 3-column responsive regular article list grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`).
- Card layout:
  - Header: Star badge or Category badge in primary theme color.
  - Image: 192px height (`h-48`) object-cover with hover scaling.
  - Title: Line clamped to 2 lines (`line-clamp-2`), hover-highlight.
  - Summary: Line clamped to 3 lines (`line-clamp-3`).
  - Footer: Date on left, Views/Comments counts on right.

---

## 3. Accessibility & Icon Cleanup
- Eliminate vertical background colored bar graphic (`span`) next to "Thông báo nội bộ" and "Thông điệp Lãnh đạo" section headings.
- Restructure lists using semantic tags if applicable.
