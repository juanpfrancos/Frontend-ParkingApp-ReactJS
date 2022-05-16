import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import CssBaseline from '@mui/material/CssBaseline';
import CopyRight from '../Components/CopyRight';
import AuthService from './AuthService';

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required('El nombre es obligatorio').min(2, 'Demasiado corta').max(15, 'Debe tener 15 caracteres o menos'),
  email: Yup.string().email('Email inválido').required('Email es requerido'),
  password: Yup.string()
    .required('No se proporcionó contraseña')
    .min(8, 'La contraseña es demasiado corta - debe tener un mínimo de 8 caracteres')
    .matches(/\d+/, 'La contraseña debe tener un número')
    .matches(/[a-z]+/, 'La contraseña debe tener minúsculas')
    .matches(/[A-Z]+/, 'La contraseña debe tener mayúsculas')
    .matches(/[!?.@#$%^&*()-+]+/, 'La contraseña debe tener un carácter especial'),
  password2: Yup.string()
    .required('No se proporcionó contraseña')
    .min(8, 'La contraseña es demasiado corta - debe tener un mínimo de 8 caracteres')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
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
        Inscribirse
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
                  label='Nombre'
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
                <TextField name='password' label='Contraseña' type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} helperText={touched.password && errors.password} error={touched.password && Boolean(errors.password)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField name='password2' label='Repite la contraseña' variant='outlined' type='password' value={values.password2} onChange={handleChange} onBlur={handleBlur} helperText={touched.password2 && errors.password2} error={touched.password2 && Boolean(errors.password2)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' color='primary' fullWidth>
                  Inscribirse
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <p>
        ¿Ya tienes una cuenta?
        <NavLink to='/login' sx={{
              textDecoration: 'none',
              fontWeight: '600',
              paddingLeft: '0.5rem',
              cursor: 'pointer'
            }}>
            Acceso
        </NavLink>
      </p>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}

export default SignUp;