/**
 * App Color Palette
 * Centralized color palette configuration for the application.
 * This is where you store and manage the selected color palette for the app.
 * To change the app's color scheme, modify the values in the `appPalette` object.
 */

export interface ColorPalette {
  primary: {
    main: string
    light: string
    dark: string
  }
  secondary: {
    main: string
    light: string
    dark: string
  }
  accent: {
    main: string
    light: string
    dark: string
  }
  background: {
    main: string
    secondary: string
  }
  text: {
    main: string
    secondary: string
    muted: string
  }
  border: {
    main: string
    light: string
  }
  active: {
    main: string
    accent: string
    light: string
  }
  inactive: {
    main: string
    secondary: string
  }
}

/**
 * Default App Color Palette
 * Replace these values with your selected color palette
 */
export const appPalette: ColorPalette = {
  primary: {
    main: '#3b82f6',      // Blue
    light: '#60a5fa',     // Light blue
    dark: '#2563eb',      // Dark blue
  },
  secondary: {
    main: '#8b5cf6',      // Purple
    light: '#a78bfa',     // Light purple
    dark: '#7c3aed',      // Dark purple
  },
  accent: {
    main: '#10b981',      // Green
    light: '#34d399',     // Light green
    dark: '#059669',      // Dark green
  },
  background: {
    main: '#ffffff',      // White
    secondary: '#f9fafb', // Light gray
  },
  text: {
    main: '#111827',      // Dark gray/black
    secondary: '#6b7280', // Medium gray
    muted: '#9ca3af',     // Light gray
  },
  border: {
    main: '#e5e7eb',      // Light gray border
    light: '#f3f4f6',     // Very light gray border
  },
  active: {
    main: '#1f2937',      // Dark gray/charcoal
    accent: '#dea01e',    // Golden/amber
    light: '#ffffff',     // White
  },
  inactive: {
    main: '#ffedcb',      // Light cream/beige
    secondary: '#4c5666', // Muted blue-gray
  },
}

/**
 * Alternative color palettes can be defined here
 * Example: darkPalette, lightPalette, brandPalette, etc.
 */

// Example: Dark theme palette
export const darkPalette: ColorPalette = {
  primary: {
    main: '#60a5fa',
    light: '#93c5fd',
    dark: '#3b82f6',
  },
  secondary: {
    main: '#a78bfa',
    light: '#c4b5fd',
    dark: '#8b5cf6',
  },
  accent: {
    main: '#34d399',
    light: '#6ee7b7',
    dark: '#10b981',
  },
  background: {
    main: '#111827',
    secondary: '#1f2937',
  },
  text: {
    main: '#f9fafb',
    secondary: '#d1d5db',
    muted: '#9ca3af',
  },
  border: {
    main: '#374151',
    light: '#4b5563',
  },
  active: {
    main: '#1f2937',
    accent: '#dea01e',
    light: '#ffffff',
  },
  inactive: {
    main: '#ffedcb',
    secondary: '#4c5666',
  },
}

// Export the currently active palette
// Change this to switch between palettes
export const activePalette = appPalette