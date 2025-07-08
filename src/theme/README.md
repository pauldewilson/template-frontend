# Theme System Documentation

This directory contains the theme configuration for the Material-UI (MUI) based application. The theme system provides consistent styling across the application with support for both light and dark modes.

## Files Overview

### `design-config.js`
**Central design configuration file** - Contains all global design values used throughout the theme.

- **Border Radius**: Global border radius values (base: 2px, small: 1px, large: 4px, full: 999px)
- **Transitions**: Animation timing and easing functions
- **Spacing**: Base spacing unit (8px)
- **Typography**: Font scale and weights
- **Elevation**: Shadow levels for depth

```javascript
// Example usage
borderRadius: designConfig.borderRadius.base  // 2px
```

### `theme.js`
**Main theme creator** - Combines all theme elements and creates the MUI theme.

- Imports design configuration and applies it globally
- Creates glassmorphism mixins for modern UI effects
- Defines typography scales and breakpoints
- Provides layout utilities (flexbox, grid, spacing)

### `components.js`
**Component styling overrides** - Customizes MUI components with consistent styling.

- Global styling for all MUI components
- Applies design-config values for consistency
- Handles disabled states and theme-aware styling
- **Note**: Hover effects are minimal and only used on truly interactive elements

### `colors.js`
**Color palette definitions** - Separate color schemes for light and dark modes.

- Primary, secondary, and accent colors
- Background and surface colors
- Text colors with proper contrast ratios
- Status colors (success, warning, error)

### `shadows.js`
**Elevation system** - Shadow definitions for creating depth.

- 25 shadow levels for both light and dark modes
- Consistent shadow progression
- Theme-aware shadow intensity

### `themeContext.jsx`
**Theme provider and mode switcher** - Manages theme state and switching.

- Provides theme context to the entire app
- Handles light/dark mode switching
- Persists theme preference in localStorage

## Recent Changes

### Border Radius Configuration
- **Global border radius set to 2px** (was 12px)
- All components now use `designConfig.borderRadius.base`
- Consistent across buttons, cards, form fields, and all UI elements

### Hover Effects Cleanup
- **Removed excessive hover effects** that were causing mobile UX issues
- Hover effects now **only on buttons and truly interactive elements**
- No more distracting card movements or form field jumps
- Improved mobile experience (no stuck hover states)

### Theme Mixins
- **Glassmorphism effects** with theme-aware backgrounds
- **Layout utilities** for modern responsive design
- **Spacing utilities** for consistent component spacing

## Usage Examples

### Using Design Config
```javascript
import { designConfig } from '../theme/design-config';

// Apply consistent border radius
sx={{ borderRadius: designConfig.borderRadius.base }}

// Use consistent transitions
sx={{ transition: `all ${designConfig.transitions.duration.normal}ms` }}
```

### Theme-Aware Styling
```javascript
// Using theme mixins
sx={(theme) => ({
  ...theme.mixins.glassmorphismStrong,
  ...theme.mixins.flexCenter,
})}

// Theme-aware colors
sx={{
  bgcolor: 'background.paper',
  color: 'text.primary',
}}
```

### Theme Context
```javascript
import { useTheme } from '../theme/themeContext';

const Component = () => {
  const { mode, toggleColorMode } = useTheme();

  return (
    <Button onClick={toggleColorMode}>
      {mode === 'light' ? '🌙' : '☀️'}
    </Button>
  );
};
```

## Best Practices

1. **Always use design-config values** instead of hardcoded measurements
2. **Test in both light and dark modes** before committing changes
3. **Use theme-aware styling** for colors and backgrounds
4. **Keep hover effects minimal** - only on buttons and interactive elements
5. **Use glassmorphism mixins** for modern UI effects
6. **Follow the 8px spacing system** from design-config

## Common Tasks

### Adding a New Component Style
```javascript
// In components.js
MuiNewComponent: {
  styleOverrides: {
    root: {
      borderRadius: designConfig.borderRadius.base,
      padding: designConfig.spacing.base * 2,
    }
  }
}
```

### Creating Theme-Aware Backgrounds
```javascript
// Use existing mixins
sx={(theme) => theme.mixins.glassmorphismMedium}

// Or create custom theme-aware styling
sx={(theme) => ({
  bgcolor: theme.palette.mode === 'light'
    ? 'rgba(255, 255, 255, 0.9)'
    : 'rgba(30, 30, 30, 0.9)'
})}
```

### Adding Interactive Hover Effects
```javascript
// Only for truly interactive elements
sx={(theme) => ({
  ...theme.mixins.subtleHover,  // Subtle 1px movement
  cursor: 'pointer',
})}
```

## File Dependencies

```
design-config.js (base configuration)
    ↓
theme.js (main theme) + components.js (component overrides)
    ↓
colors.js + shadows.js (visual styling)
    ↓
themeContext.jsx (theme provider)
```