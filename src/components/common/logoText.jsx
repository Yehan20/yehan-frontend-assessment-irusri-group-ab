import React from 'react'
import { Typography } from '@mui/material'

const LogoText = ({size}) => {
  return (
     <Typography 
       sx={{ 
        fontFamily: "Great Vibes, Cursive",
        fontWeight:"400",
        fontStyle: "normal", 
        fontSize:`${size}px`,
        flexGrow: 1, display: { xs: 'none', sm: 'block' } 
      }}
      component="div"
    
          

    >Todos</Typography>
  )
}

export default LogoText