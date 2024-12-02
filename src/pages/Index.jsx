import { Box, Typography, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { LoginButton, StyledButton, LogoutButton } from "../components/buttons";

export const Index = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <Container maxWidth="sm">
      <Box sx={{ py: 4, textAlign: "center" }}>
        <Typography variant="h1">Welcome</Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          This is a modern React template with authentication and theming.
        </Typography>
        {!user ? (
          <LoginButton
            color="secondary"
            variant="contained"
            onClick={() => navigate("/login")}
            sx={{ mr: 2 }}
          >
            Login
          </LoginButton>
        ) : (
          <Box>
            <StyledButton
              variant="contained"
              onClick={() => navigate("/success")}
            >
              You're logged in - Go to Success Page
            </StyledButton>
            <LogoutButton
              variant="contained"
              color="error"
              onClick={logout}
              data-testid="logout-button"
            >
              Logout
            </LogoutButton>
          </Box>
        )}
      </Box>
    </Container>
  );
};
