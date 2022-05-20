import { NavLink} from 'react-router-dom';
import SpacingGrid from '../Components/AvailabilityPie';
import {Box, Grid, Typography } from '@mui/material';
import FixedTaxes from "../Components/FixedTaxes";

export default function Invited() {
return (
<Box sx={{ flexGrow: 1 }}>
  <Grid 
    container
    spacing={4}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}
  >
    <Grid item xs={12} align="center" style={{ width: "100%" }}>
    <Typography sx={{ margin: '1rem' }} variant='h4'>
       Bienvenido a ParkingApp
    </Typography>
    </Grid>

    <Grid item xs={12} align="center" style={{ height: 215, width: "90%" }}>
      <FixedTaxes/>
    </Grid>

    <Grid item xs={12} container style={{ width: "90%" }}>
      <SpacingGrid/>
    </Grid>

    <Grid item xs={12}>
      <p>
      ¿Ya tienes una cuenta?
      <NavLink to='/login' sx={{
        textDecoration: 'none',
        fontWeight: '600',
        paddingLeft: '0.5rem',
        cursor: 'pointer'
      }}>
          Acceder
      </NavLink>
      </p>      
    </Grid>
  </Grid>
</Box>
)
}