import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AuthService from '../Services/AuthService';
import axios from "axios";

const columns = [
    { field: 'id_vehiculo', headerName: 'ID', hide: true },  
    { field: 'tipo_vehiculo', headerName: 'Tipo', width: 200 },
    { field: 'cuarto_hora', headerName: 'Cuarto', type: 'number', width: 200 },
    { field: 'hora', headerName: 'Hora', type: 'number', width: 200 },
    { field: 'seis_horas', headerName: '6 Horas', type: 'number', width: 200 },
    { field: 'dia', headerName: 'Dia', type: 'number', width: 200 },
    { field: 'mes', headerName: 'Mes', type: 'number', width: 200 }
  ];

function ClientTables() {
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
     <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          getRowId={(tax) => tax.id_vehiculo}
          rows={tax}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          sortModel= {[{ field: 'total', sort: "desc" }]}
          headerAlign="center"
        />
      </div>
    </>
  );
}

export default ClientTables;