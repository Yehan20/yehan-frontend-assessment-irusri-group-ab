import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useGlobalContext } from '../../context/auth-context';


const CustomSnackBar = () => {
    
    const {loggedOut} = useGlobalContext();
    const [open, setOpen] = React.useState(loggedOut);



    // useEffect(()=>{

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            {/* <Button onClick={handleClick}>Open Snackbar</Button> */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                   You have logged out
                </Alert>
            </Snackbar>
        </div>

    )
}

export default CustomSnackBar