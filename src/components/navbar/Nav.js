import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Collapse from '@mui/material/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logolashes from '../../assetsimagescss/images/eyelashes.png';
import eyelashes from '../../assetsimagescss/images/PatyLashes.jpg';

const pages = ["Home", "Servicios", "Reservas", "QuienesSomos", "Contacto"];
const subPages = ["Cejas", "LashLifting", "Extension"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviciosMenuOpen, setServiciosMenuOpen] = useState(null);

  const handleServiciosMenuOpen = (event) => {
    setServiciosMenuOpen(event.currentTarget);
  };

  const handleServiciosMenuClose = () => {
    setServiciosMenuOpen(null);
  };

  return (
    <>
      <AppBar position="static" style={{ background: '#ffffff', color: 'black' }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/Home">
              <Box
                variant="outlined"
                color="secondary"
                component="img"
                noWrap
                sx={{
                  border: '1px solid #a74f7f',
                  borderRadius: 15,
                  margin: 1,
                  height: 80,
                  cursor: 'pointer',
                }}
                alt="Your logo."
                src={eyelashes}
              />
            </Link>
          </Box>

          {/* Icono de menú en el lado derecho (para vista móvil) */}
          <Box sx={{ display: { xs: "flex", sm: "none" } }}>
            <IconButton
              color="inherit"
              size="large"
              onClick={() => setOpen(true)}
              edge="end"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Elementos de menú en el lado derecho (para vista de computadora) */}
          <Box sx={{ display: { xs: "none", sm: "flex", alignItems: "center" } }}>
            {pages.map((page) => (
              <React.Fragment key={page}>
                {page === "Servicios" ? (
                  <Box>
                    <Button
                      color="inherit"
                      endIcon={<MenuIcon />}
                      onClick={handleServiciosMenuOpen}
                    >
                      Servicios
                    </Button>
                    <Menu
                      anchorEl={serviciosMenuOpen}
                      open={Boolean(serviciosMenuOpen)}
                      onClose={handleServiciosMenuClose}
                    >
                      {subPages.map((subPage) => (
                        <MenuItem
                          key={subPage}
                          component={Link}
                          to={`/${subPage.toLowerCase()}`}
                          onClick={handleServiciosMenuClose}
                        >
                          {subPage}
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    color="inherit"
                    component={Link}
                    to={`/${page === "Home" ? "" : page.toLowerCase()}`}
                  >
                    {page}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none"} }}
      >
        <NavListDrawer
          navArrayLinks={pages}
          subPages={subPages}
          setOpen={setOpen}
          serviciosOpen={serviciosMenuOpen}
          toggleServicios={handleServiciosMenuOpen}
        />
      </Drawer>
    </>
  );
}


function NavListDrawer({ navArrayLinks, setOpen }) {
  const [serviciosOpen, setServiciosOpen] = useState(false);
  const toggleServicios = () => {
    setServiciosOpen(!serviciosOpen);
  };
  return (
    <Box sx={{ width: 250 }}>
      <List sx={{ width: '100%' }} component="nav">
        {navArrayLinks.map((item) => (
          <div key={item}>
            {item === "Servicios" ? (
              <div>
                <ListItemButton onClick={toggleServicios}>
                  <ListItemText primary={item} />
                  {serviciosOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItemButton>
                <Collapse in={serviciosOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {subPages.map((subPage) => (
                      <ListItemButton
                        key={subPage}
                        component={Link}
                        to={`/${subPage.toLowerCase()}`}
                        onClick={() => setOpen(false)}
                      >
                        <ListItemIcon>
                          <img src={logolashes} alt={item} style={{ width: '20px', height: '20px', marginLeft: 3 }} />
                        </ListItemIcon>
                        <ListItemText primary={subPage} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ) : (
              <ListItemButton
                component={Link}
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            )}
          </div>
        ))}
      </List>
    </Box>
  );
}


