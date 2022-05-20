import React from "react";
import SpacingGrid from '../Components/AvailabilityPie';
import Grid from '@mui/material/Grid';
import Taxes from '../Components/Tarifas';
import Io from '../Components/Registros';
import OutCar from '../Components/Salidas';
import Ingreso from "../Components/Ingreso";

export default function Operator(props) {
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
        <Grid item xs={12} container style={{ width: "50%" }}>
          <Ingreso id={props.id} />
        </Grid>
    </Grid>
  </> 
  )
}
