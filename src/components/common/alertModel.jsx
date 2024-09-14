import React from 'react'
import { Box, Button, Modal, TextField, Typography } from '@mui/material'


const CustomModel = ({ type, openModel, handleClose, handleTodoChange, todoObject, handleClick }) => {



    return (
        <React.Fragment>
            {
              type === 'Add' ? <Modal sx={{ display: "flex", justifyContent: "center" }} open={openModel} onClose={handleClose}>
                    <Box component="form"  sx={{ position: 'absolute', top: 50,  width: { xs: 350, sm: 500 }, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                        <Typography sx={{ marginBottom:"20px" }}>Add a Todo</Typography>
                        <TextField
                            label="Title"
                            name='newTodoTitle'
                            value={todoObject.newTodoTitle}
                            onChange={(e)=>handleTodoChange("ADD",e)}
                            fullWidth
                        />
                        <br /> <br />
                        <TextField
                            label="Description"
                            name='newTodoDescription'
                            value={todoObject.newTodoDescription}
                            onChange={(e)=>handleTodoChange("ADD",e)}
                            fullWidth
                            multiline
                        />
                        <Button sx={{ marginTop: '20px' }} variant="contained" color="primary"
                            onClick={handleClick}>
                            Add
                        </Button>
                    </Box>
                </Modal> :
                 <Modal  sx={{ display: "flex", justifyContent: "center" }} open={openModel} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: 50,  width: { xs: 350, sm: 500 }, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                        <Typography sx={{ marginBottom:"20px" }}>Edit a Todo</Typography>

                        <TextField
                            label="Title"
                            value={todoObject.newEditTodoTitle}
                            onChange={(e)=>handleTodoChange("UPDATE",e)}
                            fullWidth
                            name="newEditTodoTitle"
                        />
                        <br /><br />
                        <TextField
                            label="Description"
                            value={todoObject.newEditTodoDescription}
                            onChange={(e)=>handleTodoChange("UPDATE",e)}
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