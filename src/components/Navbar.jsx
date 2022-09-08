import React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { fontSize } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
function Navbar() {
  return (
    <div className="navbar ">
      <AppBar
        position="static"
        color="inherit"
        sx={{ width: "100vw", position: "static" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "black",
                textDecoration: "none",
                border: 2,
                borderColor: "GrayText",
                borderRadius: 5,
                backgroundColor: "bisque",
                p: 0.5,
              }}
            >
              CART
            </Typography>
            <Box sx={{ display: "flex", flexGrow: 1, position: "relative" }}>
              <Box
                sx={{
                  mr: 2,
                  fontWeight: 900,
                  letterSpacing: ".1rem",
                  fontSize: 20,
                }}
              >
                <NavLink to="/" as={NavLink}>
                  Home
                </NavLink>
              </Box>
              <Box
                sx={{
                  mr: 2,
                  fontWeight: 900,
                  letterSpacing: ".1rem",
                  fontSize: 20,
                }}
              >
                <NavLink to="/about" as={NavLink}>
                  About
                </NavLink>
              </Box>
              <Box
                sx={{
                  fontWeight: 900,
                  letterSpacing: ".1rem",
                  fontSize: 20,
                }}
              >
                <NavLink to="/shop" as={NavLink}>
                  Shop
                </NavLink>
              </Box>
            </Box>
            <Box>
              <Button
                size="large"
                color="inherit"
                sx={{ border: 1, width: 50, height: 50, borderRadius: "50%" }}
              >
                <ShoppingCartIcon />
                <Box>
                  <Button
                    variant="text"
                    color="error"
                    sx={{
                      position: "absolute",
                    }}
                  >
                    10
                  </Button>
                </Box>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
