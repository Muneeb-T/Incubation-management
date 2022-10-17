import { Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "../components/admin/header/Header";
import Records from "../components/admin/records/Records";
import Sidebar from "../components/admin/sidebar/Sidebar";
function RecordTrack() {
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
              Record track
            </Typography>
            <Records />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default RecordTrack;
