import { useEffect, Fragment } from "react";
import { Button, Toolbar, Typography } from "@mui/material";
import { useAuth } from "../providers/AuthProvider";

const Header = () => {
  const { user, logout, getCurrentUser } = useAuth();

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleLogout = () => {
    logout();
    window.location.replace("/");
  };

  return (
    <Fragment>
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

        {user.roles.length <= 0 ? (
          <a href="/login">
            <Button sx={{ pr: 2 }} variant="outlined" size="small">
              Entrar
            </Button>
          </a>
        ) : (
          <>
            <Typography
              sx={{ pr: 2 }}
              component="p"
              variant="p"
              color="primary"
            >
              {user.username}
            </Typography>
            <Button
              sx={{ pr: 2 }}
              variant="outlined"
              size="small"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </Fragment>
  );
};

export default Header;
