import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Prompt = ({ Messagetext, linkText, url }) => {
    return (
        <Typography variant="body1" >
            {Messagetext}
            <Link to={url} color="primary">
                {linkText}
            </Link>

        </Typography>
    )
}

export default Prompt