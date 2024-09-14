import React from 'react'
import FeaturesCard from '../../components/common/featurecard'
import { Grid2 as Grid } from '@mui/material'
import workImg from '../../assets/img/work.jpg'
import timeImg from '../../assets/img/time.jpg'
import paperImg from '../../assets/img/paper.jpg'

const FeaturedSection = () => {
    return (
        <Grid sx={{ margin: '50px 0px' }} container spacing={4}>
            <Grid size={{ xs: 12, sm: 4 }}>
                <FeaturesCard image={workImg} title={'Well Organized'} />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
                <FeaturesCard image={timeImg} title={'Less time consuming'} />
            </Grid>

            <Grid size={{ xs: 12, sm: 4 }}>
                <FeaturesCard image={paperImg} title={'Less Space'} />
            </Grid>

        </Grid>
    )
}

export default FeaturedSection