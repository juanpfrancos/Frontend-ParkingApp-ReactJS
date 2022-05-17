import React, { useState, useEffect, forwardRef } from "react";
import AuthService from '../Services/AuthService';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import EditIcon from '@mui/icons-material/Edit';
import { SaveAlt } from "@material-ui/icons";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const tableIcons = {
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
};

//Columnas de la tabla
const columns = [
    { field: 'id_registro', title: 'ID'},  
    { field: 'placa', title: 'Placa'},
    { field: 'nombre_vehiculo', title: 'Tipo'},
    { field: 'ingreso', title: 'Hora Ingreso'},
    { field: 'salida', title: 'Hora Salida'},
    { field: 'total_horas', title: 'Total Tiempo'},
    { field: 'pago_inicial', title: 'Pago Inicial'},
    { field: 'pago_final', title: 'Pago Final'},
    { field: 'total_costo', title: 'Total Costo'},
    { field: 'nombre', title: 'Realizo'},
    { field: 'tipo_tarifa', title: 'Tipo Tarifa'},
    { field: 'en_parqueadero', title: 'En parqueadero'},
    { field: 'registro_activo', title: 'Registro activo'}
  ];
//Url
const endRegister = "registros/true";
const endRegisterOut = "registro";
const endRegisterDelete = "registros";


//Modal
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


function Io() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalOut, setModalOut]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [registroSeleccionado, setRegistroSeleccionado]=useState({
    id_registro: ""
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setRegistroSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{
    await axios.get(AuthService.API_URL + endRegister)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionOut=async()=>{
    await axios.delete(AuthService.API_URL + endRegisterOut+"/"+registroSeleccionado.id_registro)
    .then(response=>{
      setData(data.filter(registro=>registro.id_registro!==registroSeleccionado.id_registro));
      abrirCerrarModalOut();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(AuthService.API_URL + endRegisterDelete+"/"+registroSeleccionado.id_registro)
    .then(response=>{
      setData(data.filter(registro=>registro.id_registro!==registroSeleccionado.id_registro));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarRegistro=(registro, caso)=>{
    setRegistroSeleccionado(registro);
    (caso==="Retirar")?abrirCerrarModalOut()
    :
    abrirCerrarModalEliminar()
  };

  const abrirCerrarModalOut=()=>{
    setModalOut(!modalOut);
  };

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  };

  useEffect(()=>{
    peticionGet();
  }, []);

  const bodyOut=(
    <div className={styles.modal}>
      <p>¿Estás seguro que deseas retirar el vehiculo <b>{registroSeleccionado && registroSeleccionado.registro}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionOut()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalOut()}>No</Button>
      </div>
    </div>
  );

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>¿Estás seguro que deseas eliminar el registro <b>{registroSeleccionado && registroSeleccionado.registro}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <>
      <div>
        <MaterialTable
          columns={columns}
          data={data}
          icons={tableIcons}
          title="Vehiculos en parqueadero"
          actions={[
            {
              icon: () => <ExitToAppIcon/>,
              tooltip: 'Retirar vehiculo',
              onClick: (event, rowData) => seleccionarRegistro(rowData, "Retirar")
            },
            {
              icon: () => <DeleteOutlineIcon/>,
              tooltip: 'Eliminar registro',
              onClick: (event, rowData) => seleccionarRegistro(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
            exportButton: {
              pdf: true
            },
            paging: false,
            search: false,
            sorting: false
          }}
          localization={{
            header:{
              actions: "Acciones"
            },
            toolbar: {
              exportTitle: 'Exportar'
            },          
          }}
        />
        <Modal
          open={modalOut}
          onClose={abrirCerrarModalOut}>
          {bodyOut}
        </Modal>
        <Modal
          open={modalEliminar}
          onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
      </div>
    </>
  );
}
export default Io;