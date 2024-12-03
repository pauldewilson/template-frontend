import { Box, Grid, Typography, Paper } from '@mui/material';
import { Image } from '../components/media/Image';
import { useMediaAsset } from '../hooks/useMediaAsset';

const MediaShowcase = () => {
  const { logos, illustrations, placeholders } = useMediaAsset();

  // Helper to get the directory path from the first item in each category
  const getPathForSection = (items) => {
    const firstPath = Object.values(items)[0];
    return firstPath.split('/').slice(0, -1).join('/');
  };

  const renderSection = (title, items) => (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: 'monospace' }}>
          {getPathForSection(items)}
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {Object.entries(items).map(([key, src]) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle2" sx={{ mb: 1 }}>{key}</Typography>
              <Image
                src={src}
                alt={key}
                width="100%"
                height={200}
                sx={{ objectFit: 'contain' }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Paper sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>Media Assets Showcase</Typography>
      {renderSection('Logos', logos)}
      {renderSection('Illustrations', illustrations)}
      {renderSection('Placeholders', placeholders)}
    </Paper>
  );
};

export default MediaShowcase;