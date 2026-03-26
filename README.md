# VB Portal - Kênh Thông Tin Nội Bộ Vietbank

Internal communication portal for Vietbank built with Next.js 15, React 19, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark Mode Support**: Full dark mode implementation
- **Modern UI Components**:
  - Header with search and notifications
  - Hero banner carousel
  - Leadership messages section
  - Community activities feed
  - Internal competition tracker
  - Useful shortcuts
  - Events calendar
  - Footer and mobile bottom navigation

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Icons**: Material Symbols

## Project Structure

```
home/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Header with navigation
│   ├── HeroBanner.tsx      # Hero banner section
│   ├── LeadershipMessages.tsx
│   ├── CommunityActivities.tsx
│   ├── InternalCompetition.tsx
│   ├── UsefulShortcuts.tsx
│   ├── EventsCalendar.tsx
│   ├── Footer.tsx
│   └── MobileBottomNav.tsx
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

**Note**: If you experience Turbopack errors (exit code 0xc0000142), use the regular webpack mode:
```bash
npm run dev
```

To use Turbopack (faster but may have compatibility issues):
```bash
npm run dev:turbo
```

### Build for Production

```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The primary color and background colors can be customized in `tailwind.config.ts`:

```typescript
colors: {
  primary: "#137fec",
  "background-light": "#f6f7f8",
  "background-dark": "#101922",
}
```

### Font

The project uses Manrope font from Google Fonts. This is configured in `app/layout.tsx`.

## Dark Mode

Dark mode is implemented using Tailwind's class-based dark mode. Toggle by adding/removing the `dark` class to the `<html>` element.

## Contributing

This is an internal project for Vietbank. Please follow the coding standards defined in `D:\demo\AGENTS.md`.

## License

Private - Vietbank Internal Use Only
