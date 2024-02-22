import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { useAuth } from "../providers/AuthProvider";

// Utils
import { getIFRNUrl } from "../utils/getIFRNUrl";

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
          <button disabled={loading}>Efetuar Login via SUAP</button>
        </a>
      </div>
    </Container>
  );
};

export default Login;
