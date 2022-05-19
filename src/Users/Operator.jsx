import React from "react";
import SpacingGrid from '../Components/AvailabilityPie';
import Grid from '@mui/material/Grid';
import Taxes from '../Components/Tarifas';
import Io from '../Components/Registros';
import Ingreso from "../Components/Ingreso";

export default function Operator(props) {
  return (
  <>
    <Grid container spacing={2}>
        <Grid container xs={9}>
          <Taxes/>
        </Grid>
        <Grid container xs={9}>
          <SpacingGrid/>
        </Grid>
        <Grid item xs={9}>
          <Io/>
        </Grid>
        <Grid container xs={9}>
          <Ingreso id={props.id} />
        </Grid>
    </Grid>
  </> 
  )
}
