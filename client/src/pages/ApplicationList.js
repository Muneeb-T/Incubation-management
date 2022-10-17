import { Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "../components/admin/header/Header";
import Sidebar from "../components/admin/sidebar/Sidebar";
import ApplicationsTable from "../components/admin/applicationsTable/ApplicationsTable";
function ApplicationList() {
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
              sx={{ mb: 1, mt: 8 }}
            >
              Application List
            </Typography>

            <ApplicationsTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ApplicationList;
