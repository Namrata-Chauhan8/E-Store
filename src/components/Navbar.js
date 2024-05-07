import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = ({ totalQuantity }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          My Online Shopping Site
        </Typography>
        <Box>
          {window.location.pathname === "/mycart" ? (
            <Button color="inherit" component={NavLink} to="/products">
              Products{" "}
            </Button>
          ) : (
            <Button
              color="inherit"
              component={NavLink}
              to="/mycart"
              sx={{ mx: 1 }}
            >
              My Cart ({totalQuantity})
            </Button>
          )}

          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
