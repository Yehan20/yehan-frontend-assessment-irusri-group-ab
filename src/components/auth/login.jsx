import { Box, Button, Grid2 as Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import Prompt from '../common/prompt'
import { useFormik } from "formik";
import { useGlobalContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import { LoginvalidationSchema } from "../../utils/validationScehma";
import AlertMessage from '../common/alert'

const LoginForm = () => {
  
    const { login, user, alert, setAlert,loading } = useGlobalContext();
    const navigate = useNavigate();
  
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginvalidationSchema,
  
      onSubmit: (values) => {
        console.log(values);
        login(values);
      },
    });
  
    // user is updated so login
    useEffect(() => {
      if (user) {
        navigate("/todo-list-user");
      }
    }, [user]);
  
  
    // clear form
    useEffect(() => {
      if (alert) {
        formik.resetForm();
        setTimeout(() => {
          setAlert("");
        }, 1000);
      }
    }, [alert]);
  
    
  return (
    <Grid sx={{display:"flex" ,alignItems:"center"}} size={{ xs: 12, sm: 6 }}>
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 0 },width:"100%" }}
      noValidate
      onSubmit={formik.handleSubmit}
    >
      <Box
        component="div"
        sx={{
          marginBottom: 4,
          "& .MuiTextField-root": {
            margin: 0,
          },
        }}
      >
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

      <Box
        component="div"
        sx={{
          marginBottom: 4,
          "& .MuiTextField-root": {
            margin: 0,
          },
        }}
      >
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
          error={
            formik.touched.password && Boolean(formik.errors.password)
          }
          helperText={formik.touched.password && formik.errors.password}
        />
      </Box>

      <Box component={"div"} sx={{ marginBottom: 2 }}>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
          sx={{ padding:"10px 0" }}
        >
          Login
        </Button>
      </Box>

      <Prompt
        Messagetext={"Not Registered yet "}
        linkText={"Click here"}
        url={"/register"}
      />

      {alert && (
        <AlertMessage message={alert.message} type={alert.type} />
      )}
    </Box>
  </Grid>
  )
}

export default LoginForm