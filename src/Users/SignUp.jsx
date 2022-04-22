import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import CopyRight from '../Components/CopyRight';
import AuthService from '../Services/auth';

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required('Display name is required').min(2, 'Too short').max(15, 'Must be 15 char or less'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .matches(/\d+/, 'Password must have a number')
    .matches(/[a-z]+/, 'Password must have a lowercase')
    .matches(/[A-Z]+/, 'Password must have a uppercase')
    .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
  password2: Yup.string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

function SignUp() {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    password2: ''
  };

  const navigate = useNavigate();
 
  const handleSubmit = (values, { resetForm }) => {

    const data=JSON.stringify({nombre:values.username, email:values.email, password:values.password, rol:'administrador'})
    
    AuthService.signup(data).then(
      () => {
        navigate('/Home');
        window.location.reload();
      },
      (error) => {
        console.log(error.response)
        console.log(error.message)
      }
    );

    alert('Usuario Creado')
    resetForm();
    navigate('/login');
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
        Sign Up
      </Typography>
      {/* //! Envolvemos todo el formulario. 
        Tiene su propio estado local. Además, no definimos un estado. 
        Simplemente definimos initialValues ​​​​con const arriba. 
        Definimos valores iniciales en la etiqueta fórmica. */}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        //! Enviamos la validación que preparamos con Yup aquí.
        validationSchema={signUpValidationSchema}
      >
        {/* //!Ponemos todo el formulario entre llaves. Y definimos todas las variables aquí usando la función de flecha. También es importante desestructurar los valores */}
        {({
            //!Asignamos las variables (valores) que definimos como parámetros a las variables de valor en el TextField.
          values,
          handleChange,
          //! Primero definimos handleSubmit aquí, luego en Formik. A continuación, creamos la función anterior.
          handleSubmit,
          //! Necesitamos agregar toques y errores y handleBlur--> para obtener el error de validación.
          touched,
          errors,
          //! handleBlur --> se vuelve borroso cuando dejamos el foco, esa es la entrada.
          handleBlur
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  name='username'
                  label='User Name'
                  variant='outlined'
                  value={values.username}
                  onChange={handleChange}
                  //! onBlur --> después de fuera de foco
                  onBlur={handleBlur}
                  //! Advertencia de validación en la entrada de texto auxiliar
                  helperText={touched.username && errors.username}
                  //! para dar la advertencia como un error (el color se volvió rojo)
                  error={touched.username && Boolean(errors.username)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField name='email' label='Email' variant='outlined' value={values.email} onChange={handleChange} onBlur={handleBlur} helperText={touched.email && errors.email} error={touched.email && Boolean(errors.email)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField name='password' label='Password' type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} helperText={touched.password && errors.password} error={touched.password && Boolean(errors.password)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField name='password2' label='Password Again' variant='outlined' type='password' value={values.password2} onChange={handleChange} onBlur={handleBlur} helperText={touched.password2 && errors.password2} error={touched.password2 && Boolean(errors.password2)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' color='primary' fullWidth>
                  SignUp
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <p>
        Already have an account?
        <NavLink to='/login' sx={{
              textDecoration: 'none',
              fontWeight: '600',
              paddingLeft: '0.5rem',
              cursor: 'pointer'
            }}>

            Login.

        </NavLink>
      </p>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}

export default SignUp;