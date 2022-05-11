import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import AuthService from '../Services/AuthService';
import axios from "axios";



const colTarifas = [
    { field: 'id_vehiculo', headerName: 'ID', hide: true },  
    { field: 'nombre_vehiculo', headerName: 'Tipo', width: 200 },
    { field: 'cuarto_hora', headerName: 'Cuarto de hora',  width: 200 },
    { field: 'hora', headerName: 'Hora',  width: 200 },
    { field: 'seis_horas', headerName: 'Medio dia', width: 200 },
    { field: 'dia', headerName: 'Dia', width: 200 },
    { field: 'mes', headerName: 'Mes', width: 200 }
  ];

const colRegistros =[
  { field: 'id_registro', headerName: 'ID', hide: true},  
  { field: 'placa', headerName: 'Placa'},
  { field: 'tipo_vehiculo', headerName: 'Tipo'},
  { field: 'ingreso', headerName: 'Hora Ingreso'},
  { field: 'salida', headerName: 'Hora Salida'},
  { field: 'total_horas', headerName: 'Total Tiempo'},
  { field: 'pago_inicial', headerName: 'Pago Inicial'},
  { field: 'pago_final', headerName: 'Pago Final'},
  { field: 'total_costo', headerName: 'Total Costo'},
  { field: 'nombre', headerName: 'Nombre'},
  { field: 'tipo_tarifa', headerName: 'Tipo Tarifa'}
]


const endpoints = "tarifasCompuestas"
//const endpoints = "registros"
//const endpoints = "registros/%7Ben_parqueadero%7D?io=false"
//const endpoints = "registros/%7Ben_parqueadero%7D?io=true"

const columns = colTarifas
//const columns = colRegistros

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