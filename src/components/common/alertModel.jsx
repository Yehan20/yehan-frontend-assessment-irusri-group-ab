import React from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'


const CustomModel = ({ type, openModel, handleClose, handleTodoChange, todoObject, handleClick }) => {



    return (
        <React.Fragment>
            {
              type === 'Add' ? <Modal sx={{ display: "flex", justifyContent: "center" }} open={openModel} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: 50, width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                        <Typography gutterBottom>Add a Todo</Typography>
                        <TextField
                            label="Title"
                            name='newTodoTitle'
                            value={todoObject.newTodoTitle}
                            onChange={handleTodoChange}
                            fullWidth
                        />
                        <br /> <br />
                        <TextField
                            label="Description"
                            name='newTodoDescription'
                            value={todoObject.newTodoDescription}
                            onChange={handleTodoChange}
                            fullWidth
                            multiline
                        />
                        <Button sx={{ marginTop: '20px' }} variant="contained" color="primary"
                            onClick={handleClick}>
                            Add
                        </Button>
                    </Box>
                </Modal> :
                 <Modal sx={{ display: "flex", justifyContent: "center" }} open={openModel} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: 50, width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                        <Typography gutterBottom>Edit a Todo</Typography>

                        <TextField
                            label="Title"
                            value={todoObject.newEditTodoTitle}
                            onChange={handleTodoChange}
                            fullWidth
                            name="newEditTodoTitle"
                        />
                        <br /><br />
                        <TextField
                            label="Description"
                            value={todoObject.newEditTodoDescription}
                            onChange={handleTodoChange}
                            fullWidth
                            multiline
                            name="newEditTodoDescription"
                        />
                        <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" onClick={handleClick}>
                            Update
                        </Button>
                    </Box>
                </Modal>
            }
    
        </React.Fragment>
    )
}

export default CustomModel