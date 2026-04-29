# Setup Design System in Tailwind CSS

Based on the Design System `Educational Clarity` (ID: `96b0c84b8400470c8e673520fcda34f6`), here is how you can integrate the design instructions into your Tailwind setup.

## 1. Import Fonts

The design system relies on the **Lexend** font family. Add this to your main CSS file (e.g., `src/index.css` or `src/globals.css`):

```css
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&display=swap');
```

## 2. Configure Tailwind Theme

You'll need to map the provided Design Tokens into your `tailwind.config.js`.
Here is the configuration based on the provided colors, typography, spacing, and border radius (rounded).

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f9f9ff',
        'surface-dim': '#cfdaf2',
        'surface-bright': '#f9f9ff',
        'surface-container-lowest': '#ffffff',
        'surface-container-low': '#f0f3ff',
        'surface-container': '#e7eeff',
        'surface-container-high': '#dee8ff',
        'surface-container-highest': '#d8e3fb',
        'on-surface': '#111c2d',
        'on-surface-variant': '#434655',
        'inverse-surface': '#263143',
        'inverse-on-surface': '#ecf1ff',
        outline: '#737686',
        'outline-variant': '#c3c6d7',
        'surface-tint': '#0053db',
        primary: '#004ac6',
        'on-primary': '#ffffff',
        'primary-container': '#2563eb',
        'on-primary-container': '#eeefff',
        'inverse-primary': '#b4c5ff',
        secondary: '#006686',
        'on-secondary': '#ffffff',
        'secondary-container': '#7ed4fd',
        'on-secondary-container': '#005b78',
        tertiary: '#4e565b',
        'on-tertiary': '#ffffff',
        'tertiary-container': '#666f74',
        'on-tertiary-container': '#e9f2f8',
        error: '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',
        'on-error-container': '#93000a',
        'primary-fixed': '#dbe1ff',
        'primary-fixed-dim': '#b4c5ff',
        'on-primary-fixed': '#00174b',
        'on-primary-fixed-variant': '#003ea8',
        'secondary-fixed': '#c0e8ff',
        'secondary-fixed-dim': '#7bd1fa',
        'on-secondary-fixed': '#001e2b',
        'on-secondary-fixed-variant': '#004d66',
        'tertiary-fixed': '#dbe4ea',
        'tertiary-fixed-dim': '#bfc8ce',
        'on-tertiary-fixed': '#141d21',
        'on-tertiary-fixed-variant': '#3f484d',
        background: '#f9f9ff',
        'on-background': '#111c2d',
        'surface-variant': '#d8e3fb',
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'], // Set as default sans
        lexend: ['Lexend', 'sans-serif'],
      },
      fontSize: {
        h1: [
          '2.25rem',
          { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        h2: [
          '1.875rem',
          { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        h3: [
          '1.5rem',
          { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' },
        ],
        'body-lg': [
          '1.125rem',
          { lineHeight: '1.75', letterSpacing: '0', fontWeight: '400' },
        ],
        'body-base': [
          '1rem',
          { lineHeight: '1.625', letterSpacing: '0', fontWeight: '400' },
        ],
        'body-sm': [
          '0.875rem',
          { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' },
        ],
        'label-caps': [
          '0.75rem',
          { lineHeight: '1', letterSpacing: '0.05em', fontWeight: '700' },
        ],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
      },
      spacing: {
        base: '4px',
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        gutter: '1rem',
        'max-width': '1200px',
      },
      boxShadow: {
        'level-2': '0px 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
```

## 3. Recommended Utility Classes from Design Guidelines

The guidelines also specify rules for buttons, cards, and elevation. You can add these directly to your main css file as `@apply` components, or use the utility classes.

```css
@layer components {
  /* Buttons */
  .btn-primary {
    @apply bg-primary text-on-primary px-lg py-sm rounded font-bold;
  }
  .btn-secondary {
    @apply bg-tertiary-container text-primary px-lg py-sm rounded font-bold;
  }

  /* Cards */
  .card-level-1 {
    @apply bg-surface-container-low border-outline-variant p-md rounded-lg border;
  }

  .card-learning-module {
    @apply card-level-1 border-t-primary border-t-4;
  }

  .card-level-2 {
    @apply bg-surface-container-lowest shadow-level-2 p-md rounded-lg;
  }

  /* Inputs */
  .input-field {
    @apply bg-surface-container-lowest border-outline-variant focus:border-primary focus:ring-primary-container focus:ring-opacity-50 rounded border focus:ring;
  }

  /* Focus States for Accessibility */
  .focus-accessible {
    @apply focus:ring-primary focus:ring-2 focus:ring-offset-2 focus:outline-none;
  }
}
```
