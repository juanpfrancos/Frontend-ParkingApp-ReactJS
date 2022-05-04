import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'ciudad', headerName: 'Ciudad', width: 300 },
    { field: 'total', headerName: 'Total Casos', type: 'number', width: 300 },
  ];

 const ciudades = [
    {ciudad: "BOGOTA", id: 0, total: 6},
    {ciudad: "CUMBAL", id: 1, total: 2}  
 ] 

 const tarifas = [
    {
      "id_vehiculo": "1",
      "tipo_vehiculo": "moto",
      "cuarto_hora": 800,
      "hora": 1100,
      "seis_horas": 6000,
      "dia": 10000,
      "mes": 90000
    },
    {
      "id_vehiculo": "2",
      "tipo_vehiculo": "carro",
      "cuarto_hora": 1800,
      "hora": 2500,
      "seis_horas": 13000,
      "dia": 20000,
      "mes": 150000
    },
    {
      "id_vehiculo": "3",
      "tipo_vehiculo": "camioneta",
      "cuarto_hora": 2200,
      "hora": 2900,
      "seis_horas": 15000,
      "dia": 25000,
      "mes": 200000
    }
  ]


function Tables() {
  return (
    <>
        <DataGrid
          rows={ciudades}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          sortModel= {[{ field: 'total', sort: "desc" }]}
          headerAlign="center"
        />
    </>
  );
}

export default Tables;