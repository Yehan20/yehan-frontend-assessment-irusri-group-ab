import React from 'react'
import Alert from '@mui/material/Alert';

const AlertMessage = ({type,message}) => {
  return (
    <Alert  sx={{ marginTop:"10px" }} severity={type}>{message}</Alert>
  )
}

export default AlertMessage