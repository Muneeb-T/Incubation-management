import { Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import EditUserForm from "../components/admin/editUserForm/EditUserForm";
import Header from "../components/admin/header/Header";
import Sidebar from "../components/admin/sidebar/Sidebar";
function EditUser() {
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
            sx={{ height: "100vh", overflowY: "scroll" }}
          >
            <EditUserForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default EditUser;
