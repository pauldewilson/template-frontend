// src/pages/StylesShowcase.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Grid,
  Alert,
  FormControlLabel,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  InputAdornment,
  Link,
} from "@mui/material";
import { LoginButton, LogoutButton, StyledButton } from "../components/buttons";
import { Search } from "@mui/icons-material";

export const StylesShowcase = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState({
    title: "Lorem Ipsum Showcase",
    subtitle: "A comprehensive display of styled components",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Click Me",
  });

  const handleContentChange = (field) => (event) => {
    setContent((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  return (
    <Container maxWidth="lg">
      {/* Content Editor */}
      <Link onClick={() => navigate("/")}>Homepage</Link>
      <br></br>
      <Link onClick={() => navigate("/success")}>Success</Link>
      <Paper sx={{ p: 3, mb: 4, mt: 4 }}>
        <Typography variant="h2" gutterBottom>
          Content Editor
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Title"
              value={content.title}
              onChange={handleContentChange("title")}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Subtitle"
              value={content.subtitle}
              onChange={handleContentChange("subtitle")}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Body Text"
              value={content.body}
              onChange={handleContentChange("body")}
              fullWidth
              multiline
              rows={2}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Button Text"
              value={content.buttonText}
              onChange={handleContentChange("buttonText")}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
      </Paper>
      {/* Paper Showcase */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Paper
        </Typography>
        <Typography variant="body1" gutterBottom>
          This background is Paper.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={1} sx={{ p: 3, bgcolor: "background.paper" }}>
              <Typography variant="h6" gutterBottom>
                Elevation 1
              </Typography>
              <Typography variant="body2">{content.body}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} sx={{ p: 3, bgcolor: "background.paper" }}>
              <Typography variant="h6" gutterBottom>
                Elevation 4
              </Typography>
              <Typography variant="body2">{content.body}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={8} sx={{ p: 3, bgcolor: "background.paper" }}>
              <Typography variant="h6" gutterBottom>
                Elevation 8
              </Typography>
              <Typography variant="body2">{content.body}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              variant="outlined"
              sx={{ p: 3, bgcolor: "background.paper" }}
            >
              <Typography variant="h6" gutterBottom>
                Outlined Variant
              </Typography>
              <Typography variant="body2">{content.body}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              square
              elevation={2}
              sx={{ p: 3, bgcolor: "background.paper" }}
            >
              <Typography variant="h6" gutterBottom>
                Square (No Border Radius)
              </Typography>
              <Typography variant="body2">{content.body}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Typography Showcase */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h1">Heading 1: {content.title}</Typography>
        <Typography variant="h2">Heading 2: {content.subtitle}</Typography>
        <Typography variant="h3">Heading 3: {content.subtitle}</Typography>
        <Typography variant="h4">Heading 4: {content.subtitle}</Typography>
        <Typography variant="h5">Heading 5: {content.subtitle}</Typography>
        <Typography variant="h6">Heading 6: {content.subtitle}</Typography>
        <Typography variant="body1" paragraph>
          body1: {content.body}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          body2: {content.body}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          subtitle1: {content.subtitle}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          subtitle2: {content.subtitle}
        </Typography>
      </Paper>

      {/* Buttons Showcase */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Buttons
        </Typography>

        {/* Standard Styled Buttons */}
        <Box sx={{ mb: 4 }}>
          {/* Outlined Group */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              flex: 1,
              mb: 3,
              bgcolor: "background.default",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Outlined
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <StyledButton variant="outlined" color="primary">
                {content.buttonText}
              </StyledButton>
              <StyledButton variant="outlined" color="secondary">
                {content.buttonText}
              </StyledButton>
              <StyledButton variant="outlined" color="success">
                {content.buttonText}
              </StyledButton>
              <StyledButton variant="outlined" color="warning">
                {content.buttonText}
              </StyledButton>
              <StyledButton variant="outlined" color="error">
                {content.buttonText}
              </StyledButton>
            </Box>
          </Paper>

          {/* Contained Group */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              flex: 1,
              bgcolor: "background.default",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Contained
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <StyledButton variant="contained" color="primary">
                {content.buttonText}
              </StyledButton>
              <StyledButton variant="contained" color="secondary">
                {content.buttonText}
              </StyledButton>
              <StyledButton variant="contained" color="success">
                {content.buttonText}
              </StyledButton>
              <StyledButton variant="contained" color="warning">
                {content.buttonText}
              </StyledButton>
              <StyledButton variant="contained" color="error">
                {content.buttonText}
              </StyledButton>
            </Box>
          </Paper>
        </Box>

        {/* Special Buttons */}
        <Typography variant="h3" gutterBottom>
          Special Buttons
        </Typography>
        <Box sx={{ display: "flex", gap: 6 }}>
          {/* Special Outlined Group */}
          <Paper
            variant="outlined"
            sx={{
              p: 3,
              flex: 1,
              bgcolor: "background.default",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <LoginButton>Login Button</LoginButton>
              <LogoutButton>Logout Button</LogoutButton>
            </Box>
          </Paper>

          {/* Special Contained Group */}
        </Box>
      </Paper>

      {/* Form Elements */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Form Elements
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Standard Input"
              placeholder="Placeholder text"
              fullWidth
              margin="normal"
            />
            <TextField
              label="With Icon"
              fullWidth
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="With Error"
              error
              helperText="Error message here"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth margin="normal">
              <FormLabel>Radio Group</FormLabel>
              <RadioGroup defaultValue="option1">
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Option 1"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio />}
                  label="Option 2"
                />
              </RadioGroup>
            </FormControl>
            <FormControlLabel control={<Checkbox />} label="Checkbox Example" />
            <FormControlLabel control={<Switch />} label="Switch Example" />
          </Grid>
        </Grid>
      </Paper>

      {/* Alerts */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Alerts
        </Typography>
        <Alert severity="error" sx={{ mb: 2 }}>
          This is an error alert
        </Alert>
        <Alert severity="warning" sx={{ mb: 2 }}>
          This is a warning alert
        </Alert>
        <Alert severity="info" sx={{ mb: 2 }}>
          This is an info alert
        </Alert>
        <Alert severity="success">This is a success alert</Alert>
      </Paper>

      {/* Cards */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Cards
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2">{content.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Card Title
                </Typography>
                <Typography variant="body2">{content.body}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>

      {/* Select */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h2" gutterBottom>
          Select
        </Typography>
        <FormControl fullWidth>
          <Select value="option1" displayEmpty>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Container>
  );
};

export default StylesShowcase;
