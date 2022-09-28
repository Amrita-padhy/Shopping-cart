import React from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Margin } from "@mui/icons-material";
import { useAppContext } from "../context";

function Navbar() {
  const pointer = { cursor: "pointer" };
  const navigate = useNavigate();
  const { userAuthState, setUserAuthState } = useAppContext();
  const logout = () => {
    localStorage.setItem("isLoggedIn", false);
    navigate("/");
    setUserAuthState(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          {userAuthState ? (
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Typography
                variant="h6"
                component="div"
                style={pointer}
                sx={{ mr: 2 }}
                onClick={() => navigate("/products")}
              >
                Products
              </Typography>
              <Typography
                variant="h6"
                component="div"
                style={pointer}
                onClick={() => navigate("/favorites")}
              >
                Favourite products
              </Typography>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexGrow: 1 }}></Box>
          )}
          {userAuthState ? (
            <Button
              variant="text"
              component="button"
              color="inherit"
              onClick={logout}
            >
              Logout
            </Button>
          ) : (
            <Box>
              <Button
                variant="text"
                component="button"
                color="inherit"
                onClick={() => navigate("/")}
              >
                Login
              </Button>
              <Button
                variant="text"
                component="button"
                color="inherit"
                onClick={() => navigate("/registration")}
              >
                SignUp
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
