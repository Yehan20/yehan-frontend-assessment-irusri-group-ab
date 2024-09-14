import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Skeleton } from '@mui/material';


const FeaturesCard = ({ title, image, text }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);


    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>

                {loading ? (
                <Skeleton variant="rectangular" width="100%" height={400} />
                ) : <>
                    <CardMedia
                        component="img"
                        height="240"
                        image={image}
                        alt="green iguana"
                        loading='lazy'
                    />
                    <CardContent>


                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>



                 

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            The core benefits of being organized and operating in a generally clutter-free environment are increased productivity and improved performance. And with those comes a greater sense of control, which is a vital part of stress management, resilience, and overall wellbeing.
                        </Typography>

                    </CardContent>
                </>
}

            </CardActionArea>
        </Card>

    )
}

export default FeaturesCard