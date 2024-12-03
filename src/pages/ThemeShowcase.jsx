import { Box, Grid, Paper, Typography } from "@mui/material";

export const ThemeShowcase = () => {
  return (
    <Paper>
      {/* Colors Showcase */}
      <Paper>
        <Typography variant="h2" gutterBottom>
          Theme Colors
        </Typography>

        {/* Primary Colors */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Primary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  bgcolor: "primary.main",
                  p: 3,
                  color: "primary.contrastText",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1">Primary Main</Typography>
                <Typography variant="caption">primary.main</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  bgcolor: "primary.light",
                  p: 3,
                  color: "primary.contrastText",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1">Primary Light</Typography>
                <Typography variant="caption">primary.light</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  bgcolor: "primary.dark",
                  p: 3,
                  color: "primary.contrastText",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1">Primary Dark</Typography>
                <Typography variant="caption">primary.dark</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Secondary Colors */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Secondary
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  bgcolor: "secondary.main",
                  p: 3,
                  color: "secondary.contrastText",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1">Secondary Main</Typography>
                <Typography variant="caption">secondary.main</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  bgcolor: "secondary.light",
                  p: 3,
                  color: "secondary.contrastText",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1">Secondary Light</Typography>
                <Typography variant="caption">secondary.light</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper
                sx={{
                  bgcolor: "secondary.dark",
                  p: 3,
                  color: "secondary.contrastText",
                  mb: 1,
                }}
              >
                <Typography variant="subtitle1">Secondary Dark</Typography>
                <Typography variant="caption">secondary.dark</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Background & Text Colors */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" gutterBottom>
            Background & Text
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Paper sx={{ bgcolor: "background.default", p: 3, mb: 1 }}>
                <Typography variant="subtitle1">Background Default</Typography>
                <Typography variant="caption">background.default</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ bgcolor: "background.paper", p: 3, mb: 1 }}>
                <Typography variant="subtitle1">Background Paper</Typography>
                <Typography variant="caption">background.paper</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 3, mb: 1 }}>
                <Typography variant="subtitle1" color="text.primary">
                  Text Primary
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Text Secondary
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Status Colors */}
        <Box>
          <Typography variant="h3" gutterBottom>
            Status Colors
          </Typography>
          <Grid container spacing={2}>
            {/* Success Colors */}
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Success
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{
                      bgcolor: "success.light",
                      p: 3,
                      color: "#fff",
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1">Success Light</Typography>
                    <Typography variant="caption">success.light</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{ bgcolor: "success.main", p: 3, color: "#fff", mb: 1 }}
                  >
                    <Typography variant="subtitle1">Success Main</Typography>
                    <Typography variant="caption">success.main</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{ bgcolor: "success.dark", p: 3, color: "#fff", mb: 1 }}
                  >
                    <Typography variant="subtitle1">Success Dark</Typography>
                    <Typography variant="caption">success.dark</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            {/* Warning Colors */}
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Warning
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{
                      bgcolor: "warning.light",
                      p: 3,
                      color: "#fff",
                      mb: 1,
                    }}
                  >
                    <Typography variant="subtitle1">Warning Light</Typography>
                    <Typography variant="caption">warning.light</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{ bgcolor: "warning.main", p: 3, color: "#fff", mb: 1 }}
                  >
                    <Typography variant="subtitle1">Warning Main</Typography>
                    <Typography variant="caption">warning.main</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{ bgcolor: "warning.dark", p: 3, color: "#fff", mb: 1 }}
                  >
                    <Typography variant="subtitle1">Warning Dark</Typography>
                    <Typography variant="caption">warning.dark</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            {/* Error Colors */}
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Error
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{ bgcolor: "error.light", p: 3, color: "#fff", mb: 1 }}
                  >
                    <Typography variant="subtitle1">Error Light</Typography>
                    <Typography variant="caption">error.light</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{ bgcolor: "error.main", p: 3, color: "#fff", mb: 1 }}
                  >
                    <Typography variant="subtitle1">Error Main</Typography>
                    <Typography variant="caption">error.main</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={3}>
                  <Paper
                    sx={{ bgcolor: "error.dark", p: 3, color: "#fff", mb: 1 }}
                  >
                    <Typography variant="subtitle1">Error Dark</Typography>
                    <Typography variant="caption">error.dark</Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>

        {/* Real-world Usage Examples */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3" gutterBottom>
            Color Combinations
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "background.paper",
                  border: 1,
                  borderColor: "primary.main",
                }}
              >
                <Typography variant="h6" color="primary.main" gutterBottom>
                  Primary with Background
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shows how primary color works with background and text
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "secondary.main",
                  color: "secondary.contrastText",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Secondary Background
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Shows text contrast on secondary background
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper
                sx={{
                  p: 3,
                  background: (theme) =>
                    `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                }}
              >
                <Typography variant="h6" sx={{ color: "#fff" }} gutterBottom>
                  Gradient Example
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#fff", opacity: 0.9 }}
                >
                  Shows how colors can be combined
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {/* Shadows Showcase */}
      <Paper>
        <Typography variant="h2" gutterBottom>
          Shadows
        </Typography>
        <Grid container spacing={3}>
          {[1, 4, 8, 12, 16, 24].map((elevation) => (
            <Grid item xs={12} sm={6} md={4} key={elevation}>
              <Paper
                elevation={elevation}
                sx={{
                  p: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 100,
                }}
              >
                <Typography>Elevation {elevation}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Spacing Showcase */}
      <Paper>
        <Typography variant="h2" gutterBottom>
          Spacing
        </Typography>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 8, 10].map((spacing) => (
            <Grid item xs={12} sm={6} md={3} key={spacing}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: spacing * 8,
                    bgcolor: "primary.main",
                    borderRadius: 1,
                  }}
                />
                <Typography variant="caption">
                  spacing({spacing}) = {spacing * 8}px
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Border Radius Showcase */}
      <Paper>
        <Typography variant="h2" gutterBottom>
          Border Radius
        </Typography>
        <Grid container spacing={3}>
          {[0, 1, 2, 4, 8, 12, 16, "50%"].map((radius) => (
            <Grid item xs={6} sm={4} md={3} key={radius}>
              <Paper
                sx={{
                  p: 2,
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: 100,
                    bgcolor: "secondary.main",
                    borderRadius: radius,
                    mb: 1,
                  }}
                />
                <Typography variant="caption">
                  borderRadius: {radius}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Paper>
  );
};

export default ThemeShowcase;
