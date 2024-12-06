# Theme Directory Documentation

This directory contains the theme configuration for the Material-UI (MUI) based application. The theme system provides consistent styling across the application with support for both light and dark modes.

## Files Overview

### `colors.js`
Contains color palette definitions for both light and dark modes. The colors are organized into:
- Primary colors
- Secondary colors
- Background colors
- Text colors
- Status colors (success, warning, error)

To modify colors:
1. Use MUI's color palettes (`blue`, `orange`, etc.) or define custom RGBA values
2. Adjust color intensity using array indices (e.g., `blue[600]` for main, `blue[400]` for light)
3. Use `darken()` function for dark mode variants

### `components.js`
Defines custom styling for MUI components. Key features:
- Global styling constants (e.g., `muiPixelMultiple = 8`)
- Disabled state styling (`disabledStyles` object)
- Component-specific overrides

To customize components:
1. Modify existing component styles in the `components` object
2. Add new component overrides following MUI's naming convention (`Mui{ComponentName}`)
3. Use theme-aware styling with `({ theme }) => ({})` syntax for dark/light mode support

### `shadows.js`
Defines shadow configurations for elevation in both modes:
- `lightShadows`: Array of 25 shadow definitions for light mode
- `darkShadows`: Array of 25 shadow definitions for dark mode
- Helper function to select appropriate shadow array based on theme mode

To modify shadows:
1. Adjust RGBA values in shadow strings
2. Modify shadow array length (must maintain same length in both modes)
3. Update shadow intensity by adjusting blur and spread values

### `theme.js`
Creates the MUI theme by combining all theme elements:
- Imports and merges colors, components, and shadows
- Sets global typography settings
- Defines shape defaults

To modify the theme:
1. Add new theme properties in `createAppTheme`
2. Modify existing theme properties
3. Import and use additional theme elements

### `themeContext.jsx`
Provides theme context and switching functionality:
- Manages theme mode state (light/dark)
- Persists theme preference in localStorage
- Provides theme toggle functionality

To modify theme context:
1. Add new theme-related context values
2. Modify theme switching logic
3. Add additional theme-related functionality

## Usage

```jsx
import { useTheme } from '../theme/themeContext';

const Component = () => {
  const { mode, toggleColorMode } = useTheme();

  return (
    <Button onClick={toggleColorMode}>
      Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
    </Button>
  );
};
```

## Making Changes

1. **Color Changes**:
   - Modify `lightColors` or `darkColors` in `colors.js`
   - Use MUI's color palettes or custom RGBA values
   - Test changes in both modes

2. **Component Styling**:
   - Find the component in `components.js`
   - Update the `styleOverrides` object
   - Use theme-aware styling for mode-specific changes

3. **Adding New Components**:
   ```javascript
   Mui{ComponentName}: {
     styleOverrides: {
       root: ({ theme }) => ({
         // your styles here
       })
     }
   }
   ```

4. **Theme Switching**:
   - Modify `themeContext.jsx` for custom switching logic
   - Add new theme-related functionality
   - Update persistence logic if needed

## Best Practices

1. Always test changes in both light and dark modes
2. Use theme-aware styling for color-sensitive components
3. Maintain consistent spacing using `muiPixelMultiple`
4. Follow MUI's component override naming conventions
5. Use RGBA colors for better opacity control
6. Test disabled states when modifying components

## Common Tasks

1. **Adding a New Color**:
   ```javascript
   // In colors.js
   export const lightColors = {
     newColor: {
       main: '#hexcode',
       light: '#hexcode',
       dark: '#hexcode',
     },
     // ...
   };
   ```

2. **Modifying Component Spacing**:
   ```javascript
   // In components.js
   MuiComponent: {
     styleOverrides: {
       root: {
         padding: muiPixelMultiple * 2,
         margin: muiPixelMultiple,
       }
     }
   }
   ```

3. **Adding Theme-Aware Styles**:
   ```javascript
   root: ({ theme }) => ({
     color: theme.palette.mode === 'dark'
       ? 'rgba(255, 255, 255, 0.9)'
       : 'rgba(0, 0, 0, 0.9)',
   })
   ```