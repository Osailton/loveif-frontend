import { useState } from "react";

// Components
import { Toolbar, Link, Button, Menu, MenuItem } from "@mui/material";
import { useCookies } from "react-cookie";

export default function Navbar(props) {
  const { sections } = props;

  const [cookies] = useCookies(["roles"]);

  const [anchorEl, setAnchorEl] = useState();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar
      component="nav"
      variant="dense"
      sx={{ justifyContent: "space-between", overflowX: "auto" }}
    >
      {sections.map((section) => (
        <Link
          color="inherit"
          noWrap
          key={section.title}
          variant="body2"
          href={section.url}
          sx={{ p: 1, flexShrink: 0 }}
        >
          {section.title}
        </Link>
      ))}
      {new String(cookies.roles).includes("ROLE_ADMIN") ||
      new String(cookies.roles).includes("ROLE_AVAL") ? (
        <>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Administração
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}><Link href="/anoletivo">Ano Letivo</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href="/turma">Turma</Link></MenuItem>
            <MenuItem onClick={handleClose}>Lançar Pontuação</MenuItem>
            {new String(cookies.roles).includes("ROLE_ADMIN") ? (
              <MenuItem onClick={handleClose}>Avaliar Lançamentos</MenuItem>
            ) : null}
          </Menu>
        </>
      ) : null}
    </Toolbar>
  );
}

// export default Navbar;
