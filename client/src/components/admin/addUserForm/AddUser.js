// @ts-nocheck
import React, { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import KeyIcon from "@mui/icons-material/Key";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { InputAdornment } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const theme = createTheme();
export default function AddUserForm(props) {
  const submitUser = async (formData) => {
    try {
      await axios.post(`/api/auth/register/`, formData);
      navigate("/admin/users/");
    } catch (error) {
      const errorResponse = error.response.data;
      if (errorResponse.status !== 500) {
        setaddUserError(errorResponse.message);
      }
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [addUserError, setaddUserError] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container component='main' sx={{ height: "100vh", mt:8 }}>
        <CssBaseline />

        <Grid item xs={12} md={7} mx='auto'>
          <Box
            sx={{
              my: 8,
              mx: 9,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
             <Typography component='h1' variant='h5'>
              <PersonAddIcon color='primary' /> Add User
            </Typography>

            <Box
              component='form'
              noValidate
              onSubmit={handleSubmit(submitUser)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  {addUserError && (
                    <Alert severity='error' sx={{ my: 2 }}>
                      {addUserError}
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
                      onKeyPress={(e) => {
                        if (
                          e.key === "e" ||
                          e.key === "-" ||
                          e.key == "+" ||
                          e.target.value.length >= 10
                        ) {
                          e.preventDefault();
                        }
                      }}
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
                        maxLength: {
                          value: 10,
                          message: "Only 10 digits allowed",
                        },
                      })}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                      variant='standard'
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
                          value: TextTrackCue,
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
                  Submit
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
