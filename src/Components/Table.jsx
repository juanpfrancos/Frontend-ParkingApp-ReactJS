import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AuthService from '../Services/AuthService';
import axios from "axios";



const colTarifas = [
    { field: 'id_vehiculo', headerName: 'ID', hide: true },  
    { field: 'tipo_vehiculo', headerName: 'Tipo', width: 200 },
    { field: 'cuarto_hora', headerName: 'Cuarto de hora',  width: 200 },
    { field: 'hora', headerName: 'Hora',  width: 200 },
    { field: 'seis_horas', headerName: 'Medio dia', width: 200 },
    { field: 'dia', headerName: 'Dia', width: 200 },
    { field: 'mes', headerName: 'Mes', width: 200 }
  ];

const colRegistros =[
  { field: 'id_registro', headerName: 'ID'},  
  { field: 'placa', headerName: 'Tipo'},
  { field: 'tipo_vehiculo', headerName: 'Cuarto de hora'},
  { field: 'ingreso', headerName: 'Hora'},
  { field: 'salida', headerName: 'Medio dia'},
  { field: 'total_horas', headerName: 'Dia'},
  { field: 'pago_inicial', headerName: 'Mes'},
  { field: 'pago_final', headerName: 'Dia'},
  { field: 'total_costo', headerName: 'Dia'},
  { field: 'registro_activo', headerName: 'Dia'},
  { field: 'realizo', headerName: 'Dia'},
  { field: 'tipo_tarifa', headerName: 'Dia'},
  { field: 'en_parqueadero', headerName: 'Dia'}
]


const endpoints = "tarifasCompuestas" //"registros"
const columns = colTarifas //colRegistros

function Tables() {
  const [tax, setTax] = useState([]);
  useEffect(() => {
    const dataresp = async () =>{
      
      const response = await axios.get(AuthService.API_URL + endpoints )
      setTax(response.data)
    }
    dataresp()
  }, []);

  return (
    <>
      <div style={{ height: 214, width: '100%' }}>
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
    </>
  );
}

export default Tables;