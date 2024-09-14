import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const LogoText = ({size,hasLink}) => {
  return (
     <Typography 
       sx={{ 
        fontFamily: "Great Vibes, Cursive",
        fontWeight:"400",
        fontStyle: "normal", 
        fontSize:`${size}px`,
        
        flexGrow: 1, display: {  sm: 'block' }, textAlign:{xs:'right',sm:'left'} ,
        '& a':{
           textDecoration:'none',
           color:"#000"        }
      }}
      component="div"
    
          

    >{hasLink?<Link to={'/'}>Todos</Link>:'Todos'}</Typography>
  )
}

export default LogoText