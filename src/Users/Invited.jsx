import { useState, useEffect } from "react";
import { NavLink} from 'react-router-dom';
import MaterialTable from "material-table";
import SpacingGrid from '../Components/AvailabilityPie';
import AuthService from '../Services/AuthService';
import {Box, Grid, Typography } from '@mui/material';
import axios from "axios";

export default function Invited() {
  const [tax, setTax] = useState([]);
  const endTarifas = "tarifasCompuestas";
  const colTarifas = [
    { field: 'id_vehiculo', title: 'ID', hide: true },  
    { field: 'nombre_vehiculo', title: 'Tipo'},
    { field: 'cuarto_hora', title: 'Cuarto de hora'},
    { field: 'hora', title: 'Hora',  width: 200 },
    { field: 'seis_horas', title: 'Medio dia'},
    { field: 'dia', title: 'Dia'},
    { field: 'mes', title: 'Mes'}
  ];

  useEffect(() => {
    const dataresp = async () =>{      
      const responseTax = await axios.get(AuthService.API_URL + endTarifas )
      setTax(responseTax.data)
    }
    dataresp()
  }, []);

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
      <MaterialTable
          columns={colTarifas}
          data={tax}
          title="Tarifas"
          options={{
            paging: false,
            search: false,
            sorting: false
          }}
        />
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