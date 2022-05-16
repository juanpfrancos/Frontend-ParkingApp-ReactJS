import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import CssBaseline from '@mui/material/CssBaseline';
import CopyRight from '../Components/CopyRight';
import AuthService from './AuthService';

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email('Email invalido').required('Email es requerido'),
  password: Yup.string()
    .required('Debes ingresar contraseña')
    .min(8, 'La contraseña muy corta - debe contener como mínimo 8 caracteres')
    .matches(/\d+/, 'La contraseña debe contener un número')
    .matches(/[a-z]+/, 'La contraseña debe contener minúsculas')
    .matches(/[A-Z]+/, 'La contraseña debe contener mayúsculas')
    .matches(/[!?.@#$%^&*()-+]+/, 'La contraseña debe contener caracteres especiales'),
  password2: Yup.string()
});

function Login() {
  const initialValues = {
    email: '',
    password: ''
  };

  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    const data=JSON.stringify({email:values.email, password:values.password})
    AuthService.login(data).then(
      () => {
        navigate('/Home');
      },
      (error) => {
        console.log(error.response)
        console.log(error.message)
      }
    );

    resetForm();
  };

  return (
    <Container
      sx={{
        marginTop: '3rem',
        // mt: 6,
        height: 'calc(100vh - 3rem)',
        textAlign: 'center'
      }}
      maxWidth='sm'
    >
      <CssBaseline />
      <Avatar
        sx={{
          margin: '1rem auto',
          bgcolor: 'primary.main'
          // bgcolor: blue[500],
        }}
      >
        <LockOutlined />
      </Avatar>
      <Typography sx={{ margin: '1rem' }} variant='h4'>
        Acceso
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpValidationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          touched,
          errors,
          handleBlur
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField name='email' label='Email' value={values.email} onChange={handleChange} onBlur={handleBlur} helperText={touched.email && errors.email} error={touched.email && Boolean(errors.email)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField name='password' label='Contraseña' type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} helperText={touched.password && errors.password} error={touched.password && Boolean(errors.password)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained'  fullWidth>
                  Acceso
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <p>
        ¿Aún no tienes una cuenta?
        <NavLink to='/register'sx={{
              textDecoration: 'none',
              fontWeight: '600',
              paddingLeft: '0.5rem'
            }}
            >
        
            Registrar
        
        </NavLink>
      </p>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}

export default Login;