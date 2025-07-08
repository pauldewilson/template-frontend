import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoginButton, StyledButton, LogoutButton } from "../components/buttons";
import { designConfig } from "../theme/design-config";

export const Index = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <Container maxWidth="lg" className="hero-container">
      {/* Hero Section */}
      <Box
        className="hero-section"
        sx={{
          py: { xs: 6, md: 8 },
          textAlign: "center",
          background: (theme) => theme.mixins.gradientBackground.background,
          borderRadius: designConfig.borderRadius.base,
          color: "white",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            zIndex: 0,
          },
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              fontWeight: 700,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Welcome to the Future
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 5,
              opacity: 0.9,
              fontWeight: 400,
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.5,
            }}
          >
            A modern React template with authentication, theming, and beautiful UI components
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 3,
              justifyContent: "center",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {!user ? (
              <LoginButton
                className="hero-button"
                variant="contained"
                onClick={() => navigate("/login")}
                sx={{
                  background: "rgba(255, 255, 255, 0.2)",
                  color: "white",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.3)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)",
                  },
                }}
              >
                Get Started
              </LoginButton>
            ) : (
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
                <StyledButton
                  className="hero-button"
                  variant="contained"
                  onClick={() => navigate("/success")}
                  sx={{
                    background: "rgba(255, 255, 255, 0.2)",
                    color: "white",
                    border: "2px solid rgba(255, 255, 255, 0.3)",
                    backdropFilter: "blur(10px)",
                    "&:hover": {
                      background: "rgba(255, 255, 255, 0.3)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  Dashboard
                </StyledButton>
                <LogoutButton
                  variant="outlined"
                  onClick={logout}
                  data-testid="logout-button"
                  sx={{
                    color: "white",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      background: "rgba(255, 255, 255, 0.1)",
                    },
                  }}
                >
                  Sign Out
                </LogoutButton>
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      {/* Feature Cards Section */}
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          {user ? `Welcome back, ${user.name}!` : "Why Choose Our Template?"}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            mt: 4,
          }}
        >
          <Box
            className="modern-card"
            sx={{
              p: 4,
              textAlign: "center",
              bgcolor: "background.paper",
              borderRadius: designConfig.borderRadius.base,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              🎨 Modern Design
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Beautiful glassmorphism effects and modern UI components
            </Typography>
          </Box>

          <Box
            className="modern-card"
            sx={{
              p: 4,
              textAlign: "center",
              bgcolor: "background.paper",
              borderRadius: designConfig.borderRadius.base,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              🔐 Authentication
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Secure user authentication with protected routes
            </Typography>
          </Box>

          <Box
            className="modern-card"
            sx={{
              p: 4,
              textAlign: "center",
              bgcolor: "background.paper",
              borderRadius: designConfig.borderRadius.base,
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
              🎯 Responsive
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Fully responsive design that works on all devices
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
