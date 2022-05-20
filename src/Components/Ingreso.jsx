import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    Grid,
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    Button
} from '@mui/material';
import AuthService from '../Services/AuthService';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body1,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
//Pasar por props el id de usuario
const Ingreso = (props) => {
    const initialValues = {
        placa: "",
        tipo_vehiculo: "1",
        realizo: props.id,
        tipo_tarifa: "1"
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const [formValues, setFormValues] = useState(initialValues);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
        AuthService.ingreso(JSON.stringify(formValues))
        window.location.reload(true);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, width: "60%", textAlign: "center", justify:"center"}}>
                <Item>
                    <form onSubmit={handleSubmit}>
                        <Grid container alignItems="center" justify="center" direction="column" >
                            <Grid item>
                                <TextField
                                    id="placa"
                                    name="placa"
                                    label="Placa"
                                    type="text"
                                    value={formValues.placa}
                                    onChange={handleInputChange}
                                />
                            </Grid>

                            <Grid item>
                                <FormControl>
                                    <FormLabel>Vehiculos</FormLabel>
                                    <RadioGroup
                                        name="tipo_vehiculo"
                                        value={formValues.tipo_vehiculo}
                                        onChange={handleInputChange}
                                        row
                                    >
                                        <FormControlLabel
                                            key="1"
                                            value="1"
                                            control={<Radio size="small" />}
                                            label="Moto"
                                        />
                                        <FormControlLabel
                                            key="2"
                                            value="2"
                                            control={<Radio size="small" />}
                                            label="Carro"
                                        />
                                        <FormControlLabel
                                            key="3"
                                            value="3"
                                            control={<Radio size="small" />}
                                            label="Caminoneta"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item>
                                <FormControl>
                                    <FormLabel>Tarifas</FormLabel>
                                    <RadioGroup
                                        name="tipo_tarifa"
                                        value={formValues.tipo_tarifa}
                                        onChange={handleInputChange}
                                        row
                                    >
                                        <FormControlLabel
                                            key="1"
                                            value="1"
                                            control={<Radio size="small" />}
                                            label="Hora"
                                        />
                                        <FormControlLabel
                                            key="2"
                                            value="2"
                                            control={<Radio size="small" />}
                                            label="Medio Dia"
                                        />
                                        <FormControlLabel
                                            key="3"
                                            value="3"
                                            control={<Radio size="small" />}
                                            label="Dia"
                                        />
                                        <FormControlLabel
                                            key="4"
                                            value="4"
                                            control={<Radio size="small" />}
                                            label="Mes"
                                        />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item>
                                <Button variant="contained" color="primary" type="submit" style={{
                                    margin: "5px"
                                }}>
                                    Registrar
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Item>
            </Box>
        </>
    );
}
export default Ingreso;