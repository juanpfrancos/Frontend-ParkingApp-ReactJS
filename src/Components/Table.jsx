import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';
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
  { field: 'nombre_vehiculo', headerName: 'Tipo'},
  { field: 'ingreso', headerName: 'Hora Ingreso'},
  { field: 'salida', headerName: 'Hora Salida'},
  { field: 'total_horas', headerName: 'Total Tiempo'},
  { field: 'pago_inicial', headerName: 'Pago Inicial'},
  { field: 'pago_final', headerName: 'Pago Final'},
  { field: 'total_costo', headerName: 'Total Costo'},
  { field: 'nombre', headerName: 'Realizo'},
  { field: 'tipo_tarifa', headerName: 'Tipo Tarifa'}
];


const endTarifas = "tarifasCompuestas";
const endOut = "registros/false";
const endInput = "registros/true";

function Tables() {
  const [tax, setTax] = useState([]);
  const [regIn, setRegIn] = useState([]);
  const [regOut, setRegOut] = useState([]);

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

  return (
    <>
      <div style={{ height: 214, width: '100%' }}>

        <DataGrid
          getRowId={(tax) => tax.id_vehiculo}
          rows={tax}
          columns={colTarifas}
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
        <DataGrid
          getRowId={(regIn) => regIn.id_registro}
          rows={regIn}
          columns={colRegistros}
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
        <DataGrid
          getRowId={(regOut) => regOut.id_registro}
          rows={regOut}
          columns={colRegistros}
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