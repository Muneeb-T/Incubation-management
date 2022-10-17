// @ts-nocheck
import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { Tab, Tabs, Typography } from "@mui/material";
import { ApplicationContext } from "../../../context/ApplicationContext";
import { useNavigate } from "react-router-dom";

export default function BasicTable() {
  const [applicationsList, setApplicationsList] = useState([]);
  const tabs = ["New", "Pending"];
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();
  const getApplications = async () => {
    try {
      const applications = await axios.get(
        `/api/companies/getApplications/${tabValue === 0 ? "New" : "Pending"}`
      );
      setApplicationsList(applications.data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeApplicationStatus = async (newStatus, companyId) => {
    try {
      await axios.patch(`/api/companies/changeApplicationStatus/${companyId}`, {
        newStatus,
      });

      console.log(newStatus);
      setApplicationsList((current) =>
        current.map((obj) => {
          if (obj._id === companyId) {
            return { ...obj, applicationStatus: newStatus };
          }
          return obj;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const { setApplication } = useContext(ApplicationContext);
  const viewApplication = (application) => {
    setApplication(application);
    navigate(`/admin/view/${application._id}`);
  };

  useEffect(() => {
    getApplications();
  }, [tabValue]);
  return (
    <>
      <Tabs
        value={tabValue}
        onChange={(e, value) => {
          setTabValue(value);
        }}
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab}></Tab>
        ))}
      </Tabs>
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
                <Typography fontWeight='bold'>View</Typography>
              </TableCell>
              {tabValue === 0 && (
                <>
                  <TableCell>
                    <Typography fontWeight='bold'>Process</Typography>
                  </TableCell>
                </>
              )}
              {tabValue === 1 && (
                <>
                  <TableCell>
                    <Typography fontWeight='bold'>Approve</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight='bold'>Decline</Typography>
                  </TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {applicationsList.map(
              (application, index) =>
                application.applicationStatus === "New" && (
                  <>
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component='th' scope='row'>
                        {index + 1}
                      </TableCell>
                      <TableCell component='th' scope='row'>
                        {application.companyName}
                      </TableCell>
                      <TableCell>{application.companyAndProducts}</TableCell>
                      <TableCell>
                        <Button
                          variant='contained'
                          size='small'
                          onClick={() => viewApplication(application)}
                        >
                          View
                        </Button>
                      </TableCell>
                      {tabValue === 0 && (
                        <>
                          <TableCell>
                            <Button
                              variant='outlined'
                              size='small'
                              onClick={() =>
                                changeApplicationStatus(
                                  "Pending",
                                  application._id
                                )
                              }
                            >
                              Pending
                            </Button>
                          </TableCell>
                        </>
                      )}
                      {tabValue === 1 && (
                        <>
                          <TableCell>
                            <Button
                              color='success'
                              variant='outlined'
                              size='small'
                              onClick={
                                application.applicationStatus !== "Approved"
                                  ? () =>
                                      changeApplicationStatus(
                                        "Approved",
                                        application._id
                                      )
                                  : null
                              }
                            >
                              {application.applicationStatus === "Approved"
                                ? "Approved"
                                : "Approve"}
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant='contained'
                              color='error'
                              size='small'
                              onClick={
                                application.applicationStatus !== "Declined"
                                  ? () =>
                                      changeApplicationStatus(
                                        "Declined",
                                        application._id
                                      )
                                  : null
                              }
                            >
                              {application.applicationStatus === "Declined"
                                ? "Declined"
                                : "Decline"}
                            </Button>
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  </>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
