# Developer Guide

> **NOTE:** After cloning the repo, run `npm install` and restart the IDE to resolve linter errors.

This guide provides comprehensive information about the project structure, development workflow, and best practices for working on this Next.js application with multiple developers.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme System**: Centralized theme with app color palette

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
│   ├── api/                     # API routes (Next.js API endpoints)
│   │   ├── contact/             # Contact API endpoint
│   │   │   └── route.ts         # /api/contact
│   │   └── events/              # Events API endpoint
│   │       └── route.ts         # /api/events
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
├── theme/                       # Theme configuration (frontend)
│   ├── index.ts                 # Theme exports
│   ├── tokens.ts                # Design tokens (spacing, typography)
│   └── palette.ts               # App color palette
├── lib/                         # Utilities and configurations (backend-focused)
│   ├── api/                     # API infrastructure (shared utilities)
│   │   ├── types.ts             # API types and interfaces
│   │   ├── helpers.ts           # Helper functions for API routes
│   │   ├── client.ts             # API client for client-side requests
│   │   └── index.ts             # API module exports
│   ├── services/                # Business logic layer
│   │   └── index.ts             # Service exports
│   └── utils/                   # General utility functions
│       ├── cn.ts                # className utility
│       └── index.ts             # Utility exports
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

The app color palette is **centralized** in **`theme/palette.ts`**. All colors used throughout the application should reference this centralized palette to maintain consistency and make global color changes easy.

**⚠️ IMPORTANT: Never hardcode colors! Always use the centralized theme colors.**

### How to Use Theme Colors

There are three ways to use colors from the centralized palette:

#### Method 1: Tailwind Classes (Recommended) ⭐

This is the **preferred method** for most use cases. Tailwind classes automatically use the theme colors via CSS variables.

```tsx
// Background colors
<div className="bg-primary">Primary background</div>
<div className="bg-primary-light">Light primary background</div>
<div className="bg-primary-dark">Dark primary background</div>
<div className="bg-secondary">Secondary background</div>
<div className="bg-accent">Accent background</div>
<div className="bg-background">Main background</div>
<div className="bg-background-secondary">Secondary background</div>

// Text colors
<p className="text-primary">Primary text</p>
<p className="text-text">Main text color</p>
<p className="text-text-secondary">Secondary text</p>
<p className="text-text-muted">Muted text</p>

// Border colors
<div className="border border-primary">Primary border</div>
<div className="border border-border">Default border</div>
<div className="border border-border-light">Light border</div>
```

**Available Color Classes:**

| Color Category | Classes                                               | Variants                            |
| -------------- | ----------------------------------------------------- | ----------------------------------- |
| **Primary**    | `bg-primary`, `text-primary`, `border-primary`        | `primary-light`, `primary-dark`     |
| **Secondary**  | `bg-secondary`, `text-secondary`, `border-secondary`  | `secondary-light`, `secondary-dark` |
| **Accent**     | `bg-accent`, `text-accent`, `border-accent`           | `accent-light`, `accent-dark`       |
| **Background** | `bg-background`, `bg-background-secondary`            | -                                   |
| **Text**       | `text-text`, `text-text-secondary`, `text-text-muted` | -                                   |
| **Border**     | `border-border`, `border-border-light`                | -                                   |

**Example Usage:**

```tsx
// Button with primary color
<button className="bg-primary text-white hover:bg-primary-dark">
  Click Me
</button>

// Card with theme colors
<div className="bg-background border border-border rounded-lg p-lg">
  <h2 className="text-primary mb-md">Title</h2>
  <p className="text-text-secondary">Description</p>
</div>

// Accent highlight
<span className="text-accent font-bold">Important</span>
```

#### Method 2: CSS Variables (For Inline Styles)

When you need inline styles or dynamic styling, use CSS variables that reference the centralized palette.

