// @ts-nocheck
import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import HeroImage from "../../../images/heroImage.png";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link }from 'react-router-dom'

export default function HeroSection() {
  return (
    <Box sx={{ flexGrow: 1, mt: 10 }}>
      <Grid container spacing={2} columns={16} alignItems='center'>
        <Grid item xs={16} md={8}>
          <Box sx={{ padding: 7 }}>
            <Typography
              fontWeight='bold'
              fontFamily='monospace'
              color='primary'
              variant='h3'
              component='h3'
              sx={{ marginBottom: 3 }}
            >
              Business Incubator
            </Typography>
            <Typography fontWeight='bold' color='gray' sx={{ marginBottom: 3 }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book
            </Typography>
            <Link to='/register' style ={{textDecoration:'none'}}>
            <Button
              variant='outlined'
              size='large'
              endIcon={<ArrowForwardIosIcon />}
            >
              Register now
            </Button>
            </Link>
          
          </Box>
        </Grid>
        <Grid item xs={16} md={8}>
          <Box sx={{ padding: 5 }}>
            <img
              src={HeroImage}
              alt='HeroImage'
              loading='lazy'
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
