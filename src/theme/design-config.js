// Global design configuration
// This file contains all the core design values used throughout the application
// Modify these values to change the overall look and feel

export const designConfig = {
  // Border radius configuration
  borderRadius: {
    // Base border radius used for most components
    base: 2,
    // Larger radius for special components (hero sections, large cards)
    large: 4,
    // Small radius for compact components
    small: 1,
    // Full radius for circular elements
    full: 999,
  },

  // Spacing multiplier (follows Material-UI 8px base)
  spacing: {
    base: 8,
  },

  // Transition configuration
  transitions: {
    duration: {
      fast: 150,
      normal: 300,
      slow: 500,
    },
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Elevation/shadow configuration
  elevation: {
    subtle: 1,
    normal: 4,
    raised: 8,
    overlay: 16,
  },

  // Typography scale factors
  typography: {
    scaleRatio: 1.2,
  },
};

// Export individual values for convenience
export const { borderRadius, spacing, transitions, elevation, typography } = designConfig;

export default designConfig;