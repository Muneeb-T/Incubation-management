// @ts-nocheck
import { Button, Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/admin/header/Header";
import Sidebar from "../components/admin/sidebar/Sidebar";
import UsersTable from "../components/admin/usersTable/UsersTable";
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Users() {
  const navigate = useNavigate();
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
            <Box
              display='flex'
              justifyContent='space-between'
              alignItem='center'
              sx={{ mt: 8 }}
            >
              <Typography
                variant='h5'
                fontWeight='bold'
                fontFamily='monospace'
                sx={{ mb: 1 }}
              >
                Users
              </Typography>
              <Button
                variant='contained'
                size='small'
                onClick={() => {
                  navigate("/admin/users/add");
                }}
                startIcon={<PersonAddIcon/>}
              >
                Add user
              </Button>
            </Box>

            <UsersTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Users;
