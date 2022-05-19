import { useState, useEffect } from "react";
import { NavLink} from 'react-router-dom';
import SpacingGrid from '../Components/AvailabilityPie';
import Table from '../Components/Table'
import AuthService from '../Services/AuthService';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from "axios";

export default function Invited() {
  const [tax, setTax] = useState([]);
  const [regIn, setRegIn] = useState([]);
  const [regOut, setRegOut] = useState([]);

  const endTarifas = "tarifasCompuestas";
  const endOut = "registros/false";
  const endInput = "registros/true";

  const colRegistros =[
      { field: 'id_registro', headerName: 'ID', hide: true},  
      { field: 'placa', headerName: 'Placa', editable: true},
      { field: 'nombre_vehiculo', headerName: 'Tipo', editable: true},
      { field: 'ingreso', headerName: 'Hora Ingreso', editable: true},
      { field: 'salida', headerName: 'Hora Salida', editable: true},
      { field: 'total_horas', headerName: 'Total Tiempo', editable: true},
      { field: 'pago_inicial', headerName: 'Pago Inicial', editable: true},
      { field: 'pago_final', headerName: 'Pago Final', editable: true},
      { field: 'total_costo', headerName: 'Total Costo', editable: true},
      { field: 'nombre', headerName: 'Realizo', editable: true},
      { field: 'tipo_tarifa', headerName: 'Tipo Tarifa', editable: true}
  ]
  
  const colTarifas = [
      { field: 'id_vehiculo', headerName: 'ID', hide: true },  
      { field: 'nombre_vehiculo', headerName: 'Tipo', width: 200, editable: true},
      { field: 'cuarto_hora', headerName: 'Cuarto de hora',  width: 200, editable: true},
      { field: 'hora', headerName: 'Hora',  width: 200, editable: true},
      { field: 'seis_horas', headerName: 'Medio dia', width: 200, editable: true},
      { field: 'dia', headerName: 'Dia', width: 200, editable: true},
      { field: 'mes', headerName: 'Mes', width: 200, editable: true}
  ];

  useEffect(() => {
    const dataresp = async () =>{      
      const responseTax = await axios.get(AuthService.API_URL + endTarifas )
      const responseRegIn = await axios.get(AuthService.API_URL + endInput )
      const responseRegOut = await axios.get(AuthService.API_URL + endOut )
      setTax(responseTax.data)
      setRegIn(responseRegIn.data)
      setRegOut(responseRegOut.data)
    }
    dataresp()
  }, []);

  const idReg = (row) => row.id_registro
  const idTax = (row) => row.id_vehiculo

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
      <h1>Bienvenidos a ParkingApp</h1>
    </Grid>

    <Grid item xs={12} align="center" style={{ height: 215, width: "100%" }}>
      <Table data={tax} id={idTax} col={colTarifas} />
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