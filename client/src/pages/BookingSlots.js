// @ts-nocheck
import { Divider, Grid, Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/admin/header/Header";
import Sidebar from "../components/admin/sidebar/Sidebar";
import Slot from "../components/admin/slot/Slot";

function BookingSlot() {
  const slots = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,27,28, 29, 30,
  ];
  // const [slotsBookings, setSlotsBooking] = useState([]);
  // const getSlots = async () => {
  //   try {
  //     const response = await axios.get("/api/companeis/getSlots");
  //     response.forEach((bookings) => {
  //       slots[Number(bookings.slotBooked)] = bookings.companyName;
  //     });
  //     setSlotsBooking(slots);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getSlots();
  // }, []);

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
              sx={{ mb: 2, mt: 8 }}
            >
              Booking slot
            </Typography>
            <Grid container columns={10} spacing={2}>
              {slots.map((slot, index) => (
                <>
                  <Grid item xs={1}>
                    <Slot slotName={`${index + 1}`} />
                  </Grid>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default BookingSlot;
