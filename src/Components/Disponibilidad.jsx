import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FaMotorcycle, FaCarSide, FaCar } from "react-icons/fa";

export default function Disponibilidad() {
  return (
    <>  
        <Box sx={{ display: 'flex', justifyContent:'center' }}>
            <Card sx={{ maxWidth: 600, margin:'2em' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/calendar-icon.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                    Mensualidad
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4}>
                            <FaMotorcycle   style={{color: 'white', fontSize: '50px'}}/>  
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <FaCarSide  style={{color: 'white', fontSize: '50px'}}/>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <FaCar  style={{color: 'white', fontSize: '50px'}}/>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Typography variant="h2" color="text.secondary">
                                3
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Typography variant="h2" color="text.secondary">
                                3
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Typography variant="h2" color="text.secondary">
                                3
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card sx={{ maxWidth: 600, margin:'2em' }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Clock-icon.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">
                    Horas / Dia
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4}>
                            <FaMotorcycle   style={{color: 'white', fontSize: '50px'}}/>  
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <FaCarSide  style={{color: 'white', fontSize: '50px'}}/>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <FaCar  style={{color: 'white', fontSize: '50px'}}/>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Typography variant="h2" color="text.secondary">
                                3
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Typography variant="h2" color="text.secondary">
                                3
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={4} md={4}>
                            <Typography variant="h2" color="text.secondary">
                                3
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    </>
  );
}