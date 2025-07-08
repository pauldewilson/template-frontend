import { Box, Grid, Paper, Typography } from "@mui/material";
import { designConfig } from "../theme/design-config";

export const ThemeShowcase = () => {
  const renderColorSection = (title, colors, description) => (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: "text.primary",
        }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: "text.secondary",
            maxWidth: "600px",
          }}
        >
          {description}
        </Typography>
      )}
      <Grid container spacing={3}>
        {colors.map((color, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              className="modern-card"
              sx={{
                ...color.sx,
                p: 3,
                borderRadius: designConfig.borderRadius.base,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                {color.name}
              </Typography>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                {color.token}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderShadowSection = () => (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: "text.primary",
        }}
      >
        Elevation & Shadows
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 3,
          color: "text.secondary",
          maxWidth: "600px",
        }}
      >
        Material Design elevation levels create depth and hierarchy in your interface.
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 4, 8, 12, 16].map((elevation) => (
          <Grid item xs={12} sm={6} md={4} key={elevation}>
            <Paper
              elevation={elevation}
              sx={{
                p: 4,
                borderRadius: designConfig.borderRadius.base,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 120,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Elevation {elevation}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                elevation={elevation}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderSpacingSection = () => (
    <Box sx={{ mb: 6 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: "text.primary",
        }}
      >
        Spacing System
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 3,
          color: "text.secondary",
          maxWidth: "600px",
        }}
      >
        Consistent spacing creates rhythm and visual harmony in your design.
      </Typography>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 6, 8].map((spacing) => (
          <Grid item xs={12} sm={6} md={4} key={spacing}>
            <Paper
              className="modern-card"
              sx={{
                p: 3,
                borderRadius: designConfig.borderRadius.base,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: spacing * 8,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: designConfig.borderRadius.base,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="caption" sx={{ color: "white", fontWeight: 600 }}>
                  {spacing * 8}px
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ textAlign: "center" }}>
                <strong>spacing({spacing})</strong>
                <br />
                <Typography variant="caption" color="text.secondary">
                  {spacing * 8}px
                </Typography>
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          Theme System
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Explore the comprehensive design system including colors, spacing, shadows, and typography
        </Typography>
      </Box>

      {/* Primary Colors */}
      {renderColorSection(
        "Primary Colors",
        [
          {
            name: "Primary Light",
            token: "primary.light",
            sx: { bgcolor: "primary.light", color: "primary.contrastText" },
          },
          {
            name: "Primary Main",
            token: "primary.main",
            sx: { bgcolor: "primary.main", color: "primary.contrastText" },
          },
          {
            name: "Primary Dark",
            token: "primary.dark",
            sx: { bgcolor: "primary.dark", color: "primary.contrastText" },
          },
        ],
        "Primary colors are used for key actions, navigation, and important interface elements."
      )}

      {/* Secondary Colors */}
      {renderColorSection(
        "Secondary Colors",
        [
          {
            name: "Secondary Light",
            token: "secondary.light",
            sx: { bgcolor: "secondary.light", color: "secondary.contrastText" },
          },
          {
            name: "Secondary Main",
            token: "secondary.main",
            sx: { bgcolor: "secondary.main", color: "secondary.contrastText" },
          },
          {
            name: "Secondary Dark",
            token: "secondary.dark",
            sx: { bgcolor: "secondary.dark", color: "secondary.contrastText" },
          },
        ],
        "Secondary colors provide accent and complementary styling options."
      )}

      {/* Status Colors */}
      {renderColorSection(
        "Status Colors",
        [
          {
            name: "Success",
            token: "success.main",
            sx: { bgcolor: "success.main", color: "white" },
          },
          {
            name: "Warning",
            token: "warning.main",
            sx: { bgcolor: "warning.main", color: "white" },
          },
          {
            name: "Error",
            token: "error.main",
            sx: { bgcolor: "error.main", color: "white" },
          },
          {
            name: "Info",
            token: "info.main",
            sx: { bgcolor: "info.main", color: "white" },
          },
        ],
        "Status colors communicate different states and provide user feedback."
      )}

      {/* Background Colors */}
      {renderColorSection(
        "Background & Surface",
        [
          {
            name: "Background Default",
            token: "background.default",
            sx: { bgcolor: "background.default", color: "text.primary", border: "1px solid", borderColor: "divider" },
          },
          {
            name: "Background Paper",
            token: "background.paper",
            sx: { bgcolor: "background.paper", color: "text.primary", border: "1px solid", borderColor: "divider" },
          },
          {
            name: "Text Primary",
            token: "text.primary",
            sx: { bgcolor: "background.paper", color: "text.primary", border: "1px solid", borderColor: "divider" },
          },
          {
            name: "Text Secondary",
            token: "text.secondary",
            sx: { bgcolor: "background.paper", color: "text.secondary", border: "1px solid", borderColor: "divider" },
          },
        ],
        "Background and text colors create the foundation of your interface."
      )}

      {/* Shadows */}
      {renderShadowSection()}

      {/* Spacing */}
      {renderSpacingSection()}

      {/* Typography Demo */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          Typography Scale
        </Typography>
        <Typography
          variant="body2"
          sx={{
            mb: 3,
            color: "text.secondary",
            maxWidth: "600px",
          }}
        >
          Responsive typography that scales beautifully across all devices.
        </Typography>
        <Paper
          className="modern-card"
          sx={{
            p: 4,
            borderRadius: designConfig.borderRadius.base,
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
            border: "1px solid rgba(102, 126, 234, 0.1)",
          }}
        >
          <Typography variant="h1" sx={{ mb: 2 }}>Heading 1</Typography>
          <Typography variant="h2" sx={{ mb: 2 }}>Heading 2</Typography>
          <Typography variant="h3" sx={{ mb: 2 }}>Heading 3</Typography>
          <Typography variant="h4" sx={{ mb: 2 }}>Heading 4</Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>Heading 5</Typography>
          <Typography variant="h6" sx={{ mb: 2 }}>Heading 6</Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Body 1: This is the main body text used for most content. It provides good readability and comfortable line spacing.
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Body 2: Slightly smaller body text for secondary content and supporting information.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Caption: Small text for labels, captions, and minor details.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ThemeShowcase;
