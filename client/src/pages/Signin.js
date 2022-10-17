// @ts-nocheck
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import UiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { InputAdornment } from "@mui/material";
const theme = createTheme();
export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const submitLogin = async (formData) => {
    try {
      const response = await axios.post("/api/auth/login", formData);
      const { isAdmin } = response.data;
      setUser({ username: response.data.username, admin: isAdmin });
      localStorage.setItem("user", JSON.stringify(response.data));
      if (isAdmin) navigate("/admin");
      else {
        navigate("/");
      }
    } catch (error) {
      const errorResponse = error.response.data;
      if (errorResponse.status !== 500) {
        setLoginError(errorResponse.message);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          sm={5}
          md={7}
          sx={{
            backgroundImage:
              "url(https://mobilemarketingwatch.com/wp-content/uploads/2016/06/secret-of-mobile-apps.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={7} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 9,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign In
            </Typography>
            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit(submitLogin)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {loginError && (
                    <Alert severity='error' sx={{ my: 2 }}>
                      {loginError}
                    </Alert>
                  )}
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      variant='standard'
                      error={errors.email_or_phone}
                      helperText={
                        errors.email_or_phone && errors.email_or_phone.message
                      }
                      required
                      value={emailOrPhone}
                      fullWidth
                      {...register("email_or_phone", {
                        required: {
                          value: true,
                          message: "Enter email address or phone number",
                        },
                      })}
                      id='email-phone'
                      label='Email or phone number'
                      name='email_or_phone'
                      onChange={(e) => setEmailOrPhone(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <KeyIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant='standard'
                      required
                      fullWidth
                      name='password'
                      label='Password'
                      type='password'
                      id='password'
                      helperText={errors.password && errors.password.message}
                      error={errors.password}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Enter password",
                        },
                      })}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </Grid>
              <Grid container justifyContent='center'>
                <Grid item>
                  <Link to='/signup'>
                    <UiLink variant='body2'>
                      Don't have an account? Sign Up
                    </UiLink>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
