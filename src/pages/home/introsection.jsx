import { Grid2, Typography } from '@mui/material'
import React from 'react'

const IntroSection = () => {
    return (
        <React.Fragment>
            <Grid2 container>
                <Grid2 size={{ xs: 12 }}>
                    <Typography variant="h3"
                        textAlign={"center"}
                        fontWeight={600}
                        component={"h1"}
                        gutterBottom
                    >

                        Welcome to Todos


                    </Typography>

                    <Typography variant='h6' component='p' align='center' >
                        Manage your tasks efficiently with our easy-to-use todo application. Keep track of your to-dos, set reminders, and stay organized.
                    </Typography>
                </Grid2>
            </Grid2>

        </React.Fragment>
    )
}

export default IntroSection