```tsx
// Inline style with CSS variable
<div style={{ backgroundColor: 'var(--color-primary)' }}>
  Content
</div>

// Dynamic styling
<div style={{
  color: 'var(--color-text)',
  borderColor: 'var(--color-border)',
  padding: 'var(--spacing-md)'
}}>
  Content
</div>

// Using in CSS modules or styled components
const styles = {
  container: {
    backgroundColor: 'var(--color-background)',
    color: 'var(--color-text)',
  }
}
```

**Available CSS Variables:**

```css
/* Primary Colors */
--color-primary
--color-primary-light
--color-primary-dark

/* Secondary Colors */
--color-secondary
--color-secondary-light
--color-secondary-dark

/* Accent Colors */
--color-accent
--color-accent-light
--color-accent-dark

/* Background Colors */
--color-background
--color-background-secondary

/* Text Colors */
--color-text
--color-text-secondary
--color-text-muted

/* Border Colors */
--color-border
--color-border-light
```

#### Method 3: Import Palette Object (For Programmatic Use)

For dynamic color selection, conditional styling, or when you need to access palette values in JavaScript/TypeScript logic.

```tsx
import { palette, appPalette } from '@/theme'

// Access palette values programmatically
const primaryColor = palette.primary.main
const textColor = palette.text.main

// Use in component logic
function MyComponent() {
  const getButtonColor = (variant: string) => {
    switch (variant) {
      case 'primary':
        return palette.primary.main
      case 'secondary':
        return palette.secondary.main
      default:
        return palette.accent.main
    }
  }

  return <button style={{ backgroundColor: getButtonColor('primary') }}>Dynamic Button</button>
}

// Conditional styling based on palette
const isDark = palette.background.main === '#111827'
```

**Palette Structure:**

```tsx
import { palette } from '@/theme'

// Access colors like this:
palette.primary.main // '#dea01e'
palette.primary.light // '#f4c430'
palette.primary.dark // '#1f2937'
palette.secondary.main // '#4c5666'
palette.accent.main // '#dea01e'
palette.background.main // '#ffffff'
palette.text.main // '#1f2937'
palette.border.main // '#4c5666'
```

### Best Practices for Using Theme Colors

1. **✅ DO: Use Tailwind classes** for most styling

   ```tsx
   <div className="bg-primary text-white">Content</div>
   ```

2. **✅ DO: Use CSS variables** for inline styles or dynamic styling

   ```tsx
   <div style={{ color: 'var(--color-primary)' }}>Content</div>
   ```

3. **✅ DO: Import palette** when you need programmatic access

   ```tsx
   import { palette } from '@/theme'
   const color = palette.primary.main
   ```

4. **✅ DO: Work with existing palette colors only**

   ```tsx
   // ✅ Good - Uses available palette colors
   <div className="bg-primary text-text">Content</div>
   <div className="bg-accent-light border-border">Content</div>
   ```

5. **❌ DON'T: Hardcode colors**

   ```tsx
   // ❌ Bad - Hardcoded color
   <div className="bg-[#dea01e]">Content</div>
   <div style={{ color: '#1f2937' }}>Content</div>

   // ✅ Good - Uses theme
   <div className="bg-primary">Content</div>
   <div style={{ color: 'var(--color-text)' }}>Content</div>
   ```

6. **❌ DON'T: Use arbitrary Tailwind colors**

   ```tsx
   // ❌ Bad
   <div className="bg-blue-500 text-gray-800">

   // ✅ Good
   <div className="bg-primary text-text">
   ```

7. **❌ DON'T: Modify global CSS files**

   ```tsx
   // ❌ Bad - Don't edit app/globals.css
   // ❌ Bad - Don't add custom CSS variables
   // ❌ Bad - Don't override theme colors

   // ✅ Good - Use existing palette colors only
   <div className="bg-primary">Content</div>
   ```

8. **❌ DON'T: Modify the palette file**

   ```tsx
   // ❌ Bad - Don't edit theme/palette.ts
   // Changes affect the entire application and all developers
   // Coordinate with team lead first if new colors are needed
   ```

