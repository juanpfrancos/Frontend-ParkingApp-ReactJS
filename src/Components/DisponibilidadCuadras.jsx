import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { ChartPie } from './Chart';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  return (
    <>
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5].map((value) => (
              <Grid key={value} item>
              <Paper
                sx={{
                  height: 100,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[0, 1, 2, 3, 4].map((value) => (
              <Grid key={value} item>
              <Paper
                sx={{
                    height: 100,
                    width: 100,
                    backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : 'blue',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[1, 2, 3].map((value) => (
              <Grid key={value} item>
                <ChartPie disp={4}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={spacing}>
          {[1, 2, 3].map((value) => (
              <Grid key={value} item>
                <ChartPie/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}