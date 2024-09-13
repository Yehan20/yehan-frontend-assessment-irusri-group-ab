import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main,padding:"20px",marginTop:"auto" }}>
       <Typography align='center'> Task Tracker </Typography>
    </Box>
  )
}

export default Footer