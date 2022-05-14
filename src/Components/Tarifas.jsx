import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';
import AuthService from '../Services/AuthService';
import axios from "axios";

//Columnas de la tabla
const colTarifas = [
    { field: 'id_vehiculo', headerName: 'ID', hide: true },  
    { field: 'nombre_vehiculo', headerName: 'Tipo', width: 200 },
    { field: 'cuarto_hora', headerName: 'Cuarto de hora',  width: 200 },
    { field: 'hora', headerName: 'Hora',  width: 200 },
    { field: 'seis_horas', headerName: 'Medio dia', width: 200 },
    { field: 'dia', headerName: 'Dia', width: 200 },
    { field: 'mes', headerName: 'Mes', width: 200 }

  ];
//Url
const endTarifas = "tarifasCompuestas";

function Taxes() {
  const [tax, setTax] = useState([]);

  useEffect(() => {
    const dataresp = async () =>{
      const responseTax = await axios.get(AuthService.API_URL + endTarifas)
      setTax(responseTax.data)
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
      </div>
    </>
  );
}
export default Taxes;