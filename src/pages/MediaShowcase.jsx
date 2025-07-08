import { Box, Grid, Typography, Paper, Chip } from '@mui/material';
import { Image } from '../components/media/Image';
import { useMediaAsset } from '../hooks/useMediaAsset';
import { designConfig } from "../theme/design-config";

const MediaShowcase = () => {
  const { logos, illustrations, placeholders } = useMediaAsset();

  // Helper to get the directory path from the first item in each category
  const getPathForSection = (items) => {
    const firstPath = Object.values(items)[0];
    return firstPath.split('/').slice(0, -1).join('/');
  };

  const renderSection = (title, items, gradient) => (
    <Box sx={{ mb: 6 }}>
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            background: gradient,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Chip
          label={getPathForSection(items)}
          variant="outlined"
          size="small"
          sx={{
            fontFamily: 'monospace',
            fontSize: "0.75rem",
            bgcolor: "background.paper",
          }}
        />
      </Box>

      <Grid container spacing={3}>
        {Object.entries(items).map(([key, src]) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={key}>
            <Paper
              className="modern-card"
              sx={{
                p: 3,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                ...(theme) => theme.mixins.glassmorphismStrong,
                borderRadius: designConfig.borderRadius.base,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  fontWeight: 600,
                  color: "text.primary",
                  textAlign: "center",
                }}
              >
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              </Typography>

              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "background.default",
                  borderRadius: designConfig.borderRadius.base,
                  p: 2,
                  mb: 2,
                  minHeight: 200,
                  position: "relative",
                  overflow: "hidden",
                  border: (theme) => `1px solid ${theme.palette.divider}`,
                }}
              >
                <Image
                  src={src}
                  alt={key}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    maxHeight: 180,
                    filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))",
                  }}
                />
              </Box>

              <Box
                sx={{
                  textAlign: "center",
                  p: 1,
                  bgcolor: "action.hover",
                  borderRadius: designConfig.borderRadius.small,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: 'monospace',
                    fontSize: "0.75rem",
                    color: "text.secondary",
                    wordBreak: "break-all",
                  }}
                >
                  {key}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ p: 4 }}>
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
          Media Assets Library
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          A comprehensive collection of logos, illustrations, and placeholder images for your application
        </Typography>
      </Box>

      {renderSection(
        '🎨 Logos',
        logos,
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      )}

      {renderSection(
        '🖼️ Illustrations',
        illustrations,
        "linear-gradient(135deg, #48bb78 0%, #38a169 100%)"
      )}

      {renderSection(
        '📷 Placeholders',
        placeholders,
        "linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)"
      )}

      {/* Stats Section */}
      <Box
        sx={{
          mt: 8,
          p: 4,
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)",
          borderRadius: designConfig.borderRadius.base,
          border: "1px solid rgba(102, 126, 234, 0.2)",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Asset Summary
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "primary.main" }}>
              {Object.keys(logos).length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Logo Variants
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "success.main" }}>
              {Object.keys(illustrations).length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Illustrations
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 700, color: "warning.main" }}>
              {Object.keys(placeholders).length}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Placeholders
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MediaShowcase;