// @ts-nocheck
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import React, { useEffect, useState } from "react";
import axios from "axios";
const steps = ["Applied", "Under process", "Approved"];
function Records() {
  const [applicationsList, setApplicationsList] = useState([]);
  const getApplications = async () => {
    try {
      const applications = await axios.get(
        "/api/companies/getApplications/all"
      );
      setApplicationsList(applications.data);
    } catch (error) {
      console.log(error);
    }
  };
  const activeStep = (status) => {
    let step = 1;
    if (status === "Pending") step = 2;
    if (status === "Approved") step = 3;
    return step;
  };
  useEffect(() => {
    getApplications();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography fontWeight='bold'>S.No</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight='bold'>Company name</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight='bold'>Company details</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight='bold'>Status tracking</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applicationsList.map((application, index) => (
              <>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{application.companyName}</TableCell>
                  <TableCell>{application.companyAndProducts}</TableCell>
                  <TableCell>
                    {application.applicationStatus === "Declined" ? (
                      (<Typography color="error" fontWeight="bold">
                        Declined
                      </Typography>)
                    ) : (
                      <Box sx={{ width: "100%" }}>
                        <Stepper
                          activeStep={activeStep(application.applicationStatus)}
                          alternativeLabel
                        >
                          {steps.map((label) => (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                            </Step>
                          ))}
                        </Stepper>
                      </Box>
                    )}
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Records;
