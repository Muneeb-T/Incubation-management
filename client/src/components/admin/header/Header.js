// @ts-nocheck
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {
  AppBar,
  Typography,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
  IconButton,
  Badge,
  Button,
} from "@mui/material";

import Logo from "@mui/icons-material/Hub";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["access_token"]);
  const logout = () => {
    removeCookie("access_token");
    localStorage.setItem("user", null);
    setUser(null);
    navigate("/");
  };
  return (
    <>
      <AppBar sx={{ background: "white" }}>
        <Toolbar style={{ minHeight: 64 }}>
          <Logo sx={{ marginRight: "10px" }} color='primary' />
          <Typography
            sx={{
              fontSize: "1.5rem",
              marginRight: "20px",
              color: "primary.main",
              fontWeight: "bold",
              fontFamily: "monospace",
            }}
          >
            INCUBATOR
          </Typography>
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <IconButton
              size='large'
              color='primary'
              sx={{ marginRight: "10px" }}
            >
              <Badge badgeContent={17} color='error'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Box display='flex' alignItems='center'>
              {!isMatch && user && !user.isAdmin && (
                <>
                  <IconButton size='large' color='primary'>
                    <AccountCircle />
                  </IconButton>
                  <Typography sx={{ color: "gray", fontSize: "15px" }}>
                    {user.username}
                  </Typography>
                  <Button
                    color='error'
                    variant='contained'
                    size='small'
                    sx={{ marginLeft: "20px", fontWeight: "bold" }}
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
