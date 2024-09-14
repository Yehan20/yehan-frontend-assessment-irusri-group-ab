import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

// Custom Message with a link used in login and sign up 

const Prompt = ({ Messagetext, linkText, url }) => {
    return (
        <Typography variant="body1" >
            {Messagetext} 

            <Link style={{ textDecoration:'none' }} to={url} color="primary">
                {linkText}
            </Link>

        </Typography>
    )
}

export default Prompt