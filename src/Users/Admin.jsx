import * as React from "react";
import { useState, useEffect } from "react";
import Table from '../Components/Table'
import AuthService from '../Services/AuthService';
import SpacingGrid from "../Components/AvailabilityPie";
import axios from "axios";

export default function Admin() {
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
        { field: 'nombre_vehiculo', headerName: 'Tipo', width: 200 },
        { field: 'cuarto_hora', headerName: 'Cuarto de hora',  width: 200 },
        { field: 'hora', headerName: 'Hora',  width: 200 },
        { field: 'seis_horas', headerName: 'Medio dia', width: 200 },
        { field: 'dia', headerName: 'Dia', width: 200 },
        { field: 'mes', headerName: 'Mes', width: 200 }
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
   <>
        <Table data={tax} id={idTax} col={colTarifas} />
        <SpacingGrid/>
        <Table data={regIn} id={idReg} col={colRegistros} />
        <Table data={regOut} id={idReg} col={colRegistros} />
   </> 
  )
}
