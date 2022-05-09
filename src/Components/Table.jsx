import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AuthService from '../Services/AuthService';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const darkTheme = createTheme({
  palette:{
    mode:'dark'
  }
})

const columns = [
    { field: 'id_vehiculo', headerName: 'ID', hide: true },  
    { field: 'tipo_vehiculo', headerName: 'Tipo', width: 200 },
    { field: 'cuarto_hora', headerName: 'Cuarto de hora', type: 'number', width: 200 },
    { field: 'hora', headerName: 'Hora', type: 'number', width: 200 },
    { field: 'seis_horas', headerName: 'Medio dia', type: 'number', width: 200 },
    { field: 'dia', headerName: 'Dia', type: 'number', width: 200 },
    { field: 'mes', headerName: 'Mes', type: 'number', width: 200 }
  ];

function Tables() {
  const [tax, setTax] = useState([]);
  useEffect(() => {
    const dataresp = async () =>{
      const response = await axios.get(AuthService.API_URL + "tarifasCompuestas")
      setTax(response.data)
    }
    dataresp()
  }, []);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <div style={{ height: 214, width: '65%' }}>
        <DataGrid
          getRowId={(tax) => tax.id_vehiculo}
          rows={tax}
          columns={columns}
          pageSize={3}
          rowsPerPageOptions={[]}
          sortModel= {[{ field: 'total', sort: "desc" }]}
          headerAlign="center"
          disableColumnFilter={true}
          disableColumnMenu={true}
          disableColumnSelector={true}
          disableSelectionOnClick={true}
          hideFooter={true}
        />
      </div>
      </ThemeProvider>
    </>
  );
}

export default Tables;