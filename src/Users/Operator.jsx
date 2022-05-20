import React from "react";
import SpacingGrid from '../Components/AvailabilityPie';
import Grid from '@mui/material/Grid';
import Io from '../Components/Registros';
import OutCar from '../Components/Salidas';
import Ingreso from "../Components/Ingreso";
import FixedTaxes from "../Components/FixedTaxes";

export default function Operator(props) {
  return (
  <>
      <Grid 
        container 
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={6} style={{ width: "100%" }}>
          <FixedTaxes/>
        </Grid>
        <Grid item xs={6} style={{ width: "100%" }}>
          <Ingreso id={props.id} />
        </Grid>
        <Grid item xs={12} container style={{ width: "80%" }}>
          <SpacingGrid/>
        </Grid>
        <Grid item xs={12} container style={{ width: "80%" }}>
          <Io/>
        </Grid>
        <Grid item xs={12} container style={{ width: "80%" }}>
          <OutCar/>
        </Grid>        
    </Grid>
  </> 
  )
}
