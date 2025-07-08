import { useNavigate } from "react-router-dom";
import ThemeShowcase from "./ThemeShowcase";
import StylesShowcase from "./StylesShowcase";
import MediaShowcase from "./MediaShowcase";
import { Link, Container, Box, Typography, Paper, Breadcrumbs } from "@mui/material";
import { designConfig } from "../theme/design-config";

const Showcases = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="xl"
      sx={{
        // Responsive padding - minimal on mobile, more on larger screens
        py: { xs: 1, sm: 2, md: 3 },
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: { xs: 3, md: 6 } }}>
        <Breadcrumbs
          separator="/"
          sx={{
            mb: { xs: 2, md: 3 },
            "& .MuiBreadcrumbs-separator": { color: "text.secondary" },
          }}
        >
          <Link
            onClick={() => navigate("/")}
            sx={{
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
              cursor: "pointer",
            }}
          >
            Home
          </Link>
          <Link
            onClick={() => navigate("/success")}
            sx={{
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
              cursor: "pointer",
            }}
          >
            Dashboard
          </Link>
          <Typography color="text.primary">Showcases</Typography>
        </Breadcrumbs>

        <Typography
          variant="h1"
          sx={{
            mb: { xs: 1, md: 2 },
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
            textAlign: "center",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          }}
        >
          Component Showcases
        </Typography>

        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "text.secondary",
            maxWidth: "600px",
            mx: "auto",
            mb: { xs: 2, md: 4 },
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            px: { xs: 1, sm: 0 },
          }}
        >
          Explore the full range of components, themes, and styling options available in this template
        </Typography>
      </Box>

      {/* Theme Showcase Section */}
      <Paper
        className="modern-card"
        elevation={0}
        sx={{
          mb: { xs: 3, md: 6 },
          ...(theme) => theme.mixins.glassmorphismMedium,
          borderRadius: designConfig.borderRadius.base,
          overflow: "hidden",
          // Minimal padding on mobile
          p: { xs: 0, sm: 1, md: 2 },
        }}
      >
        <ThemeShowcase />
      </Paper>

      {/* Styles Showcase Section */}
      <Paper
        className="modern-card"
        elevation={0}
        sx={{
          mb: { xs: 3, md: 6 },
          ...(theme) => theme.mixins.glassmorphismMedium,
          borderRadius: designConfig.borderRadius.base,
          overflow: "hidden",
          // Minimal padding on mobile
          p: { xs: 0, sm: 1, md: 2 },
        }}
      >
        <StylesShowcase />
      </Paper>

      {/* Media Showcase Section */}
      <Paper
        className="modern-card"
        elevation={0}
        sx={{
          mb: { xs: 3, md: 6 },
          ...(theme) => theme.mixins.glassmorphismMedium,
          borderRadius: designConfig.borderRadius.base,
          overflow: "hidden",
          // Minimal padding on mobile
          p: { xs: 0, sm: 1, md: 2 },
        }}
      >
        <MediaShowcase />
      </Paper>

      {/* Footer */}
      <Box
        sx={{
          textAlign: "center",
          py: { xs: 2, md: 4 },
          px: { xs: 1, sm: 0 },
          color: "text.secondary",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem" },
          }}
        >
          These showcases demonstrate the full capabilities of the template components and theming system.
        </Typography>
      </Box>
    </Container>
  );
};

export default Showcases;
