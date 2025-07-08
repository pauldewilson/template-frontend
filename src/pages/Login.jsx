// Updated Login component
import {
  Box,
  Typography,
  TextField,
  Container,
  Alert,
  CircularProgress,
  Stack,
  Link,
  Paper,
  Divider,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { LOGIN_FORM } from "../reducers/forms";
import { mockUsers } from "../data/mockUsers";
import { StyledButton, LoginButton, LogoutButton } from "../components/buttons";
import config from "../utils/config";
import { designConfig } from "../theme/design-config";

export const Login = () => {
  const {
    state: { fields, error, isLoading },
    setField,
    setForm,
    setError,
    setLoading,
    clearError,
  } = useForm(LOGIN_FORM);

  const { login, logout, user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setLoading(true);

    try {
      const result = await login(fields.email, fields.password);
      if (!result.success) {
        setError(result.error || "Login failed. Please try again.");
      } else {
        const from = location.state?.from?.pathname || "/success";
        navigate(from);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const prefillMockUser = (user) => {
    setForm({
      email: user.email,
      password: user.password,
    });
  };

  if (user) {
    return (
      <Container maxWidth="sm" className="hero-container">
        <Box
          sx={{
            minHeight: "60vh",
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
                        ...(theme) => theme.mixins.glassmorphismMedium,
              borderRadius: designConfig.borderRadius.base,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 700,
              }}
            >
              Welcome Back!
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, color: "text.secondary" }}>
              You are currently logged in as <strong>{user.name}</strong>
            </Typography>
            <LogoutButton
              variant="contained"
              color="primary"
              onClick={logout}
              disabled={isLoading}
              data-testid="logout-button"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: designConfig.borderRadius.base,
                fontWeight: 600,
              }}
            >
              Sign Out
            </LogoutButton>
          </Paper>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" className="hero-container">
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
            width: "100%",
            ...(theme) => theme.mixins.glassmorphismStrong,
            borderRadius: designConfig.borderRadius.base,
          }}
        >
          <Box sx={{ textAlign: "center", mb: 4 }}>
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
              Sign In
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Enter your credentials to access your account
            </Typography>
          </Box>

          <Link
            onClick={() => navigate("/")}
            sx={{
              display: "inline-block",
              mb: 3,
              color: "primary.main",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            ← Back to Home
          </Link>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
            }}
          >
            {config.mockLogin && (
              <Alert
                severity="info"
                sx={{
                  borderRadius: designConfig.borderRadius.base,
                  "& .MuiAlert-message": { fontSize: "0.875rem" },
                }}
              >
                Mock login is enabled for testing purposes.
              </Alert>
            )}

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <StyledButton
                variant="outlined"
                color="secondary"
                onClick={() => prefillMockUser(mockUsers.users[0])}
                disabled={isLoading}
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: designConfig.borderRadius.base,
                  fontWeight: 500,
                }}
              >
                👤 Admin User
              </StyledButton>
              <StyledButton
                variant="outlined"
                color="secondary"
                onClick={() => prefillMockUser(mockUsers.users[1])}
                disabled={isLoading}
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: designConfig.borderRadius.base,
                  fontWeight: 500,
                }}
              >
                👥 Regular User
              </StyledButton>
            </Stack>

            <Divider sx={{ my: 1 }}>or</Divider>

            {error && (
              <Alert
                severity="error"
                sx={{
                  borderRadius: designConfig.borderRadius.base,
                  "& .MuiAlert-message": { fontSize: "0.875rem" },
                }}
              >
                {error}
              </Alert>
            )}

            <TextField
              label="Email Address"
              type="email"
              value={fields.email}
              onChange={(e) => setField("email", e.target.value)}
              fullWidth
              required
              disabled={isLoading}
              autoComplete="email"
              inputProps={{
                "data-testid": "email-input",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: designConfig.borderRadius.base,
                },
              }}
            />

            <TextField
              label="Password"
              type="password"
              value={fields.password}
              onChange={(e) => setField("password", e.target.value)}
              fullWidth
              required
              disabled={isLoading}
              autoComplete="current-password"
              inputProps={{
                "data-testid": "password-input",
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: designConfig.borderRadius.base,
                },
              }}
            />

            <LoginButton
              type="submit"
              variant="contained"
              disabled={isLoading}
              startIcon={isLoading ? <CircularProgress size={20} /> : null}
              data-testid="login-button"
              sx={{
                py: 1.5,
                borderRadius: designConfig.borderRadius.base,
                fontWeight: 600,
                fontSize: "1rem",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                "&:hover": {
                  background: "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                },
              }}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </LoginButton>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;