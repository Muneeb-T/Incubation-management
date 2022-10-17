// @ts-nocheck
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../components/admin/sidebar/Sidebar";
import Header from "../components/admin/header/Header";
import AddUserForm from "../components/admin/addUserForm/AddUser";

function AddUser() {
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
          <Grid xs item sx={{ height: "100vh", overflowY: "scroll" }}>
            <AddUserForm />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AddUser;
