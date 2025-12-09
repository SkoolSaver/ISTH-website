# Developer Guide

NOTE: after cloning the repo run npm install and restart the IDE to resolve linter errors

This guide provides comprehensive information about the project structure, development workflow, and best practices for working on this Next.js application with multiple developers.

## Table of Contents

1. [Directory Structure](#directory-structure)
2. [Creating New Pages](#creating-new-pages)
3. [Component Organization](#component-organization)
4. [Theme and Color References](#theme-and-color-references)
5. [Common Components](#common-components)
6. [Conflict Avoidance Guidelines](#conflict-avoidance-guidelines)
7. [Git Workflow and Branch Management](#git-workflow-and-branch-management)
8. [Best Practices](#best-practices)

## Directory Structure

```
ISTH/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Root home page
│   ├── api/                     # API routes
│   │   └── [feature]/           # Feature-based API routes
│   │       └── route.ts
│   ├── pages/                   # All application pages
│   │   └── [page-name]/         # Page-specific directories
│   │       ├── page.tsx         # Page component
│   │       └── components/      # Page-specific components
│   │           └── [Component].tsx
│   └── globals.css              # Global styles with theme variables
├── components/                   # Common/shared components
│   └── common/                  # Shared components used across pages
│       ├── ui/                  # Reusable UI components
│       │   ├── Button.tsx
│       │   └── index.ts
│       └── layout/              # Layout components
│           ├── Header.tsx
│           ├── Footer.tsx
│           └── index.ts
├── lib/                         # Utilities and configurations
│   ├── theme/                   # Theme configuration
│   │   ├── index.ts             # Theme exports
│   │   ├── tokens.ts            # Design tokens
│   │   └── palette.ts           # App color palette
│   ├── utils/                   # Utility functions
│   │   ├── cn.ts                # className utility
│   │   └── api.ts               # API utilities
│   └── constants/               # App constants
├── types/                       # TypeScript type definitions
│   └── index.ts                 # Shared types
├── hooks/                       # Custom React hooks
│   ├── useTheme.ts
│   └── index.ts
└── public/                      # Static assets
```

## Creating New Pages

### Step-by-Step Guide

1. **Create a new directory** in `app/pages/` with your page name (use kebab-case):

   ```
   app/pages/your-page-name/
   ```

2. **Create the page component**:

   ```
   app/pages/your-page-name/page.tsx
   ```

   Example:

   ```tsx
   export default function YourPageName() {
     return (
       <main className="min-h-screen p-md">
         <div className="max-w-7xl mx-auto">
           <h1 className="text-3xl font-bold text-primary">Your Page Title</h1>
         </div>
       </main>
     )
   }
   ```

3. **Create a components directory** for page-specific components:

   ```
   app/pages/your-page-name/components/
   ```

4. **Add page-specific components** in that directory:
   ```
   app/pages/your-page-name/components/YourComponent.tsx
   ```

### Example: Creating a "About" Page

```
app/
└── pages/
    └── about/
        ├── page.tsx
        └── components/
            ├── AboutHero.tsx
            ├── AboutTeam.tsx
            └── AboutMission.tsx
```

**app/pages/about/page.tsx:**

```tsx
import AboutHero from './components/AboutHero'
import AboutTeam from './components/AboutTeam'
import AboutMission from './components/AboutMission'

export default function About() {
  return (
    <main className="min-h-screen p-md">
      <AboutHero />
      <AboutMission />
      <AboutTeam />
    </main>
  )
}
```

**app/pages/about/components/AboutHero.tsx:**

```tsx
export default function AboutHero() {
  return (
    <section className="py-xl">
      <h1 className="text-4xl font-bold text-primary">About Us</h1>
    </section>
  )
}
```

## Component Organization

### Page-Specific Components

- **Location**: `app/pages/[page-name]/components/`
- **Purpose**: Components that are only used by a specific page
- **Naming**: Use descriptive names related to the page (e.g., `HomeCard`, `AboutHero`)
- **Import**: Import directly from the page's component directory
  ```tsx
  import HomeCard from './components/HomeCard'
  ```

### Common Components

- **Location**: `components/common/`
- **Purpose**: Components used across multiple pages
- **Structure**:
  - `components/common/ui/` - Reusable UI components (Button, Card, Input, etc.)
  - `components/common/layout/` - Layout components (Header, Footer, Sidebar)
- **Import**: Use path alias `@/components`
  ```tsx
  import { Button } from '@/components/common/ui'
  import { Header, Footer } from '@/components/common/layout'
  ```

### When to Use Each Type

- **Page-specific components**: Use when a component is only needed by one page
- **Common components**: Use when a component is needed by 2+ pages or might be reused

## Theme and Color References

### App Color Palette

The app color palette is centralized in **`lib/theme/palette.ts`**.

**To reference colors in your components:**

1. **Using Tailwind classes** (Recommended):

   ```tsx
   <div className="bg-primary text-white">
   <div className="bg-secondary-light border-border">
   <div className="text-text-secondary">
   ```

2. **Available color classes**:
   - Primary: `bg-primary`, `text-primary`, `border-primary`
     - Variants: `primary-light`, `primary-dark`
   - Secondary: `bg-secondary`, `text-secondary`, `border-secondary`
     - Variants: `secondary-light`, `secondary-dark`
   - Accent: `bg-accent`, `text-accent`, `border-accent`
     - Variants: `accent-light`, `accent-dark`
   - Background: `bg-background`, `bg-background-secondary`
   - Text: `text-text`, `text-text-secondary`, `text-text-muted`
   - Border: `border-border`, `border-border-light`

3. **Changing the app palette**:
   - Edit `lib/theme/palette.ts`
   - Update the `appPalette` object with your color values
   - The changes will automatically apply via CSS variables

### Design Tokens

Design tokens (spacing, typography, breakpoints) are in **`lib/theme/tokens.ts`**.

**Using design tokens:**

1. **Spacing** (via Tailwind):

   ```tsx
   <div className="p-md m-lg gap-xl">
   ```

   Available: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`

2. **Typography**:

   ```tsx
   <h1 className="text-2xl font-bold">
   <p className="text-base text-text-secondary">
   ```

3. **Border Radius**:
   ```tsx
   <div className="rounded-lg">
   ```

## Common Components

### Available Common Components

#### UI Components (`components/common/ui/`)

- **Button**: Reusable button component

  ```tsx
  import { Button } from '@/components/common/ui'
  ;<Button variant="primary" size="md" onClick={handleClick}>
    Click Me
  </Button>
  ```

#### Layout Components (`components/common/layout/`)

- **Header**: Site header/navigation

  ```tsx
  import { Header } from '@/components/common/layout'
  ;<Header />
  ```

- **Footer**: Site footer

  ```tsx
  import { Footer } from '@/components/common/layout'
  ;<Footer />
  ```

### Adding New Common Components

1. **Create the component** in the appropriate directory:
   - UI components → `components/common/ui/YourComponent.tsx`
   - Layout components → `components/common/layout/YourComponent.tsx`

2. **Export from index.ts**:

   ```tsx
   // components/common/ui/index.ts
   export { default as YourComponent } from './YourComponent'
   ```

3. **Use theme-aware styling**:
   ```tsx
   export default function YourComponent() {
     return <div className="bg-background text-text border-border">{/* Component content */}</div>
   }
   ```

## Conflict Avoidance Guidelines

### Directory Isolation Strategy

This project uses **page-based component isolation** to prevent merge conflicts:

1. **Each page has its own components directory**
   - `app/home/components/` - Only for home page
   - `app/about/components/` - Only for about page
   - `app/contact/components/` - Only for contact page

2. **Developers work in separate page directories**
   - Developer A works on `app/home/` and its components
   - Developer B works on `app/about/` and its components
   - No file conflicts!

### Best Practices for Avoiding Conflicts

1. **Never edit files outside your assigned page directory**
   - Exception: Common components (coordinate with team first)

2. **Coordinate on common components**
   - Before adding to `components/common/`, check with the team
   - Use pull requests for common component changes

3. **API routes are feature-based**
   - Each feature gets its own route: `app/api/[feature]/route.ts`
   - Work on different features = no conflicts

4. **Use path aliases consistently**
   - `@/components` - for common components
   - `@/lib` - for utilities
   - `@/types` - for types
   - `@/hooks` - for hooks

5. **Follow naming conventions**
   - Pages: kebab-case (`about-us`, `contact-form`)
   - Components: PascalCase (`AboutHero`, `ContactForm`)
   - Files: match component name

## Git Workflow and Branch Management

### Branch Structure

The repository uses a branch-based workflow to prevent merge conflicts and maintain code quality:

- **`main`**: Production-ready code and artifact fallback
  - **DO NOT edit directly**
  - Used as a stable reference point
  - Only updated via pull requests from other branches

- **Developer Branches**: Individual development branches
  - `anshu-dev`: Assigned to Anshu
  - `dhanraj-dev`: Assigned to Dhanraj
  - `aryan-dev`: Assigned to Aryan
  - Each developer works exclusively on their assigned branch

- **`deploy`**: Deployment branch
  - **DO NOT work on directly**
  - Managed via pull requests from other branches
  - Used for deployment-related changes and testing

### Getting Started

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone <repository-url>
   cd ISTH
   ```

2. **Switch to your assigned branch**:

   ```bash
   # For Anshu
   git checkout anshu-dev

   # For Dhanraj
   git checkout dhanraj-dev

   # For Aryan
   git checkout aryan-dev
   ```

3. **Pull the latest changes**:
   ```bash
   git pull origin <your-branch-name>
   ```

### Working on Your Assigned Branch

1. **Always work on your assigned branch**:

   ```bash
   # Make sure you're on your branch
   git checkout <your-branch-name>
   git status
   ```

2. **Create feature branches from your dev branch** (optional but recommended):

   ```bash
   git checkout -b feature/your-feature-name
   # Work on your feature
   git add .
   git commit -m "feat: add your feature"
   git push origin feature/your-feature-name
   ```

3. **Or work directly on your dev branch**:
   ```bash
   # Make your changes
   git add .
   git commit -m "feat: add your feature"
   git push origin <your-branch-name>
   ```

### Working on Assigned Features

- **Work within your assigned page directory** in `app/pages/`
- Each developer should focus on their assigned pages/features
- If you need to work on common components, coordinate with the team first
- Create pull requests when your feature is ready

### Pull Request Workflow

1. **Create a Pull Request** from your branch:
   - From your dev branch → `deploy` branch (for deployment)
   - From your dev branch → `main` branch (for production-ready code)
   - Use descriptive PR titles and descriptions

2. **Review Process**:
   - Wait for code review approval
   - Address any feedback
   - Once approved, the PR will be merged

### Deploy Branch Guidelines

- **Never commit directly to `deploy` branch**
- All changes to `deploy` must come via pull requests
- The `deploy` branch is used for:
  - Testing deployment configurations
  - Pre-production testing
  - Deployment-related changes

### Main Branch Guidelines

- **Never commit directly to `main` branch**
- `main` serves as an artifact fallback and stable reference
- Only updated via approved pull requests
- Contains production-ready, tested code

### Syncing with Main

If you need to sync your branch with the latest `main`:

```bash
# Switch to your branch
git checkout <your-branch-name>

# Fetch latest changes
git fetch origin

# Merge main into your branch
git merge origin/main

# Resolve any conflicts if they occur
# Then push your updated branch
git push origin <your-branch-name>
```

### Best Practices

1. **Commit frequently** with clear messages:

   ```bash
   git commit -m "feat: add contact form"
   git commit -m "fix: resolve styling issue"
   git commit -m "refactor: improve component structure"
   ```

2. **Pull before pushing** to avoid conflicts:

   ```bash
   git pull origin <your-branch-name>
   git push origin <your-branch-name>
   ```

3. **Keep your branch up to date**:
   - Regularly sync with `main` if needed
   - Communicate with the team about major changes

4. **Use descriptive branch names** for feature branches:
   ```bash
   feature/contact-page
   fix/navbar-styling
   refactor/theme-system
   ```

### Summary

- ✅ Work on your assigned branch (`anshu-dev`, `dhanraj-dev`, or `aryan-dev`)
- ✅ Work on assigned features within your branch
- ✅ Create pull requests to merge into `deploy` or `main`
- ❌ Never commit directly to `main` or `deploy`
- ❌ Don't work on other developers' assigned branches without coordination

## Best Practices

### Code Organization

1. **Keep page components in their page directory**

   ```tsx
   // ✅ Good
   app / pages / about / components / AboutHero.tsx

   // ❌ Bad
   components / about / AboutHero.tsx
   ```

2. **Use common components for shared functionality**

   ```tsx
   // ✅ Good - Reusable
   components / common / ui / Button.tsx

   // ❌ Bad - Duplicated
   app / home / components / Button.tsx
   app / about / components / Button.tsx
   ```

3. **Import with path aliases**

   ```tsx
   // ✅ Good
   import { Button } from '@/components/common/ui'
   import { palette } from '@/lib/theme'

   // ❌ Bad
   import { Button } from '../../../components/common/ui'
   ```

### Styling

1. **Always use theme colors** (never hardcode colors)

   ```tsx
   // ✅ Good
   <div className="bg-primary text-white">

   // ❌ Bad
   <div className="bg-blue-500 text-white">
   ```

2. **Use design tokens for spacing**

   ```tsx
   // ✅ Good
   <div className="p-md m-lg">

   // ❌ Bad
   <div className="p-4 m-6">
   ```

3. **Use the `cn` utility for conditional classes**

   ```tsx
   import { cn } from '@/lib/utils/cn'

   <div className={cn('base-class', condition && 'conditional-class')}>
   ```

### TypeScript

1. **Define types in `types/` directory**

   ```tsx
   // types/user.ts
   export interface User {
     id: string
     name: string
   }
   ```

2. **Use shared types from `types/index.ts`**

   ```tsx
   import { BaseComponentProps } from '@/types'
   ```

3. **Type your component props**
   ```tsx
   interface MyComponentProps {
     title: string
     count?: number
   }
   ```

### Git Workflow

1. **Create feature branches** for your page/feature

   ```
   git checkout -b feature/about-page
   ```

2. **Commit frequently** with clear messages

   ```
   git commit -m "feat: add about page with hero section"
   ```

3. **Pull before pushing** to avoid conflicts
   ```
   git pull origin main
   git push origin feature/about-page
   ```

## Quick Reference

### Creating a New Page

1. Create `app/pages/[page-name]/page.tsx`
2. Create `app/pages/[page-name]/components/` directory
3. Add page-specific components in that directory
4. Note: Routes will be `/pages/[page-name]` (e.g., `/pages/about`, `/pages/contacts`)

### Using Colors

- Use Tailwind classes: `bg-primary`, `text-secondary`, etc.
- Colors defined in `lib/theme/palette.ts`

### Using Common Components

- Import from `@/components/common/ui` or `@/components/common/layout`
- Check existing components before creating new ones

### Avoiding Conflicts

- Work in your assigned page directory within `app/pages/`
- Work on your assigned branch (`anshu-dev`, `dhanraj-dev`, or `aryan-dev`)
- Coordinate on common components
- Use separate feature branches
- All pages are organized under `app/pages/` to keep the structure clean

### Git Workflow

- Always work on your assigned developer branch
- Never commit directly to `main` or `deploy` branches
- Create pull requests to merge changes
- `deploy` branch is managed via PRs only
- `main` branch is an artifact fallback and should not be edited directly

## Questions?

If you have questions about the structure or workflow, please:

1. Check this guide first
2. Review existing code examples
3. Ask the team lead or project maintainer

Happy coding! 🚀
