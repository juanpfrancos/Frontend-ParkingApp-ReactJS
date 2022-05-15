import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';
import AuthService from '../Services/AuthService';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

//Columnas de la tabla
const columns = [
    { field: 'id_vehiculo', title: 'ID', hide: true },  
    { field: 'nombre_vehiculo', title: 'Tipo'},
    { field: 'cuarto_hora', title: 'Cuarto de hora'},
    { field: 'hora', title: 'Hora',  width: 200 },
    { field: 'seis_horas', title: 'Medio dia'},
    { field: 'dia', title: 'Dia'},
    { field: 'mes', title: 'Mes'}
  ];
//Url
const endTarifas = "tarifasCompuestas";
const endTarifasPut = "tarifas";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function Taxes() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [tarifaSeleccionada, setTarifaSeleccionada]=useState({
    id_vehiculo: "",
    cuarto_hora: "",
    hora: "",
    seis_horas: "",
    dia: "",
    mes: ""
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setTarifaSeleccionada(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{
    await axios.get(AuthService.API_URL + endTarifas)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    await axios.put(AuthService.API_URL + endTarifasPut+"/"+tarifaSeleccionada.id_vehiculo, tarifaSeleccionada)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(tarifa=>{
        if(tarifa.id_vehiculo===tarifaSeleccionada.id_vehiculo){
          tarifa.cuarto_hora=tarifaSeleccionada.cuarto_hora;
          tarifa.hora=tarifaSeleccionada.hora;
          tarifa.seis_horas=tarifaSeleccionada.seis_horas;
          tarifa.dia=tarifaSeleccionada.dia;
          tarifa.mes=tarifaSeleccionada.mes;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarTarifa=(tarifa, caso)=>{
    setTarifaSeleccionada(tarifa);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    peticionGet();
  }, [])

  const bodyEditar=(
      <div className={styles.modal}>
        <h3>Editar Tarifa</h3>
        <TextField className={styles.inputMaterial} label="Cuarto hora" name="cuarto_hora" onChange={handleChange} value={tarifaSeleccionada&&tarifaSeleccionada.cuarto_hora}/>
        <br />
        <TextField className={styles.inputMaterial} label="Hora" name="hora" onChange={handleChange} value={tarifaSeleccionada&&tarifaSeleccionada.hora}/>          
        <br />
        <TextField className={styles.inputMaterial} label="Medio dia" name="seis_horas" onChange={handleChange} value={tarifaSeleccionada&&tarifaSeleccionada.seis_horas}/>
        <br />
        <TextField className={styles.inputMaterial} label="Dia" name="dia" onChange={handleChange} value={tarifaSeleccionada&&tarifaSeleccionada.dia}/>
        <br />
        <TextField className={styles.inputMaterial} label="Dia" name="mes" onChange={handleChange} value={tarifaSeleccionada&&tarifaSeleccionada.mes}/>
        <br /><br />
        <div align="right">
          <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
          <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
        </div>
      </div>
  )




  return (
    <>
      <div>
      <MaterialTable
          columns={columns}
          data={data}
          title="Tarifas"  
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar Tarifa',
              onClick: (event, rowData) => seleccionarTarifa(rowData, "Editar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />
        <Modal
          open={modalEditar}
          onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>
      </div>
    </>
  );
}
export default Taxes;