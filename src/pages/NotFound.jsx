import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          py: 4,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Page Not Found</Typography>
        <Typography variant="body1">
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Return Home
        </Button>
      </Box>
    </Container>
  );
};
