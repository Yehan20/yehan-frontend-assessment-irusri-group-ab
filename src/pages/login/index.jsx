import React, { useEffect } from 'react';
import { Form, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box, FormControl, Grid2 as Grid, Typography } from '@mui/material';
import listImage from '../../assets/img/list.jpg'
import Prompt from '../../components/common/prompt';
import { useGlobalContext } from '../../context/auth-context';
import AlertMessage from '../../components/common/alert';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const {login,user,alert,setAlert} = useGlobalContext()
  const navigate = useNavigate();

  const validationSchema = yup.object({

    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .required('Password is required'),
  });


  const formik = useFormik({
  
    initialValues: {
      email: '',
      password: '',
    
    },
    validationSchema: validationSchema,
    
    onSubmit: (values) => {
         console.log(values)
         login(values)
    },
  });

    // user is updated so login
    useEffect(()=>{
      if(user){
          navigate('/user-home')
      }
   },[user])

   // clear form 
   useEffect(()=>{
     if(alert) { 
        formik.resetForm();
        setTimeout(()=>{
          setAlert('')
        },1000)
     }
   },[alert])


  return (
    <Box sx={{ paddingTop: "20px" }}>
      <Typography variant='h3' textAlign={"center"} fontWeight={600} component={'h1'}>Login</Typography>
      <Grid container spacing={10} sx={{ marginTop: "40px" }}> {/* Container with spacing */}

        <Grid  size={{ xs: 12, sm: 6 }}>

          <img

            src={listImage}
            alt={"list image"}
            loading="lazy"
            height={"400"}
            width={"100%"}
          />

        </Grid>

        <Grid  size={{ xs: 12 , sm: 6 }}>


          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 0 } }}
            noValidate
            onSubmit={formik.handleSubmit}
          >


            <Box component="div" sx={{
              marginBottom: 4, '& .MuiTextField-root': {
                margin: 0
              }
            }}>

              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}


              />
            </Box>

            <Box component="div" sx={{
              marginBottom: 4, '& .MuiTextField-root': {
                margin: 0
              }
            }}>

              <TextField

                fullWidth
                id="password"
                name="password"
                label="Password"
                required
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />

            </Box>





            <Box component={"div"} sx={{ marginBottom: 2 }} >

              <Button color="primary" variant="contained" fullWidth type="submit" >
                 Login
              </Button>
            </Box>

            <Prompt Messagetext={'Not Registered yet'} linkText={'Click here'} url={'/login'} />

            {alert && <AlertMessage message={alert.message} type={alert.type}/>}
          </Box>

        </Grid>

      </Grid>
    </Box>
  )
}


export default Register;