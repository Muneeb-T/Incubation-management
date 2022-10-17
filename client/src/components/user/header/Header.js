// @ts-nocheck
import React, { useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import {
  AppBar,
  Tabs,
  Typography,
  Button,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import Logo from "@mui/icons-material/Hub";
import DrawerComp from "../drawer/Drawer";
import { Link, useNavigate } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
import { useCookies } from "react-cookie";
const PAGES = [
  { label: "Home", route: "/" },
  { label: "Register", route: "/register" },
  { label: "Application status", route: "/ApplicationStatus" },
];
function Header() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
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
        <Toolbar>
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
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                value={tabValue}
                onChange={(e, value) => {
                  setTabValue(value);
                }}
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
              >
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page.label}
                    onClick={() => navigate(`${page.route}`)}
                  ></Tab>
                ))}
              </Tabs>
              <Box
                sx={{
                  marginLeft: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {user && !user.isAdmin ? (
                  <>
                    <AccountCircle
                      sx={{ marginRight: "10px" }}
                      color='primary'
                    />

                    <Typography sx={{ color: "gray", fontSize: "15px" }}>
                      Hello {user.username}
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
                ) : (
                  <>
                    <Link to='/signin' style={{ textDecoration: "none" }}>
                      <Button variant='contained'>Login</Button>
                    </Link>
                    <Link to='/signup' style={{ textDecoration: "none" }}>
                      <Button sx={{ marginLeft: "10px" }} variant='contained'>
                        SignUp
                      </Button>
                    </Link>
                  </>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
