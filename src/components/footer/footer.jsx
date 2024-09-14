import React from 'react'
import { Box, Typography } from '@mui/material'
import LogoText from '../common/logoText'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: (theme) => theme.palette.primary.main,padding:"20px",marginTop:"auto" }}>
       <Typography variant='div' sx={{ textAlign:'center',display:'flex',alignItems:'center', flexDirection: { xs: 'column', sm: 'row' }}}> 
        <LogoText size={'30'} />  Designed and developed by Yehan Nilanga </Typography>
    </Box>
  )
}

export default Footer