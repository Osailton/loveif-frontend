import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import { Container } from "@mui/material";

// Utils
import { getIFRNUrl } from "../utils/getIFRNUrl";

const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  const location = useLocation();
  const from = location.state?.from.pathname || "/profile";

  const [cookies, setCookie] = useCookies(["access_token", "refresh_token"]);

  const parameters = new URLSearchParams(window.location.search);
  const code = parameters.get("code");

  const getTurmasAnoLetivo = async (url) => {
    // Asynchronously call the API for the result
    const res = await fetch(url);

    // Turns the result into js
    const data = await res.json();

    console.log(data.matricula);

    setCookie("access_token", data.access_token, {
      path: "/",
    });
    setCookie("refresh_token", data.refresh_token, {
      path: "/",
    });
    localStorage.setItem("username", data.nome);

    window.location.replace("/");
  };

  useEffect(() => {
    // Build the URL
    if (code !== null) {
      const pointsURL = `${apiUrl}auth/register?code=${code}`;

      // Execute once this component is builded
      getTurmasAnoLetivo(pointsURL);
    }
  }, []);

  return (
    <Container align="center">
      <div>
        <a href={getIFRNUrl(from)}>
          <button>Efetuar Login via SUAP</button>
        </a>
      </div>
    </Container>
  );
};

export default Login;