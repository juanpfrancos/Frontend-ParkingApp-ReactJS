import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AuthService from '../Services/AuthService';
import { ChartPie } from './Chart';
import axios from "axios";


const GetChart = (props) => {
  const [loaded, setLoaded] = useState(false);
  const endpoint = `disponibilidad/${props.typeVehicle}/${props.period}`
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const dataresp = async () =>{
      try{      
        const res = await axios.get(AuthService.API_URL + endpoint )
        setResponse(res.data);
        console.log(res.data);
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
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[1, 2, 3].map((value) => (
              <Grid key={value} item>
                <GetChart typeVehicle={value} period="1"/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
          {[1, 2, 3].map((value) => (
              <Grid key={value} item>
                <GetChart typeVehicle={value} period="4"/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}