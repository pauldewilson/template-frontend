import { useState } from "react";
import {
  Box,
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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import { LoginButton, LogoutButton, StyledButton } from "../components/buttons";
import { Search } from "@mui/icons-material";
import { designConfig } from "../theme/design-config";

export const StylesShowcase = () => {
  const [content, setContent] = useState({
    title: "Lorem Ipsum Showcase",
    subtitle: "A comprehensive display of styled components",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Click Me",
  });

  // Table state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const handleContentChange = (field) => (event) => {
    setContent((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  // Sample data for tables
  const tableData = [
    {
      id: 1,
      name: "John Doe",
      role: "Developer",
      status: "Active",
      department: "Engineering",
      joinDate: "2023-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer",
      status: "Away",
      department: "Design",
      joinDate: "2023-02-20",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Manager",
      status: "Active",
      department: "Management",
      joinDate: "2023-03-10",
    },
    {
      id: 4,
      name: "Sarah Williams",
      role: "Developer",
      status: "Offline",
      department: "Engineering",
      joinDate: "2023-04-05",
    },
    {
      id: 5,
      name: "Tom Brown",
      role: "Designer",
      status: "Active",
      department: "Design",
      joinDate: "2023-05-12",
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "Manager",
      status: "Away",
      department: "Management",
      joinDate: "2023-06-18",
    },
    {
      id: 7,
      name: "David Wilson",
      role: "Developer",
      status: "Active",
      department: "Engineering",
      joinDate: "2023-07-22",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      role: "Designer",
      status: "Offline",
      department: "Design",
      joinDate: "2023-08-30",
    },
  ];

  // Sorting handler
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Sort function
  const sortData = (data) => {
    return data.sort((a, b) => {
      if (order === "asc") {
        return a[orderBy] < b[orderBy] ? -1 : 1;
      } else {
        return a[orderBy] > b[orderBy] ? -1 : 1;
      }
    });
  };

  // Get current page data
  const getCurrentPageData = () => {
    const sorted = sortData([...tableData]);
    return sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  };

  return (
    <Box sx={{ p: 4 }}>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
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
          Component Styles
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          Interactive showcase of all styled components including forms, buttons, tables, and more
        </Typography>
      </Box>

      {/* Content Editor */}
      <Paper
        className="modern-card"
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          ...(theme) => theme.mixins.glassmorphismStrong,
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
      <Paper
        className="modern-card"
        elevation={0}
        sx={{
          p: 4,
          mb: 4,
          ...(theme) => theme.mixins.glassmorphismStrong,
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
          Paper Components
        </Typography>
        <Typography variant="body1" gutterBottom>
          This background is Paper.
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper elevation={1}>
              <Typography variant="h6" gutterBottom>
                Elevation 1
              </Typography>
              <Typography variant="body2">{content.body}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={4}>
              <Typography variant="h6" gutterBottom>
                Elevation 4
              </Typography>
              <Typography variant="body2">{content.body}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={8}>
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
            <Paper>
              <Typography variant="h6" gutterBottom>
                Square (No Border Radius)
              </Typography>
              <Typography variant="body2">{content.body}</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>

      {/* Typography Showcase */}
      <Paper>
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
      <Paper>
        <Typography variant="h2" gutterBottom>
          Buttons
        </Typography>

        {/* Standard Styled Buttons */}
        <Box sx={{ mb: 4 }}>
          {/* Outlined Group */}
          <Paper variant="outlined">
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
          <Paper variant="outlined">
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
        <Box sx={{ display: "flex", gap: 6 }}>
          {/* Special Outlined Group */}
          <Paper variant="outlined">
            <Typography variant="h3" gutterBottom>
              Special Buttons
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <LoginButton>Login Button</LoginButton>
              <LogoutButton>Logout Button</LogoutButton>
            </Box>
          </Paper>

          {/* Special Contained Group */}
        </Box>
      </Paper>

      {/* Form Elements */}
      <Paper className="p-6">
        <Typography variant="h2" className="mb-6 text-2xl font-bold">
          Form Elements
        </Typography>
        <Grid container spacing={6}>
          {/* Active Elements - Left Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="mb-4">
              Active Elements
            </Typography>
            <div className="space-y-4">
              <TextField
                label="Standard Input"
                placeholder="Placeholder text"
                className="w-full"
              />

              <TextField
                label="With Icon"
                className="w-full"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search className="h-4 w-4" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="With Error"
                error
                helperText="Error message here"
                className="w-full"
              />

              <FormControl className="w-full">
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

              <FormControlLabel
                control={<Checkbox />}
                label="Checkbox Example"
              />
              <FormControlLabel control={<Switch />} label="Switch Example" />

              <FormControl className="w-full">
                <Select defaultValue="option1">
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>

          {/* Disabled Elements - Right Column */}
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className="mb-4">
              Disabled Elements
            </Typography>
            <div className="space-y-4">
              <TextField
                label="Standard Input"
                placeholder="Placeholder text"
                className="w-full"
                disabled
              />

              <TextField
                label="With Icon"
                className="w-full"
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search className="h-4 w-4" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="With Error"
                error
                helperText="Error message here"
                className="w-full"
                disabled
              />

              <FormControl className="w-full" disabled>
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

              <FormControlLabel
                control={<Checkbox disabled />}
                label="Checkbox Example"
              />
              <FormControlLabel
                control={<Switch disabled />}
                label="Switch Example"
              />

              <FormControl className="w-full" disabled>
                <Select defaultValue="option1">
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Paper>

      {/* Alerts */}
      <Paper>
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
      <Paper>
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

      <Paper sx={{ mt: 4, p: 3 }}>
        <Typography variant="h2" gutterBottom>
          Tables
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Full-Featured Table
        </Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "name"}
                    direction={orderBy === "name" ? order : "asc"}
                    onClick={() => handleRequestSort("name")}
                  >
                    Name
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "role"}
                    direction={orderBy === "role" ? order : "asc"}
                    onClick={() => handleRequestSort("role")}
                  >
                    Role
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "status"}
                    direction={orderBy === "status" ? order : "asc"}
                    onClick={() => handleRequestSort("status")}
                  >
                    Status
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "department"}
                    direction={orderBy === "department" ? order : "asc"}
                    onClick={() => handleRequestSort("department")}
                  >
                    Department
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "joinDate"}
                    direction={orderBy === "joinDate" ? order : "asc"}
                    onClick={() => handleRequestSort("joinDate")}
                  >
                    Join Date
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getCurrentPageData().map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: "action.hover" },
                    "&:hover": { backgroundColor: "action.selected" },
                  }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        backgroundColor:
                          row.status === "Active"
                            ? "success.light"
                            : row.status === "Away"
                            ? "warning.light"
                            : "error.light",
                        color: "common.white",
                        px: 2,
                        py: 0.5,
                        borderRadius: designConfig.borderRadius.small,
                        display: "inline-block",
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>{row.joinDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={5}
                  count={tableData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>

        {/* Simple Table Example */}
        <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
          Simple Table
        </Typography>
        <TableContainer component={Paper} variant="outlined">
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.slice(0, 4).map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default StylesShowcase;
