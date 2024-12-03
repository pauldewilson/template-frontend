import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, ThemeProvider } from './theme/ThemeContext';
import { AuthProvider } from './providers/AuthProvider';
import { Protectedroute } from './components/Protectedroute';
import { Index } from './pages/Index';
import { Login } from './pages/Login';
import { Success } from './pages/Success';
import { NotFound } from './pages/NotFound';
import Showcases from './pages/Showcases';

const ThemeToggle = () => {
  const { mode, toggleColorMode } = useTheme();
  return (
    <IconButton
      onClick={toggleColorMode}
      color="inherit"
      sx={{ position: 'fixed', top: 16, right: 16 }}
    >
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/showcases" element={<Showcases />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route
                path="/success"
                element={
                  <Protectedroute redirectTo="/">
                    <Success />
                  </Protectedroute>
                }
              />
            </Routes>
          </Box>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
