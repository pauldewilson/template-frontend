import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
  Link,
} from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import storage from "../utils/storage";
import { LogoutButton, StyledButton } from "../components/buttons";
import config from "../utils/config";

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
    <Container maxWidth="md">
      <Box sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Box>
            <Typography variant="h1">Success Page</Typography>
            <Link onClick={() => navigate("/")}>Homepage</Link>
            <Typography variant="body1">
              You are logged in as{" "}
              <span style={{ fontWeight: "bold" }}>{user?.name}</span>
            </Typography>
          </Box>
          <StyledButton
            variant="contained"
            color="primary"
            onClick={() => navigate("/styles")}
            data-testid="logout-button"
          >
            Styles Page
          </StyledButton>
          {user && (
            <LogoutButton
              variant="contained"
              color="error"
              onClick={logout}
              data-testid="logout-button"
            >
              Logout
            </LogoutButton>
          )}
        </Box>

        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h2">Environment Variables</Typography>
          <Box
            component="pre"
            sx={{
              mt: 2,
              p: 2,
              bgcolor: "background.default",
              borderRadius: 1,
              overflow: "auto",
            }}
          >
            {JSON.stringify(envVars, null, 2)}
          </Box>
          <Typography variant="h2">src/utils/config.js</Typography>
          <Box
            component="pre"
            sx={{
              mt: 2,
              p: 2,
              bgcolor: "background.default",
              borderRadius: 1,
              overflow: "auto",
            }}
          >
            {JSON.stringify(config, null, 2)}
          </Box>
        </Paper>

        <Divider sx={{ my: 3 }} />

        <Paper sx={{ p: 3 }}>
          <Typography variant="h2">LocalStorage Contents</Typography>
          <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
            Storage Prefix:{" "}
            <span style={{ fontWeight: "bold" }}>{storage.getPrefix()}</span>
          </Typography>
          <Box
            component="pre"
            sx={{
              mt: 2,
              p: 2,
              bgcolor: "background.default",
              borderRadius: 1,
              overflow: "auto",
            }}
          >
            {JSON.stringify(localStorageItems, null, 2)}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Success;
