import { Button } from "@mui/material";
import PropTypes from "prop-types";

export const StyledButton = ({ isLoading, onClick, ...props }) => (
  <Button
    variant="outlined"
    color="secondary"
    onClick={onClick}
    disabled={isLoading}
    {...props}
  >
    {props.children}
  </Button>
);

StyledButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

StyledButton.defaultProps = {
  isLoading: false,
  onClick: () => {},
};

export default StyledButton;
