import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Link,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import storage from "../utils/storage";
import { LogoutButton, StyledButton } from "../components/buttons";
import config from "../utils/config";
import { designConfig } from "../theme/design-config";

export const Success = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Get all VITE_ environment variables
  const getEnvVars = () => {
    const vars = {};
    Object.entries(import.meta.env).forEach(([key, value]) => {
      vars[key] = value;
    });
    return vars;
  };

  // Get all localStorage items with our app prefix
  const getLocalStorageItems = () => {
    const items = {};
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith(storage.getPrefix())) {
        try {
          items[key] = JSON.parse(localStorage.getItem(key));
        } catch (e) {
          items[key] = localStorage.getItem(key);
        }
      }
    });
    return items;
  };

  const localStorageItems = getLocalStorageItems();
  const envVars = getEnvVars();

  return (
    <Container maxWidth="lg" className="section-container">
      {/* Header Section */}
      <Box sx={{ mb: 6 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 3,
            mb: 4,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Avatar
              sx={{
                width: 64,
                height: 64,
                bgcolor: "primary.main",
                fontSize: "1.5rem",
                fontWeight: 700,
              }}
            >
              {user?.name?.charAt(0) || "U"}
            </Avatar>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  mb: 1,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 700,
                }}
              >
                Welcome, {user?.name}!
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Dashboard Overview
              </Typography>
              <Chip
                label="Authenticated"
                color="success"
                size="small"
                sx={{ mt: 1 }}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Link
              onClick={() => navigate("/")}
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                alignSelf: "center",
              }}
            >
              ← Home
            </Link>
            <StyledButton
              variant="outlined"
              onClick={() => navigate("/showcases")}
              sx={{
                borderRadius: designConfig.borderRadius.base,
                fontWeight: 500,
              }}
            >
              🎨 Showcases
            </StyledButton>
            <LogoutButton
              variant="contained"
              color="error"
              onClick={logout}
              data-testid="logout-button"
                            sx={{
                borderRadius: designConfig.borderRadius.base,
                fontWeight: 600,
              }}
            >
              Sign Out
            </LogoutButton>
          </Box>
        </Box>
      </Box>

      {/* Quick Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Card
            className="modern-card"
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              borderRadius: designConfig.borderRadius.base,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" sx={{ mb: 1, opacity: 0.9 }}>
                User Status
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Active
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Successfully authenticated
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            className="modern-card"
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #48bb78 0%, #38a169 100%)",
              color: "white",
              borderRadius: designConfig.borderRadius.base,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" sx={{ mb: 1, opacity: 0.9 }}>
                Storage Items
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {Object.keys(localStorageItems).length}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Local storage entries
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card
            className="modern-card"
            sx={{
              p: 3,
              background: "linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)",
              color: "white",
              borderRadius: designConfig.borderRadius.base,
            }}
          >
            <CardContent sx={{ p: 0 }}>
              <Typography variant="h6" sx={{ mb: 1, opacity: 0.9 }}>
                Environment Variables
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {Object.keys(envVars).length}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Configuration values
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Environment Variables Section */}
      <Paper
        className="modern-card"
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          ...(theme) => theme.mixins.glassmorphismMedium,
          borderRadius: designConfig.borderRadius.base,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          Environment Configuration
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: "primary.main",
              fontWeight: 500,
            }}
          >
            Environment Variables
          </Typography>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              bgcolor: "background.default",
              borderRadius: designConfig.borderRadius.base,
              fontFamily: "monospace",
              fontSize: "0.875rem",
              maxHeight: "300px",
              overflow: "auto",
            }}
          >
            <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
              {JSON.stringify(envVars, null, 2)}
            </pre>
          </Paper>
        </Box>

        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              color: "primary.main",
              fontWeight: 500,
            }}
          >
            Configuration (src/utils/config.js)
          </Typography>
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              bgcolor: "background.default",
              borderRadius: designConfig.borderRadius.base,
              fontFamily: "monospace",
              fontSize: "0.875rem",
              maxHeight: "300px",
              overflow: "auto",
            }}
          >
            <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
              {JSON.stringify(config, null, 2)}
            </pre>
          </Paper>
        </Box>
      </Paper>

      {/* LocalStorage Section */}
      <Paper
        className="modern-card"
        elevation={0}
        sx={{
          p: 4,
          ...(theme) => theme.mixins.glassmorphismMedium,
          borderRadius: designConfig.borderRadius.base,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            color: "text.primary",
          }}
        >
          LocalStorage Data
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ mb: 2, color: "text.secondary" }}>
            Storage Prefix: <Chip label={storage.getPrefix()} size="small" variant="outlined" />
          </Typography>
        </Box>

        <Paper
          variant="outlined"
                      sx={{
              p: 3,
              bgcolor: "background.default",
              borderRadius: designConfig.borderRadius.base,
              fontFamily: "monospace",
              fontSize: "0.875rem",
              maxHeight: "400px",
              overflow: "auto",
            }}
          >
            <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
              {JSON.stringify(localStorageItems, null, 2)}
          </pre>
        </Paper>
      </Paper>
    </Container>
  );
};

export default Success;
