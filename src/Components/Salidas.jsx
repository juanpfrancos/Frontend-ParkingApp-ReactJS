import React, { useState, useEffect, forwardRef } from "react";
import AuthService from '../Services/AuthService';
import MaterialTable from "material-table";
import axios from 'axios';
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
    { field: 'tipo_tarifa', title: 'Tipo Tarifa'}
  ];
//Url
const endRegister = "registros/false";

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


function OutCar() {
  const styles= useStyles();
  const [data, setData]= useState([]);


  const peticionGet=async()=>{
    await axios.get(AuthService.API_URL + endRegister)
    .then(response=>{
      setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  useEffect(()=>{
    peticionGet();
  }, []);

  return (
    <>
        <MaterialTable
          style={{width: "100%" }}
          columns={columns}
          data={data}
          icons={tableIcons}
          title="Vehiculos retirados"
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
            toolbar: {
              exportTitle: 'Exportar'
            },          
          }}
        />
    </>
  );
}
export default OutCar;