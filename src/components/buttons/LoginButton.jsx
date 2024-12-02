import { StyledButton } from "./StyledButton";
import PropTypes from "prop-types";

export const LoginButton = ({ isLoading, onClick, ...props }) => (
  <StyledButton
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={isLoading}
    data-testid="login-button"
    {...props}
  >
    {props.children || "Login"}
  </StyledButton>
);

LoginButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

LoginButton.defaultProps = {
  isLoading: false,
  onClick: () => {},
};

export default LoginButton;