### Changing the App Palette

**⚠️ IMPORTANT: Only the project maintainer/lead should modify the global palette.**

For individual development work:

1. **Use existing palette colors** - All colors you need are already available in the palette
2. **Do NOT modify `app/globals.css`** - Global CSS is managed centrally
3. **Do NOT modify `theme/palette.ts`** - Palette changes affect the entire application
4. **Work with available colors** - Use the existing color classes and variants

**If you need a color that doesn't exist:**

- Coordinate with the team lead first
- Discuss in team meetings before making palette changes
- Palette modifications require approval and affect all developers

**For project maintainers only - To change colors globally:**

1. **Edit `theme/palette.ts`**:

   ```ts
   export const appPalette: ColorPalette = {
     primary: {
       main: '#your-color', // Change this
       light: '#your-light', // Change this
       dark: '#your-dark', // Change this
     },
     // ... update other colors
   }
   ```

2. **Update CSS variables in `app/globals.css`** (synchronized with palette):

   ```css
   --color-primary: #your-color;
   --color-primary-light: #your-light;
   --color-primary-dark: #your-dark;
   ```

3. **Changes apply automatically** - All components using theme colors will update globally

### Current Color Palette

**Active Colors:**

- Primary: `#dea01e` (Golden)
- Primary Dark: `#1f2937` (Dark Gray)
- Background: `#ffffff` (White)

**Inactive Colors:**

- Secondary: `#4c5666` (Gray-Blue)
- Background Secondary: `#ffedcb` (Cream)

See `theme/palette.ts` for the complete palette definition.

### Design Tokens

Design tokens (spacing, typography, breakpoints) are in **`theme/tokens.ts`**.

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
   import { palette } from '@/theme'

   // ❌ Bad
   import { Button } from '../../../components/common/ui'
   ```

### Styling

1. **Always use centralized theme colors** (never hardcode colors)

   ```tsx
   // ✅ Good - Uses centralized theme
   <div className="bg-primary text-white">
   <div style={{ color: 'var(--color-primary)' }}>
   import { palette } from '@/theme'; const color = palette.primary.main

   // ❌ Bad - Hardcoded colors
   <div className="bg-blue-500 text-white">
   <div className="bg-[#dea01e]">
   <div style={{ color: '#1f2937' }}>
   ```

   **Why?** Centralized colors in `theme/palette.ts` allow global color changes. Hardcoded colors break this system.

2. **Do NOT modify global CSS or palette files**

   ```tsx
   // ❌ Bad - Don't edit these files:
   // - app/globals.css (global CSS variables)
   // - theme/palette.ts (color palette)
   // - tailwind.config.ts (theme configuration)

   // ✅ Good - Work with existing palette colors only
   <div className="bg-primary text-text border-border">
   ```

   **Why?** Global changes affect all developers. Work individually with existing palette colors. Coordinate with team lead for palette modifications.

3. **Use design tokens for spacing**

   ```tsx
   // ✅ Good
   <div className="p-md m-lg">

   // ❌ Bad
   <div className="p-4 m-6">
   ```

4. **Use the `cn` utility for conditional classes**

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

## API Structure

### Overview

The API module provides centralized infrastructure for API operations. It consists of two main parts:

1. **`lib/api/`** - API Infrastructure (shared utilities)
2. **`app/api/`** - API Endpoints (Next.js routes)

### Architecture

The application uses a two-layer API architecture:

#### 1. `lib/api/` - API Infrastructure (Shared Utilities)

**Purpose:** Centralized API utilities used across the application

**Contains:**

- `types.ts` - TypeScript types and interfaces
- `helpers.ts` - Helper functions for API routes
- `client.ts` - API client for making requests from client components
- `index.ts` - Central exports

**Used by:**

- API routes in `app/api/` (import helpers)
- Client components (import API client)
- Services in `lib/services/` (import API client)

#### 2. `app/api/` - API Endpoints (Next.js Routes)

**Purpose:** Actual HTTP API endpoints

**Current endpoints:**

- `/api/contact` - Contact form submissions
- `/api/events` - Events management

**Structure:**

```
app/api/
├── contact/
│   └── route.ts    # Handles POST /api/contact
└── events/
    └── route.ts    # Handles GET, POST /api/events
