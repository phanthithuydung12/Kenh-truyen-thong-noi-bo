# Design Spec: Honoring Hall Refactoring (Option A - Card UI)

This document specifies the UX/UI refactoring of the "Vinh danh người NovaCore" (Honoring Hall) section in the Internal Competition page (`app/competition/page.tsx`) to match the custom card UI design.

## Goal
Improve accessibility (WCAG AA), enforce a strict 8px spacing system, enhance typography hierarchy, and implement the custom vertical card UI with:
- Top-left rank badge containing a star icon.
- Centered circular employee avatar with a rank-colored border ring.
- Centered typography for employee name and role.
- A prominent bottom container block showing the employee's achievement.

---

## 1. Visual Design & Spacing Refactorings

### Card Layout (Vertical Card UI)
- The honorees will be rendered as a grid of vertical cards instead of list rows.
- Parent grid: `grid grid-cols-1 md:grid-cols-3 gap-6`.
- Card wrapper classes:
  - `bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center relative transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group`

### Top Badge / Header inside the Card
- Left-aligned badge wrapper: `flex items-center gap-3 w-full mb-6`.
- Icon wrapper: `bg-blue-50 dark:bg-blue-950/50 p-2.5 rounded-xl flex-shrink-0`.
- Icon: `Star` icon with `w-5 h-5 text-primary`.
- Text: `"Top 1 Tháng 10"` (or `Top 2`, `Top 3`) styled as `text-base font-bold text-slate-800 dark:text-slate-100`.

### Centered Employee Avatar & Circular Clip Highlight
- Avatar is fully circular (`rounded-full`), centered, and clipped to stay strictly inside the ring.
- Wrapper classes: `relative mx-auto mb-4`.
- Ring container: `rounded-full p-0.5 ring-4 overflow-hidden flex items-center justify-center` with:
  - **Rank 1 (Gold)**: `ring-amber-400`
  - **Rank 2 (Silver)**: `ring-slate-300`
  - **Rank 3 (Bronze)**: `ring-orange-300`
- Image classes: `rounded-full object-cover w-24 h-24` (No border on image itself, letting it fit perfectly and seamlessly inside the outer ring).

### Centered Typography
- **Employee Name**: `font-bold text-xl text-slate-900 dark:text-white mb-1 text-center mt-2`.
- **Employee Role**: `text-sm text-slate-500 dark:text-slate-400 text-center mb-6`.

### Achievement Block (Bottom of Card)
- Container classes: `bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl w-full text-center mt-auto`.
- Achievement label: `"THÀNH TÍCH"` (`text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5`).
- Achievement description: `text-primary dark:text-blue-400 font-bold text-sm leading-relaxed text-center`.

---

## 2. Accessibility (WCAG AA Compliance)
- Replace any low-contrast yellow/grey text to meet the 4.5:1 ratio requirement.
- Use semantic `<ol>` (ordered list) and `<li>` (list item) tags for the grid layout.
- Include proper `aria-label` attributes for assistive technologies (e.g. `aria-label="Hạng 1: Huy chương Vàng"`).

---

## 3. Responsive Layout
- Responsive layout handles single-column stack on mobile, shifting to 3-column layout on medium screens and larger (`md:grid-cols-3`).

---

## 4. Verification Plan
- Run `npm run build` to ensure the type-checking and page generation completes successfully.
- Visit `/competition` to visually inspect that the cards match the layout, alignment, and circular ring design.
