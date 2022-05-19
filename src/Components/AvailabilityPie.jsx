import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AuthService from '../Services/AuthService';
import { ChartPie } from './Chart';
import axios from "axios";
import { experimentalStyled as styled } from '@mui/material/styles';

import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body1,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const GetChart = (props) => {
  const [loaded, setLoaded] = useState(false);
  const endpoint = `disponibilidad/${props.typeVehicle}/${props.period}`
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const dataresp = async () =>{
      try{      
        const res = await axios.get(AuthService.API_URL + endpoint )
        setResponse(res.data);
      }catch(error){
        console.log("error de carga");
      }finally{
        setLoaded(true);
      }

    }
    dataresp();
  }, []);
  if (loaded){
    return (
      <>
        <ChartPie disp={response.capacidad-response.ocupados} ocup={response.ocupados}/>
      </>
    );
  }
  return <span>Cargando</span>
}

export default function SpacingGrid() {

  return (
  <>
    <Box sx={{ flexGrow: 1, width: "60%", textAlign: "center", justify:"center"}}>
      <Item>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" display="flex" spacing={5}>
            <Grid item xs={3}><h3>Tipo de servicio</h3></Grid>
            <Grid item xs={3}>
              <h3><TwoWheelerIcon /> Motos</h3>
            </Grid>
            <Grid item xs={3}>
              <h3><TimeToLeaveIcon /> Carros</h3>
            </Grid>
            <Grid item xs={3}>
              <h3><LocalShippingIcon /> Camionetas</h3>
            </Grid>
          </Grid>
        </Grid>
        <hr />
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" spacing={5}>
            <Grid item xs={3}>
              <h3>Horas/<br/>Medio dia/<br/>Dia</h3>
              <AvTimerIcon />
            </Grid>
            {[1, 2, 3].map((value) => (
              <Grid key={value} item xs={3}>
                <GetChart typeVehicle={value} period="1"/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <hr />
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" spacing={5}>
          <Grid item xs={3}>
            <h3>Mensualidad</h3>
            <DateRangeIcon />
          </Grid>
            {[1, 2, 3].map((value) => (
              <Grid key={value} item xs={3}>
                <GetChart typeVehicle={value} period="4"/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        </Item>
      </Box>     
    </>
  );
}