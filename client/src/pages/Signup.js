// @ts-nocheck
import React, { useState } from "react";
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
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import KeyIcon from "@mui/icons-material/Key";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { InputAdornment } from "@mui/material";
const theme = createTheme();
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const submitSignup = async (formData) => {
    try {
      await axios.post("/api/auth/register", formData);
      navigate("/signin");
    } catch (error) {
      const errorResponse = error.response.data;
      if (errorResponse.status !== 500) {
        setSignupError(errorResponse.message);
      }
    }
  };
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container component='main' sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          sm={5}
          md={7}
          sx={{
            backgroundImage:
              "url(https://fs.npstatic.com/userfiles/1799474/file/Free_Apps_shutterstock_248776741-w810h462.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Grid
          item
          xs={12}
          sm={7}
          md={5}
          maxHeight='100vh'
          component={Paper}
          elevation={6}
          square
        >
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
              Sign up
            </Typography>

            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit(submitSignup)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {signupError && (
                    <Alert severity='error' sx={{ my: 2 }}>
                      {signupError}
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
                      error={errors.username}
                      required
                      fullWidth
                      helperText={errors.username && errors.username.message}
                      value={username}
                      id='Username'
                      label='Username'
                      {...register("username", {
                        required: { value: true, message: "Enter username" },
                        minLength: {
                          value: 6,
                          message: "Enter minimum 6 characters",
                        },
                      })}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <EmailIcon />
                          </InputAdornment>
                        ),
                      }}
                      variant='standard'
                      error={errors.email}
                      helperText={errors.email && errors.email.message}
                      required
                      fullWidth
                      id='email'
                      label='Email Address'
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Enter email address",
                        },
                      })}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <PhoneAndroidIcon />
                          </InputAdornment>
                        ),
                      }}
                      helperText={errors.phone && errors.phone.message}
                      variant='standard'
                      error={errors.phone}
                      required
                      fullWidth
                      type='number'
                      id='phone'
                      label='Phone number'
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Enter phone number",
                        },
                        minLength: {
                          value: 10,
                          message: "Enter 10 digits",
                        },
                      })}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                    <TextField
                      variant='standard'
                      required
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <KeyIcon />
                          </InputAdornment>
                        ),
                      }}
                      helperText={errors.password && errors.password.message}
                      error={errors.password}
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Enter password",
                        },
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters",
                        },
                      })}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      name='password'
                      label='Password'
                      type='password'
                      id='password'
                    />
                  </Box>
                </Grid>
              </Grid>

              <Grid container justifyContent='center'>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Sign Up
                </Button>
              </Grid>

              <Grid container justifyContent='center'>
                <Grid item>
                  <Link to='/signin'>
                    <UiLink variant='body2'>
                      Already have an account? Sign in
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
