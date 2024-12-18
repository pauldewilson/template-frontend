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
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { LOGIN_FORM } from "../reducers/forms";
import { mockUsers } from "../data/mockUsers";
import { StyledButton, LoginButton, LogoutButton } from "../components/buttons";
import config from "../utils/config";

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
      <Container maxWidth="sm">
        <Box sx={{ py: 4, textAlign: 'center' }}>
          <Typography variant="h1">Already Logged In</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            You are currently logged in as {user.name}
          </Typography>
          <LogoutButton
            variant="contained"
            color="error"
            onClick={logout}
            disabled={isLoading}
            data-testid="logout-button"
          >
            Logout
          </LogoutButton>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          py: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h1">Login</Typography>
        {config.mockLogin && (
          <Alert severity="info">
            config.mockLogin is true.
          </Alert>
        )}
        <Link onClick={() => navigate("/")}>Homepage</Link>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <StyledButton
            variant="outlined"
            color="secondary"
            onClick={() => prefillMockUser(mockUsers.users[0])}
            disabled={isLoading}
            fullWidth
          >
            Fill form as Admin
          </StyledButton>
          <StyledButton
            variant="outlined"
            color="secondary"
            onClick={() => prefillMockUser(mockUsers.users[1])}
            disabled={isLoading}
            fullWidth
          >
            Fill form as User
          </StyledButton>
        </Stack>

        {error && <Alert severity="error">{error}</Alert>}
        <TextField
          label="Email"
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
        />
        <LoginButton
          type="submit"
          variant="contained"
          disabled={isLoading}
          startIcon={isLoading ? <CircularProgress size={20} /> : null}
          data-testid="login-button"
        >
          {isLoading ? "Logging in..." : "Login"}
        </LoginButton>
      </Box>
    </Container>
  );
};

export default Login;