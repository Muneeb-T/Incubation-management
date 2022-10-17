// @ts-nocheck
import React, { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Avatar from "@mui/material/Avatar";
import LogoPlaceHolder from "../../../images/logo-placeholder.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const theme = createTheme();

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitRegistration = async (formData) => {
    try {
      await axios.post("/api/companies/registerCompany", formData);
      setRegistered(true);
    } catch (error) {
      alert("error");
      console.log(error);
    }
  };
  const [logoImage, setLogoImage] = useState(LogoPlaceHolder);
  const onImageChange = (e) => {
    const [file] = e.target.files;

    setLogoImage(URL.createObjectURL(file));
  };
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [teamAndBackground, setTeamAndBackground] = useState("");
  const [companyAndProducts, setCompanyAndProducts] = useState("");
  const [problemTryingToSolve, setProblemTryingToSolve] = useState("");
  const [uniqueAboutSolution, setUniqueAboutSolution] = useState("");
  const [valueProposition, setValueProposition] = useState("");
  const [competativeAdvantage, setCompetativeAdvantage] = useState("");
  const [reveniewModel, setReveniewModel] = useState("");
  const [potentialMarketSize, setPotentialMarketSize] = useState("");
  const [marketingStrategy, setMarketingStrategy] = useState("");
  const [incubationType, setIncubationType] = useState("Virtual");
  const [buisnessProposal, setBuisnessProposal] = useState("");

  console.log(incubationType);
  return (
    <ThemeProvider theme={theme}>
      <Container component='main' sx={{ mt: 13, mb: 13 }}>
        <CssBaseline />
        {!registered ? (
          <>
            <Box
              component='form'
              onSubmit={handleSubmit(submitRegistration)}
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component='h4'
                variant='h4'
                textAlign='center'
                color='primary'
                marginBottom={3}
                fontWeight='bold'
                fontFamily='monospace'
              >
                Application for registration
                <Divider />
              </Typography>
              <Grid container marginBottom={5} columns={12}>
                <Grid item display='block'>
                  <Avatar
                    alt='company logo'
                    src={logoImage}
                    style={{
                      width: "155px",
                      height: "155px",
                      borderRadius: "2%",
                      border: `${
                        errors.companyLogo ? "red" : "gray"
                      } dashed 0.2px`,
                    }}
                    variant='square'
                  />
                  <Button
                    variant='contained'
                    size='small'
                    sx={{ width: "155px" }}
                    component='label'
                    textalign='center'
                    endIcon={<PhotoCamera />}
                  >
                    Company logo
                    <input
                      hidden
                      name='companyLogo'
                      accept='image/*'
                      multiple
                      type='file'
                      {...register("companyLogo", {
                        required: {
                          value: true,
                          message: "Upload company logo",
                        },
                      })}
                      onChange={onImageChange}
                    />
                  </Button>
                  <Typography fontSize='14px' color='error' textAlign='center'>
                    {errors.companyLogo && errors.companyLogo.message}
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name='name'
                    {...register("name", {
                      required: { value: true, message: "Enter name" },
                    })}
                    error={errors.name}
                    value={name}
                    fullWidth
                    helperText={errors.name && errors.name.message}
                    id='name'
                    label='Name'
                    autoFocus
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("address", {
                      required: { value: true, message: "Enter address" },
                    })}
                    value={address}
                    helperText={errors.address && errors.address.message}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    error={errors.address}
                    fullWidth
                    id='address'
                    label='Address'
                    name='address'
                    autoComplete='family-name'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("city", {
                      required: { value: true, message: "Enter city" },
                    })}
                    value={city}
                    helperText={errors.city && errors.city.message}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    error={errors.city}
                    name='city'
                    fullWidth
                    id='city'
                    label='City'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("state", {
                      required: { value: true, message: "Enter state" },
                    })}
                    value={state}
                    helperText={errors.state && errors.state.message}
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    error={errors.state}
                    fullWidth
                    id='state'
                    label='State'
                    name='state'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("email", {
                      required: { value: true, message: "Enter email" },
                    })}
                    value={email}
                    helperText={errors.email && errors.email.message}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    error={errors.email}
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("phoneNumber", {
                      required: { value: true, message: "Enter phone number" },
                    })}
                    value={phoneNumber}
                    helperText={
                      errors.phoneNumber && errors.phoneNumber.message
                    }
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    error={errors.phoneNumber}
                    fullWidth
                    id='phoneNumber'
                    label='Phone number'
                    name='phoneNumber'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("companyName", {
                      required: { value: true, message: "Enter company name" },
                    })}
                    value={companyName}
                    helperText={
                      errors.companyName && errors.companyName.message
                    }
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                    }}
                    error={errors.companyName}
                    fullWidth
                    id='companyName'
                    label='Company name'
                    name='companyName'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("teamAndBackground", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={teamAndBackground}
                    helperText={
                      errors.teamAndBackground &&
                      errors.teamAndBackground.message
                    }
                    onChange={(e) => {
                      setTeamAndBackground(e.target.value);
                    }}
                    error={errors.teamAndBackground}
                    multiline
                    fullWidth
                    rows={5}
                    id='teamAndBackground'
                    label='Describe your team and background'
                    name='teamAndBackground'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("companyAndProducts", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={companyAndProducts}
                    helperText={
                      errors.companyAndProducts &&
                      errors.companyAndProducts.message
                    }
                    onChange={(e) => {
                      setCompanyAndProducts(e.target.value);
                    }}
                    error={errors.companyAndProducts}
                    multiline
                    fullWidth
                    rows={5}
                    id='companyAndProducts'
                    label='Describe your company and products'
                    name='companyAndProducts'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("problemTryingToSolve", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={problemTryingToSolve}
                    helperText={
                      errors.problemTryingToSolve &&
                      errors.problemTryingToSolve.message
                    }
                    onChange={(e) => {
                      setProblemTryingToSolve(e.target.value);
                    }}
                    error={errors.problemTryingToSolve}
                    multiline
                    fullWidth
                    rows={5}
                    id='problemTryingToSolve'
                    label='Describe the problem you are trying to solve ?'
                    name='problemTryingToSolve'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("uniqueAboutSolution", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={uniqueAboutSolution}
                    helperText={
                      errors.uniqueAboutSolution &&
                      errors.uniqueAboutSolution.message
                    }
                    onChange={(e) => {
                      setUniqueAboutSolution(e.target.value);
                    }}
                    error={errors.uniqueAboutSolution}
                    multiline
                    fullWidth
                    rows={5}
                    id='uniqueAboutSolution'
                    label='What is unique about your solution ?'
                    name='uniqueAboutSolution'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("valueProposition", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={valueProposition}
                    helperText={
                      errors.valueProposition && errors.valueProposition.message
                    }
                    onChange={(e) => {
                      setValueProposition(e.target.value);
                    }}
                    error={errors.valueProposition}
                    multiline
                    fullWidth
                    rows={5}
                    id='valueProposition'
                    label='What is your value proposition to the customer ?'
                    name='valueProposition'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("competativeAdvantage", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={competativeAdvantage}
                    helperText={
                      errors.competativeAdvantage &&
                      errors.competativeAdvantage.message
                    }
                    onChange={(e) => {
                      setCompetativeAdvantage(e.target.value);
                    }}
                    error={errors.competativeAdvantage}
                    multiline
                    fullWidth
                    rows={5}
                    id='competativeAdvantage'
                    label='Who are your competitors and what are your competative advantage ?'
                    name='competativeAdvantage'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("reveniewModel", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={reveniewModel}
                    helperText={
                      errors.reveniewModel && errors.reveniewModel.message
                    }
                    onChange={(e) => {
                      setReveniewModel(e.target.value);
                    }}
                    error={errors.reveniewModel}
                    multiline
                    fullWidth
                    rows={5}
                    id='reveniewModel'
                    label='Explain your reveniew model'
                    name='reveniewModel'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("potentialMarketSize", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={potentialMarketSize}
                    helperText={
                      errors.potentialMarketSize &&
                      errors.potentialMarketSize.message
                    }
                    onChange={(e) => {
                      setPotentialMarketSize(e.target.value);
                    }}
                    error={errors.potentialMarketSize}
                    multiline
                    fullWidth
                    rows={5}
                    id='potentialMarketSize'
                    label='What is the potential market size of the product ?'
                    name='potentialMarketSize'
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("marketingStrategy", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={marketingStrategy}
                    helperText={
                      errors.marketingStrategy &&
                      errors.marketingStrategy.message
                    }
                    onChange={(e) => {
                      setMarketingStrategy(e.target.value);
                    }}
                    error={errors.marketingStrategy}
                    multiline
                    fullWidth
                    rows={5}
                    id='marketingStrategy'
                    label='How do you market or plan to market your product and services ?'
                    name='marketingStrategy'
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl>
                    <FormLabel id='incubationType'>
                      Type of incubation needed
                    </FormLabel>
                    <Typography variant='p' color='error' fontSize='14px'>
                      {errors.incubationType && errors.incubationType.message}
                    </Typography>
                    <RadioGroup
                      {...register("incubationType", {
                        required: {
                          value: true,
                          message: "Select incubation type",
                        },
                      })}
                      value={incubationType}
                      onChange={(e) => {
                        console.log(e.target.value);
                        setIncubationType(e.target.value);
                      }}
                      error={errors.incubationType}
                      name='incubationType'
                    >
                      <FormControlLabel
                        name='incubationType'
                        value='Physical'
                        control={<Radio />}
                        label='Physical incubation'
                      />
                      <FormControlLabel
                        name='incubationType'
                        value='Virtual'
                        control={<Radio />}
                        label='Virtual incubation'
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register("buisnessProposal", {
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    })}
                    value={buisnessProposal}
                    helperText={
                      errors.buisnessProposal && errors.buisnessProposal.message
                    }
                    onChange={(e) => {
                      setBuisnessProposal(e.target.value);
                    }}
                    error={errors.buisnessProposal}
                    multiline
                    fullWidth
                    rows={5}
                    id='buisnessProposal'
                    label='Upload a detailed buisness proposal ?'
                    name='buisnessProposal'
                  />
                </Grid>
                <Grid item xs={3} sx={{ mx: "auto" }}>
                  <Button
                    type='submit'
                    fullWidth
                    size='large'
                    variant='contained'
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                width: "100%",
                height: "68vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TaskAltIcon sx={{ fontSize: "150px", color: "success.main" }} />
              <Box>
                <Typography
                  variant='h4'
                  sx={{
                    color: "gray",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Application recieved successfully
                </Typography>
                <Typography
                  sx={{
                    color: "gray",
                    textAlign: "center",
                    fontFamily: "monospace",
                  }}
                >
                  Your application is withheld for processing
                </Typography>
              </Box>
            </Box>
          </>
        )}
      </Container>
    </ThemeProvider>
  );
}
