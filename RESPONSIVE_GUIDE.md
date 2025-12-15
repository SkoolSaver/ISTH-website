# Responsive Design Guide

## Tailwind Responsive Breakpoints

Your breakpoints are configured as:

- `sm`: 640px (small devices)
- `md`: 768px (tablets)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large desktops)
- `2xl`: 1536px (extra large desktops)

## How to Use Responsive Classes

Tailwind uses a **mobile-first** approach. Base classes apply to mobile, and you add responsive prefixes for larger screens.

### Basic Syntax

```tsx
// Base (mobile) → md: (tablet) → lg: (desktop)
<div className="text-sm md:text-base lg:text-lg">Responsive text</div>
```

### Common Patterns

#### 1. Grid Layouts

```tsx
// 1 column on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
  {items.map(item => (
    <Item key={item.id} />
  ))}
</div>
```

#### 2. Flexbox Direction

```tsx
// Column on mobile, row on tablet+
<div className="flex flex-col md:flex-row gap-lg">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

#### 3. Spacing

```tsx
// Less padding on mobile, more on desktop
<div className="p-sm md:p-md lg:p-lg">Content</div>
```

#### 4. Visibility

```tsx
// Hidden on mobile, visible on tablet+
<div className="hidden md:block">
  Desktop only content
</div>

// Visible on mobile, hidden on desktop
<div className="block md:hidden">
  Mobile only content
</div>
```

#### 5. Text Sizing

```tsx
// Smaller on mobile, larger on desktop
<h1 className="text-2xl md:text-3xl lg:text-4xl">Responsive Heading</h1>
```

#### 6. Width/Height

```tsx
// Full width on mobile, constrained on desktop
<div className="w-full md:w-3/4 lg:w-1/2 mx-auto">Content</div>
```

## Real-World Examples

### Navigation Bar

```tsx
// Stack on mobile, horizontal on desktop
<nav className="flex flex-col md:flex-row gap-md md:gap-lg">
  <Link href="/">Home</Link>
  <Link href="/about">About</Link>
</nav>
```

### Card Grid

```tsx
// 1 column → 2 columns → 3 columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-lg">
  <Card />
  <Card />
  <Card />
</div>
```

### Hero Section

```tsx
// Centered text, different padding per breakpoint
<section className="text-center p-md md:p-lg lg:p-xl">
  <h1 className="text-3xl md:text-4xl lg:text-5xl mb-md">Welcome</h1>
  <p className="text-base md:text-lg lg:text-xl">Description</p>
</section>
```

### Sidebar Layout

```tsx
// Full width on mobile, sidebar on desktop
<div className="flex flex-col lg:flex-row">
  <aside className="w-full lg:w-1/4 p-md">Sidebar</aside>
  <main className="w-full lg:w-3/4 p-md">Main content</main>
</div>
```

## Best Practices

1. **Mobile-First**: Start with mobile styles, then add larger breakpoints
2. **Use consistent breakpoints**: Stick to `sm`, `md`, `lg` for consistency
3. **Test on real devices**: Use browser dev tools to test different screen sizes
4. **Don't overdo it**: Only add responsive classes where needed

## Quick Reference

```tsx
// Spacing
className = 'p-sm md:p-md lg:p-lg'

// Grid
className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

// Flex
className = 'flex flex-col md:flex-row'

// Text
className = 'text-sm md:text-base lg:text-lg'

// Visibility
className = 'hidden md:block' // Hide on mobile, show on tablet+
className = 'block md:hidden' // Show on mobile, hide on tablet+

// Width
className = 'w-full md:w-1/2 lg:w-1/3'
```
