import { useNavigate } from "react-router-dom";
import ThemeShowcase from "./ThemeShowcase";
import StylesShowcase from "./StylesShowcase";
import { Link, Container } from "@mui/material";

const Showcases = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="lg">
      <Link onClick={() => navigate("/")}>Homepage</Link>
      <br></br>
      <Link onClick={() => navigate("/success")}>Success</Link>

      <ThemeShowcase />
      <StylesShowcase />
    </Container>
  );
};

export default Showcases;
