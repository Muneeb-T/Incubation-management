// @ts-nocheck
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import LogoPlaceHolder from "../../../images/logo-placeholder.png";
import React, { useContext } from "react";
import { ApplicationContext } from "../../../context/ApplicationContext";

function CompanyDetails() {
  const { application } = useContext(ApplicationContext);
  return (
    <>

      <Divider style={{ width: "100%", marginBottom: "18px"}} />

      <Grid container columns={12} alignItems='center'>
        <Grid item xs={12} md={4}>
          <Avatar
            alt='company logo'
            src={LogoPlaceHolder}
            style={{
              width: "155px",
              height: "155px",
              borderRadius: "2%",
              border: "gray",
            }}
            variant='square'
          />
        </Grid>
        <Grid item xs={12} md>
          <Typography variant='h4' color="primary" fontWeight="bold" fontFamily="monospace" marginBottom={2}>
            {application.companyName}
          </Typography>
          <Typography>{application.companyAndProducts}</Typography>
          <Typography fontWeight="bold" color="primary">Incubation type : {application.incubationType}</Typography>
        </Grid>
      </Grid>

      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
        Address
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>
        {application.name},<br></br>
        {application.address},<br></br>
        {application.city}
        <br></br>
        Phone : {application.phoneNumber}
        <br></br>
        Email : {application.email}
      </Typography>
      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
        Team and Background
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>{application.teamAndBackground}</Typography>
      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
        Problem trying to solve
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>{application.problemTryingToSolve}</Typography>
      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
        Unique about solution
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>{application.uniqueAboutSolution}</Typography>
      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
        Competative advantage
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>{application.competativeAdvantage}</Typography>
      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
        Reveniew model
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>{application.reveniewModel}</Typography>
      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
        Potential market size
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>{application.potentialMarketSize}</Typography>
      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
       Marketing strategy
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>{application.marketingStrategy}</Typography>
      <Typography variant='h5' fontFamily="monospace" color='primary' marginTop='25px'>
       Buisness proposal
      </Typography>
      <Divider style={{ width: "100%", marginBottom: "18px" }} />
      <Typography>{application.buisnessProposal}</Typography>

    </>
  );
}

export default CompanyDetails;
