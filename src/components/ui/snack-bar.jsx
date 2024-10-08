import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useGlobalContext } from '../../context/auth-context';

/*
  once logged out this notifies user with help from our context
*/ 

const CustomSnackBar = () => {
    
    const {loggedOut} = useGlobalContext();
    const [open, setOpen] = React.useState(loggedOut);

 
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>

            <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
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