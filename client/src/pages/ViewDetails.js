// @ts-nocheck
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../components/admin/sidebar/Sidebar";
import Header from "../components/admin/header/Header";

import CompanyDetails from "../components/admin/companyDetails/CompanyDetails";

function ViewDetails() {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={17}>
          <Grid
            item
            xs='auto'
            sx={{
              boxShadow: 10,
            }}
          >
            <Sidebar />
          </Grid>
          <Grid
            xs
            item
            sx={{ padding: 5, height: "100vh", overflowY: "scroll" }}
          >
            <Typography
              variant='h5'
              fontWeight='bold'
              fontFamily='monospace'
              sx={{ mb: 1, mt:8 }}
            >
              Company
            </Typography>
            <CompanyDetails />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ViewDetails;
