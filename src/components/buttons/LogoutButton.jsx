import { StyledButton } from "./StyledButton";
import PropTypes from "prop-types";

export const LogoutButton = ({ isLoading, onClick, ...props }) => (
  <StyledButton
    variant="contained"
    color="warning"
    onClick={onClick}
    disabled={isLoading}
    data-testid="logout-button"
    {...props}
  >
    {props.children || "Logout"}
  </StyledButton>
);

LogoutButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

LogoutButton.defaultProps = {
  isLoading: false,
  onClick: () => {},
};

export default LogoutButton;
