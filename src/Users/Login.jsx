import { LockOutlined } from '@mui/icons-material';
import { Avatar, Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import CopyRight from '../Components/CopyRight';


const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum')
    .matches(/\d+/, 'Password must have a number')
    .matches(/[a-z]+/, 'Password must have a lowercase')
    .matches(/[A-Z]+/, 'Password must have a uppercase')
    .matches(/[!?.@#$%^&*()-+]+/, 'Password must have a special char'),
  password2: Yup.string()
});

function Login() {
  const initialValues = {
    email: '',
    password: ''
  };

  const navigate = useNavigate();


  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);
    alert(
      `email: ${values.email}
      password: ${values.password}`
    );

    let data={email:values.email, password:values.password}
    fetch('http://127.0.0.1:8000/usuarios/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      response.json()
      let statusCode = response.status
    })
    .then((result) => {
      if (Object.keys(result)[0] === 'access_token'){
        alert('logueado')
      }
      else{
        alert('no logueado')
      }
    });
    

    resetForm();
    navigate('/Home');
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
        Login
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
                <TextField name='email' label='Email' variant='outlined' value={values.email} onChange={handleChange} onBlur={handleBlur} helperText={touched.email && errors.email} error={touched.email && Boolean(errors.email)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField name='password' label='Password' type='password' value={values.password} onChange={handleChange} onBlur={handleBlur} helperText={touched.password && errors.password} error={touched.password && Boolean(errors.password)} fullWidth />
              </Grid>
              <Grid item xs={12}>
                <Button type='submit' variant='contained' color='primary' fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <p>
        Don't have an account yet?
        <NavLink to='/register'sx={{
              textDecoration: 'none',
              fontWeight: '600',
              paddingLeft: '0.5rem'
            }}
            >
        
            Register.
        
        </NavLink>
      </p>
      <Box mt={5}>
        <CopyRight />
      </Box>
    </Container>
  );
}

export default Login;