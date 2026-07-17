# Honoring Hall Refactoring Implementation Plan (Card UI)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Honoring Hall leaderboard section in `app/competition/page.tsx` to match the custom vertical card UI from the user's reference image.

**Architecture:** Use Tailwind spacing tokens, semantic HTML (`ol` and `li` tags), a 3-column responsive grid layout, star badges for ranks, circular avatars with rank-colored border rings, and bottom grey achievement blocks.

**Tech Stack:** React, Next.js, Tailwind CSS, Lucide icons.

## Global Constraints
- Spacing must follow the 8px system strictly.
- Typography sizes and weights must establish clear visual hierarchy.
- Text contrast must adhere to WCAG AA requirements.

---

### Task 1: Refactor Honoring Hall Layout & Card UI in page.tsx

**Files:**
- Modify: `d:\demo\home\app\competition\page.tsx`

**Interfaces:**
- Consumes: `honorees` array defined at the top of `app/competition/page.tsx`
- Produces: Redesigned `#honoring` section DOM structure

- [ ] **Step 1: Replace old horizontal rows with a semantic `<ol>` grid and `<li>` cards**
  Update the honorees list layout:
  - Container tag: `<ol className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">`
  - Item tag: `<li key={person.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col items-center relative transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group" role="listitem">`

- [ ] **Step 2: Add the top-left rank badge inside each card**
  Add the header element showing the star icon and rank text:
  ```tsx
  <div className="flex items-center gap-3 w-full mb-6">
    <div className="bg-blue-50 dark:bg-blue-950/50 p-2.5 rounded-xl flex-shrink-0">
      <Star className="w-5 h-5 text-primary" />
    </div>
    <span className="text-base font-bold text-slate-800 dark:text-slate-100">
      Top {index + 1} Tháng 10
    </span>
  </div>
  ```

- [ ] **Step 3: Redesign avatar container to match the circular ring layout**
  Implement the circular avatar centered in the card with its rank ring styling. Use `rounded-full` on the image and `overflow-hidden` on the parent ring wrapper to ensure it is contained:
  ```tsx
  <div className="relative mx-auto mb-4">
    <div className={`rounded-full p-0.5 ring-4 overflow-hidden flex items-center justify-center ${
      index === 0 ? 'ring-amber-400' :
      index === 1 ? 'ring-slate-300' :
      'ring-orange-300'
    }`}>
      <Image 
        src={person.avatar} 
        alt={person.name} 
        width={96} 
        height={96} 
        className="rounded-full object-cover w-24 h-24" 
      />
    </div>
  </div>
  ```

- [ ] **Step 4: Centered name and role text**
  Add centered name and position description:
  ```tsx
  <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-1 text-center mt-2 group-hover:text-primary transition-colors">
    {person.name}
  </h4>
  <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-6">{person.role}</p>
  ```

- [ ] **Step 5: Implement bottom achievement box**
  Add the container block at the bottom of the card:
  ```tsx
  <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-2xl w-full text-center mt-auto">
    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">THÀNH TÍCH</p>
    <p className="text-primary dark:text-blue-400 font-bold text-sm leading-relaxed">{person.achievement}</p>
  </div>
  ```

- [ ] **Step 6: Run build check to verify compilation**
  Run: `npm run build`
  Expected: Compiled successfully.

- [ ] **Step 7: Commit changes**
  ```bash
  git add app/competition/page.tsx
  git commit -m "style: refactor honoring hall to match vertical card UI design reference"
  ```
