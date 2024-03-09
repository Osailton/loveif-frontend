import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { useAuth } from "../../providers/AuthProvider";

// Utils
import { getIFRNUrl } from "../../utils/getIFRNUrl";

const Login = () => {
  const location = useLocation();
  const from = location.state?.from.pathname || "/profile";

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  
  const parameters = new URLSearchParams(window.location.search);
  const code = parameters.get("code");

  const handleLogin = async (code) => {
    // calls the login hook
    setLoading(true);
    login(code);
  };

  useEffect(() => {
    // If it gets a code when rendered, it calls the login function
    if (code !== null) {
      // Execute once this component is built
      handleLogin(code);
    }
  }, []);

  return (
    <Container align="center">
      <div>
        <a href={getIFRNUrl(from)}>
          <Button variant="contained" disabled={loading}>Efetuar Login via SUAP</Button>
        </a>
      </div>
    </Container>
  );
};

export default Login;
