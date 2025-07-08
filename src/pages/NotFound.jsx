import { Box, Typography, Container, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../components/buttons";
import { designConfig } from "../theme/design-config";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" className="hero-container">
      <Box
        sx={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          className="modern-card"
          elevation={0}
          sx={{
            p: 6,
            textAlign: "center",
            width: "100%",
            ...(theme) => theme.mixins.glassmorphismStrong,
            borderRadius: designConfig.borderRadius.base,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background decoration */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)",
              zIndex: 0,
            }}
          />

          <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* 404 Icon */}
            <Box
              sx={{
                mb: 4,
                position: "relative",
                display: "inline-block",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: "clamp(4rem, 12vw, 8rem)",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  mb: 0,
                  animation: "float 3s ease-in-out infinite",
                }}
              >
                404
              </Typography>

              {/* Floating decoration */}
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "120%",
                  height: "120%",
                  background: "radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)",
                  borderRadius: "50%",
                  animation: "pulse 2s ease-in-out infinite",
                  zIndex: -1,
                }}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                color: "text.primary",
              }}
            >
              Page Not Found
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 5,
                color: "text.secondary",
                maxWidth: "500px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              Oops! The page you&apos;re looking for seems to have wandered off into the digital void.
              Don&apos;t worry, let&apos;s get you back on track.
            </Typography>

            {/* Action buttons */}
            <Box
              sx={{
                display: "flex",
                gap: 3,
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <StyledButton
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: designConfig.borderRadius.base,
                  fontWeight: 600,
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                🏠 Return Home
              </StyledButton>

              <StyledButton
                variant="outlined"
                onClick={() => navigate(-1)}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: designConfig.borderRadius.base,
                  fontWeight: 600,
                  fontSize: "1rem",
                  borderColor: "primary.main",
                  color: "primary.main",
                  "&:hover": {
                    borderColor: "primary.dark",
                    backgroundColor: "primary.main",
                    color: "white",
                  },
                }}
              >
                ← Go Back
              </StyledButton>
            </Box>

            {/* Help text */}
            <Typography
              variant="body2"
              sx={{
                mt: 6,
                color: "text.secondary",
                opacity: 0.7,
              }}
            >
              If you believe this is an error, please contact support or try refreshing the page.
            </Typography>
          </Box>
        </Paper>
      </Box>

      {/* CSS animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }

          @keyframes pulse {
            0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
            50% { transform: translate(-50%, -50%) scale(1.05); opacity: 0.5; }
          }
        `}
      </style>
    </Container>
  );
};
