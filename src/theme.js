import { createTheme } from '@mui/material/styles';

const theme = createTheme(
  {
    palette: {
      type: 'dark',
      //mode:'dark',
      primary: {
        main: '#ffd600',
      },
      background: {
        paper: '#212121',
        default: '#111111',
      },
    },
    typography: {
      fontFamily: 'Open Sans',
      h1: {
        fontFamily: 'Roboto',
        color:'#fff'
      },
      h2: {
        fontFamily: 'Roboto',
      },
      h3: {
        fontFamily: 'Roboto',
      },
      h4: {
        fontFamily: 'Roboto',
      },
      h6: {
        fontFamily: 'Roboto',
      },
      h5: {
        fontFamily: 'Roboto',
        color:'#fff'
      },
      subtitle1: {
        fontFamily: 'Roboto',
      },
      subtitle2: {
        fontFamily: 'Roboto',
      },
      button: {
        fontFamily: 'Roboto',
        fontWeight: 900,
        color: 'red'
      },
      overline: {
        fontFamily: 'Roboto',
      },
    },
  }
  )

  export default theme;