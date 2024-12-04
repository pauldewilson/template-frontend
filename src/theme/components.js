// Pixel multiple for spacing and sizing (mui uses 8px as base)
const muiPixelMultiple = 8;

const disabledStyles = {
  backgroundColor: "rgba(66, 66, 66, 0.04)",
  cursor: "not-allowed",
  borderColor: "rgba(55, 55, 55, 0.52)",
  textColor: ({ theme }) =>
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.25)"
      : "rgba(0, 0, 0, 0.25)",
};

export const components = {
  // Global styles
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        scrollbarColor: "#6b6b6b #2b2b2b",
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
          width: 8,
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
          borderRadius: 4,
          backgroundColor: "#6b6b6b",
          minHeight: 24,
        },
        "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
          backgroundColor: "#2b2b2b",
        },
      },
    },
  },
  // Box
  MuiBox: {
    styleOverrides: {
      root: {
        "&[data-testid]": {
          position: "relative",
        },
      },
    },
  },
  // Button
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        textTransform: "none",
        fontWeight: 600,
        padding: "8px 16px",
      },
    },
  },
  // Paper
  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        padding: 3 * muiPixelMultiple,
        marginBottom: 4 * muiPixelMultiple,
        backgroundColor: "background.paper",
      },
    },
  },
  // Container
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingTop: 24,
        paddingBottom: 24,
      },
    },
  },
  // Typography
  MuiTypography: {
    styleOverrides: {
      h1: {
        fontSize: "2.5rem",
        fontWeight: 700,
        marginBottom: "1rem",
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
        marginBottom: "0.875rem",
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 600,
        marginBottom: "0.75rem",
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        marginBottom: "0.75rem",
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
        marginBottom: "0.5rem",
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
        marginBottom: "0.5rem",
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.5,
        marginBottom: "1rem",
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.43,
        marginBottom: "0.75rem",
      },
      caption: {
        fontSize: "0.75rem",
        lineHeight: 1.66,
        fontWeight: 400,
      },
      subtitle1: {
        fontSize: "1rem",
        lineHeight: 1.75,
        fontWeight: 400,
      },
      subtitle2: {
        fontSize: "0.875rem",
        lineHeight: 1.57,
        fontWeight: 500,
      },
    },
  },
  // Form Related Components

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
      fullWidth: true,
      size: "medium",
    },
    styleOverrides: {
      root: ({ theme }) => ({
        "& .MuiFormLabel-root.Mui-disabled": {
          color: disabledStyles.textColor({ theme }),
        },
        "& .MuiInputLabel-root.Mui-disabled": {
          color: disabledStyles.textColor({ theme }),
        },
        "& .MuiOutlinedInput-root": {
          borderRadius: 4,
          "&.Mui-focused": {
            boxShadow: "0 0 0 2px rgba(0,0,0,0.05)",
          },
          "&.Mui-disabled": {
            backgroundColor: disabledStyles.backgroundColor,
            "& fieldset": {
              borderColor: disabledStyles.borderColor,
            },
            "& input": {
              cursor: disabledStyles.cursor,
              color: disabledStyles.textColor({ theme }),
              "&::placeholder": {
                color: disabledStyles.textColor({ theme }),
              },
            },
          },
        },
      }),
    },
  }, // Form Control
  MuiFormControl: {
    styleOverrides: {
      root: {
        width: "100%",
        marginBottom: 16,
      },
    },
  },
  // Form Label
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: "0.875rem",
        fontWeight: 500,
        "&.Mui-focused": {
          color: "inherit",
        },
        "&.Mui-disabled": {
          color: disabledStyles.textColor({ theme }),
        },
      }),
    },
  },
  // Form Helper Text
  MuiFormHelperText: {
    styleOverrides: {
      root: ({ theme }) => ({
        marginLeft: 0,
        fontSize: "0.75rem",
        "&.Mui-error": {
          color:
            theme.palette.mode === "dark"
              ? "rgba(255, 82, 82, 0.8)" // lighter red for dark mode
              : "rgba(211, 47, 47, 0.9)", // darker red for light mode
        },
        "&.Mui-disabled": {
          color: disabledStyles.textColor({ theme }),
        },
      }),
    },
  },
  // Input Base
  MuiInputBase: {
    styleOverrides: {
      root: {
        fontSize: "0.875rem",
      },
      input: {
        padding: "12px 16px",
        "&::placeholder": {
          opacity: 0.8,
        },
      },
    },
  },
  // Select Component
  MuiSelect: {
    defaultProps: {
      variant: "outlined",
    },
    styleOverrides: {
      root: {
        borderRadius: 4,
        "&.Mui-disabled": {
          backgroundColor: disabledStyles.backgroundColor,
          opacity: disabledStyles.opacity,
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: disabledStyles.borderColor,
          },
        },
      },
    },
  }, // Checkbox and Radio
  MuiCheckbox: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 8,
        "&.Mui-disabled": {
          color: disabledStyles.textColor({ theme }),
        },
      }),
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 8,
        "&.Mui-disabled": {
          color: disabledStyles.textColor({ theme }),
        },
      }),
    },
  },
  // Form Group (for checkboxes/radios)
  MuiFormGroup: {
    styleOverrides: {
      root: {
        marginBottom: 16,
      },
    },
  },
  // Input Adornment
  MuiInputAdornment: {
    styleOverrides: {
      root: ({ theme }) => ({
        color: theme.palette.text.primary,
        "& .MuiSvgIcon-root": {
          fontSize: "1.25rem",
        },
        "&.MuiInputAdornment-positionStart": {
          marginRight: 8,
        },
        "&.MuiInputAdornment-positionEnd": {
          marginLeft: 8,
        },
        ".Mui-disabled &": {
          opacity: disabledStyles.opacity,
          color: "rgba(0, 0, 0, 0.38)", // Lighter color for disabled state
        },
      }),
    },
  },
  // Alert - Additional properties
  MuiAlert: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        padding: "12px 16px",
      },
      standardError: {
        backgroundColor: "rgba(211, 47, 47, 0.1)",
      },
      standardWarning: {
        backgroundColor: "rgba(237, 108, 2, 0.1)",
      },
      standardInfo: {
        backgroundColor: "rgba(2, 136, 209, 0.1)",
      },
      standardSuccess: {
        backgroundColor: "rgba(46, 125, 50, 0.1)",
      },
      message: {
        padding: "8px 0",
        fontSize: "0.875rem",
      },
      icon: {
        fontSize: "20px",
      },
    },
  },
  // Grid Container & Item
  MuiGrid: {
    styleOverrides: {
      container: {
        marginTop: -8,
        marginBottom: -8,
      },
      item: {
        paddingTop: 8,
        paddingBottom: 8,
      },
    },
  },
  // CardContent
  MuiCardContent: {
    styleOverrides: {
      root: {
        padding: 24,
        "&:last-child": {
          paddingBottom: 24,
        },
      },
    },
  },
  // Card styles for form containers
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      },
    },
  },
  // Divider for form sections
  MuiDivider: {
    styleOverrides: {
      root: {
        margin: "24px 0",
      },
    },
  },
  // Switch component
  MuiSwitch: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 10,
        "&.Mui-disabled": {
          "& .MuiSwitch-track": {
            backgroundColor: `${disabledStyles.backgroundColor} !important`,
          },
          "& .MuiSwitch-thumb": {
            backgroundColor: disabledStyles.textColor({ theme }),
          },
        },
      }),
      track: {
        borderRadius: 4,
      },
      thumb: {
        borderRadius: 4,
      },
    },
  },
  // List items (for select options, etc.)
  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: 4,
        "&:hover": {
          backgroundColor: "rgba(0,0,0,0.04)",
        },
      },
    },
  },
  // Radio Group
  MuiRadioGroup: {
    styleOverrides: {
      root: {
        marginBottom: 16,
      },
    },
  },
  // Form Control Label
  MuiFormControlLabel: {
    styleOverrides: {
      root: ({ theme }) => ({
        marginLeft: -8,
        marginRight: 16,
        "&.Mui-disabled": {
          cursor: disabledStyles.cursor,
          "& .MuiTypography-root": {
            color: disabledStyles.textColor({ theme }),
          },
        },
        label: {
          fontSize: "0.875rem",
        },
      }),
    },
  },
  // MenuItem
  MuiMenuItem: {
    styleOverrides: {
      root: {
        minHeight: 42,
        padding: "8px 16px",
        fontSize: "0.875rem",
        "&.Mui-selected": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        },
      },
    },
  },
  // Link
  MuiLink: {
    styleOverrides: {
      root: {
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
};
