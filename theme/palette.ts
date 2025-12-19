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
    accent: string
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
 * Active colors: #1f2937 (dark gray), #dea01e (golden), #ffffff (white)
 * Inactive colors: #ffedcb (cream), #4c5666 (gray-blue)
 */
export const appPalette: ColorPalette = {
  primary: {
    main: '#dea01e', // Golden - Active color
    light: '#f4c430', // Light golden
    dark: '#1f2937', // Dark gray - Active color
  },
  secondary: {
    main: '#4c5666', // Gray-blue - Inactive color
    light: '#6b7a8f', // Light gray-blue
    dark: '#3a4451', // Dark gray-blue
  },
  accent: {
    main: '#dea01e', // Golden accent
    light: '#f4c430', // Light golden
    dark: '#b8860b', // Dark golden
  },
  background: {
    main: '#ffffff', // White - Active color
    secondary: '#ffedcb', // Cream - Inactive color
  },
  text: {
    main: '#1f2937', // Dark gray - Active color
    secondary: '#4c5666', // Gray-blue - Inactive color
    muted: '#6b7a8f', // Muted gray-blue
  },
  border: {
    main: '#4c5666', // Gray-blue - Inactive color
    light: '#ffedcb', // Cream - Inactive color (very light border)
    accent: '#4c5666', // Gray-blue - Inactive color
  },
  active: {
    main: '#1f2937', // Dark gray/charcoal
    accent: '#dea01e', // Golden/amber
    light: '#ffffff', // White
  },
  inactive: {
    main: '#ffedcb', // Light cream/beige
    secondary: '#4c5666', // Muted blue-gray
  },
}

/**
 * Alternative color palettes can be defined here
 * Example: darkPalette, lightPalette, brandPalette, etc.
 *
 * NOTE: darkPalette is defined below but NOT USED anywhere in the application.
 * All pages use appPalette (light theme) only.
 */

// // Example: Dark theme palette (NOT CURRENTLY USED - DO NOT USE)
// export const darkPalette: ColorPalette = {
//   primary: {
//     main: '#60a5fa',
//     light: '#93c5fd',
//     dark: '#3b82f6',
//   },
//   secondary: {
//     main: '#a78bfa',
//     light: '#c4b5fd',
//     dark: '#8b5cf6',
//   },
//   accent: {
//     main: '#34d399',
//     light: '#6ee7b7',
//     dark: '#10b981',
//   },
//   background: {
//     main: '#111827',
//     secondary: '#1f2937',
//   },
//   text: {
//     main: '#f9fafb',
//     secondary: '#d1d5db',
//     muted: '#9ca3af',
//   },
//   border: {
//     main: '#374151',
//     light: '#4b5563',
//   },
//   active: {
//     main: '#1f2937',
//     accent: '#dea01e',
//     light: '#ffffff',
//   },
//   inactive: {
//     main: '#ffedcb',
//     secondary: '#4c5666',
//   },
// }

// Export the currently active palette
// Change this to switch between palettes
export const activePalette = appPalette
