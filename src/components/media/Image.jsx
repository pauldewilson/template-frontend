import { Box } from "@mui/material";
import PropTypes from "prop-types";

export const Image = ({
  src,
  alt,
  width,
  height,
  sx = {},
  fallback = "/assets/images/placeholders/image-fallback.svg",
  ...props
}) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.src = fallback;
      }}
      sx={{
        width,
        height,
        objectFit: "contain",
        ...sx,
      }}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  sx: PropTypes.object,
  fallback: PropTypes.string,
};
