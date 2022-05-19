import React, { useState, useEffect, forwardRef } from "react";
import AuthService from '../Services/AuthService';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
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
            paging: true,
            search: true,
            sorting: true
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
    </>
  );
}
export default Io;