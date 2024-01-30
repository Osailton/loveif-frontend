import * as React from "react";

// Components
import { Button, Toolbar, Typography } from "@mui/material";
import { useCookies } from "react-cookie";

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "refresh_token",
  ]);

  function logout() {
    localStorage.clear();
    removeCookie("access_token");
    removeCookie("refresh_token");
  }
  return (
    <React.Fragment>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Button size="small">SUAP IFRN</Button>
        <Typography
          component="h3"
          variant="h3"
          color="primary"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Com Amor IF
        </Typography>
        <Typography sx={{pr: 2}} component="p" variant="p" color="primary">
          {localStorage.getItem("username")
            ? localStorage.getItem("username")
            : null}
        </Typography>
        {!cookies.access_token ? (
          <a href="/login">
            <Button sx={{ pr: 2 }} variant="outlined" size="small">
              Entrar
            </Button>
          </a>
        ) : (
          <Button
            sx={{ pr: 2 }}
            variant="outlined"
            size="small"
            onClick={logout}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
