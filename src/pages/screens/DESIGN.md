---
name: Educational Clarity
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#434655'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006686'
  on-secondary: '#ffffff'
  secondary-container: '#7ed4fd'
  on-secondary-container: '#005b78'
  tertiary: '#4e565b'
  on-tertiary: '#ffffff'
  tertiary-container: '#666f74'
  on-tertiary-container: '#e9f2f8'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c0e8ff'
  secondary-fixed-dim: '#7bd1fa'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d66'
  tertiary-fixed: '#dbe4ea'
  tertiary-fixed-dim: '#bfc8ce'
  on-tertiary-fixed: '#141d21'
  on-tertiary-fixed-variant: '#3f484d'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  h1:
    fontFamily: Lexend
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Lexend
    fontSize: 1.875rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Lexend
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: '0'
  body-lg:
    fontFamily: Lexend
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.75'
    letterSpacing: '0'
  body-base:
    fontFamily: Lexend
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.625'
    letterSpacing: '0'
  body-sm:
    fontFamily: Lexend
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-caps:
    fontFamily: Lexend
    fontSize: 0.75rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 3rem
  gutter: 1rem
  max-width: 1200px
---

## Brand & Style

The brand personality of this design system is encouraging, organized, and academic without being stuffy. It is designed specifically for a learning environment, where the UI acts as a quiet mentor—guiding the user's eye to the most important information without causing cognitive overload.

The style is **Minimalist with Corporate/Modern influences**. It prioritizes heavy white space to reduce "visual noise," allowing students to focus on code and concepts. By utilizing a structured grid and a restrained color palette, the system ensures that the interface remains predictable and accessible, which is essential for beginners learning complex technical subjects.

## Colors

This design system utilizes a "Blue-Scale" palette to evoke a sense of calm and focus. The primary blue is saturated enough to meet WCAG AA contrast ratios against white backgrounds for all interactive elements.

- **Primary (#2563EB):** Used for main actions, active states, and primary branding.
- **Secondary (#7DD3FC):** A soft sky blue used for decorative accents and light hover states.
- **Tertiary (#F0F9FF):** A "wash" color used for section backgrounds and card containers to create subtle grouping.
- **Neutral (#1E293B):** A deep slate used for maximum legibility in body text.

The background is kept pure white (#FFFFFF) to maximize contrast and maintain a "paper-like" feel conducive to reading long-form educational content.

## Typography

Typography is the most critical element of this design system. We use **Lexend**, a typeface specifically designed to reduce visual stress and improve reading proficiency.

- **Headlines:** Use a bold weight with slightly tighter letter spacing to create a strong visual hierarchy.
- **Body Text:** Set with generous line heights (1.625 - 1.75) to ensure that technical explanations are easy to scan.
- **Labels:** Small caps are used sparingly for category tags or "step" indicators in tutorials to differentiate them from instructional text.

All text must maintain a minimum contrast ratio of 4.5:1 against its background. For code blocks (common in React learning), use a standard monospace font like JetBrains Mono or Fira Code, integrated into the body-base sizing.

## Layout & Spacing

This design system uses a **Fixed Grid** model for desktop views to prevent line lengths from becoming too long, which is detrimental to reading retention. The content is centered with a max-width of 1200px.

The spacing rhythm is based on a **4px/8px scale**.

- Use `xl` (2rem) and `2xl` (3rem) for vertical rhythm between major sections.
- Use `md` (1rem) for internal padding within cards and components.
- Layouts should utilize a 12-column grid for complex dashboards, but 1-column (centered) or 2-column (sidebar + content) layouts are preferred for educational flow.

## Elevation & Depth

To maintain a clean, modern look, this design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Low-Contrast Outlines** to communicate hierarchy.

- **Level 0 (Background):** Pure white (#FFFFFF).
- **Level 1 (Cards/Containers):** Tertiary Blue (#F0F9FF) background with a subtle 1px border of Blue-100.
- **Level 2 (Interactive/Floating):** White background with a very soft, diffused ambient shadow (0px 4px 20px rgba(0, 0, 0, 0.05)) to indicate the element is clickable or raised.

Focus states for accessibility must use a prominent 2px solid primary blue outline with a 2px offset to ensure keyboard users can always identify their location.

## Shapes

The shape language is **Rounded**, communicating friendliness and safety.

- **Standard Elements:** Buttons, inputs, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Section containers and main content blocks use a 1rem (16px) radius.
- **Interactive Feedback:** Hover states should mirror the corner radius of the parent element exactly.

Avoid sharp corners as they feel too "aggressive" for an educational context. Avoid pill shapes for everything except status chips, as they can waste horizontal space in a text-heavy environment.

## Components

The components in this design system are built to be easily replicable using standard Tailwind CSS utility classes.

- **Buttons:**
  - _Primary:_ Solid Primary Blue, White text, bold weight.
  - _Secondary:_ Tertiary Blue background, Primary Blue text. No border.
- **Cards:**
  - Use a 1px border (#E2E8F0) and 0.5rem padding.
  - For "Learning Modules," add a top-accent border (4px) in Primary Blue.
- **Input Fields:**
  - White background, 1px Gray-300 border.
  - On focus: 1px Primary Blue border with a 3px soft blue outer glow (ring).
- **Chips/Badges:**
  - Used for "Completed," "In Progress," or "New."
  - Use high-saturation backgrounds with white text for maximum visibility.
- **Progress Bars:**
  - Use a thick 8px track (Tertiary Blue) with a Primary Blue fill to show course completion.
- **Code Snippets:**
  - Dark mode containers (#1E293B) even in the light theme to provide high-contrast separation from the instructional text.
