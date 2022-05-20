import { useState, useEffect } from "react";
import MaterialTable from "material-table";
import AuthService from '../Services/AuthService';
import axios from "axios";

export default function FixedTaxes() {
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
<>
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
</>
)
}