```

### API Module Details

#### Types and Interfaces (`lib/api/types.ts`)

```ts
import type { ApiResponse, ApiError, PaginationParams } from '@/lib/api'

// ApiResponse<T> - Standard response format
const response: ApiResponse<User> = {
  success: true,
  data: userData,
  message: 'User retrieved',
}

// ApiError - Custom error class
throw new ApiError('User not found', 404)
```

#### Helper Functions (`lib/api/helpers.ts`)

**For API Routes:**

```ts
import { createSuccessResponse, handleApiError } from '@/lib/api'

export async function GET() {
  try {
    const data = await fetchData()
    return createSuccessResponse(data, 'Success message')
  } catch (error) {
    return handleApiError(error)
  }
}
```

**Available Helpers:**

- `createSuccessResponse<T>(data, message?, status?)` - Creates success response
- `createErrorResponse(error, statusCode, message?)` - Creates error response
- `handleApiError(error)` - Handles errors consistently
- `parseRequestBody<T>(request)` - Safely parses JSON request body
- `validateRequestBody<T>(body, validator)` - Validates request body

#### API Client (`lib/api/client.ts`)

**For Client Components:**

```tsx
'use client'
import { apiClient } from '@/lib/api'

// GET request
const response = await apiClient.get<User[]>('/api/users')

// POST request
const result = await apiClient.post('/api/contact', formData)

// PUT request
const updated = await apiClient.put(`/api/users/${id}`, userData)

// DELETE request
const deleted = await apiClient.delete(`/api/users/${id}`)
```

**Response Format:**

```ts
{
  success: boolean
  data?: T
  error?: string
  message?: string
}
```

### Creating a New API Endpoint

1. Create a new directory: `app/api/[feature]/`
2. Create `route.ts` file
3. Use helpers from `@/lib/api`:

```ts
// app/api/[feature]/route.ts
import { createSuccessResponse, handleApiError } from '@/lib/api'

export async function GET() {
  try {
    const data = {
      /* fetch data */
    }
    return createSuccessResponse(data)
  } catch (error) {
    return handleApiError(error)
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Process data
    return createSuccessResponse({ id: '123' }, 'Created', 201)
  } catch (error) {
    return handleApiError(error)
  }
}
```

### Using API from Client Components

```tsx
'use client'
import { apiClient } from '@/lib/api'

async function handleSubmit(formData: ContactFormData) {
  const response = await apiClient.post('/api/contact', formData)
  if (response.success) {
    console.log('Success:', response.data)
  } else {
    console.error('Error:', response.error)
  }
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

**Always use centralized theme colors - never hardcode colors!**

1. **Tailwind classes (Recommended)**: `bg-primary`, `text-secondary`, `border-accent`, etc.
2. **CSS variables**: `var(--color-primary)`, `var(--color-text)`, etc.
3. **Import palette**: `import { palette } from '@/theme'` for programmatic access

- Colors defined in `theme/palette.ts`
- All colors are centralized - changes in palette.ts apply globally
- **⚠️ Do NOT modify `app/globals.css` or `theme/palette.ts`** - Work with existing colors only
- See [Theme and Color References](#theme-and-color-references) for detailed usage

### Using Common Components

- Import from `@/components/common/ui` or `@/components/common/layout`
- Check existing components before creating new ones

### API Endpoints

**Available API endpoints:**

- `/api/contact` - Contact form submissions (POST, GET)
- `/api/events` - Events management (GET, POST)

**Using API infrastructure:**

- Import helpers: `import { createSuccessResponse } from '@/lib/api'`
- Use API client: `import { apiClient } from '@/lib/api'`
- See [API Structure](#api-structure) section above for detailed information

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
