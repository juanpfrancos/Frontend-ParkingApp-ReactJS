import React from "react";
import Grid from '@mui/material/Grid';
import SpacingGrid from '../Components/AvailabilityPie';
import Taxes from '../Components/Tarifas';
import Io from '../Components/Registros';
import OutCar from "../Components/Salidas"

export default function Admin(props) {
  return (
    <>
      <Grid 
        container 
        spacing={4}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12} style={{ width: "90%" }}>
          <Taxes/>
        </Grid>

        <Grid item xs={12} container style={{ width: "90%" }}>
          <SpacingGrid/>
        </Grid>
        <Grid item xs={12} container style={{ width: "90%" }}>
          <Io/>
        </Grid>
        <Grid item xs={12} container style={{ width: "90%" }}>
          <OutCar/>
        </Grid>
      </Grid>
    </> 
  )
}