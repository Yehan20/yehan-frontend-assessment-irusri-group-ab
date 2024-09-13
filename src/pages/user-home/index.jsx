import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Modal,
  Box,
  TextField,
  Switch,
  Snackbar,
  Alert,
  Typography,
  ButtonGroup,
  Grid2,
} from '@mui/material';
import { useGlobalContext } from '../../context/auth-context';
import CustomModel from '../../components/common/alertModel';
import DynamicTable from '../../components/table/table';



function TodoList() {
  const { user } = useGlobalContext();


  const [todos, setTodos] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);


  const [todoObject, setTodoObject] = useState({ newTodoTitle: '', newTodoDescription: '' })
  const [editTodoObject, setEditTodoObject] = useState({ newEditTodoTitle: '', newEditTodoDescription: '', id: '' })


  const [openEditModal, setOpenEditModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarError, setSnackBarError] = useState('');


  const handleTodoChange = (event) => {
    const name = event.target.name;
    const value = event.target.value

    setTodoObject((prev) => ({ ...prev, [name]: value }))
  }

  const handleTodoEditChange = (event) => {
    const name = event.target.name;
    const value = event.target.value

    setEditTodoObject((prev) => ({ ...prev, [name]: value }))
  }


  useEffect(() => {
    setTodos(user.todos)
    if (user.logged) {
      setOpenSnackbar(true)
      setSnackbarMessage(`Welcome back ${user.name}`)

    }
  }, [])

  const updateLocalStorage = (todos) => {
    let newUser = { ...user, todos }
    localStorage.setItem('user', JSON.stringify(newUser))
  }



  const handleAddTodo = () => {
    if (!todoObject.newTodoTitle || !todoObject.newTodoDescription) {
      setSnackBarError('error')
      setSnackbarMessage('fill all feilds')
      setOpenSnackbar(true);
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      title: todoObject.newTodoTitle,
      description: todoObject.newTodoDescription,
      completed: false,
    };
    setTodos([...todos, newTodo]);

    updateLocalStorage([...todos, newTodo]);
    setOpenAddModal(false);
    setSnackBarError('')
    setTodoObject({ newTodoTitle: '', newTodoDescription: '' })
    setOpenSnackbar(true);
    setSnackbarMessage('Todo added successfully');
  };

  const handleDeleteTodo = (id) => {
    setOpenSnackbar(true);
    setSnackBarError('')
    setSnackbarMessage('Todo Deleted successfully');
    setTodos(todos.filter((todo) => todo.id !== id));
    updateLocalStorage(todos.filter((todo) => todo.id !== id));

  };

  const handleToggleCompletion = (id) => {
    setSnackBarError('')

    let updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )

    setTodos(
      updatedTodos
    );
    updateLocalStorage(updatedTodos)
    setOpenSnackbar(true);
    setSnackbarMessage('Todo Completed successfully');
  };

  const handleEdit = (id) => {
    const modifiedTodo = todos.filter((todo) => todo.id === id)[0];
    setOpenEditModal(true)
    setEditTodoObject({ newEditTodoTitle: modifiedTodo.title, newEditTodoDescription: modifiedTodo.description, id: id })
  }

  const handleEditTodo = () => {

    if (!editTodoObject.newEditTodoDescription || !editTodoObject.newEditTodoTitle) {
      setSnackBarError('error')
      setSnackbarMessage('fill all feilds')
      setOpenSnackbar(true);
      return;
    }
    let editedTodos = todos.map((todo) =>
      todo.id === editTodoObject.id
        ? {
          ...todo, title: editTodoObject.newEditTodoTitle,
          description: editTodoObject.newEditTodoDescription
        }
        : todo
    )
    setTodos(
      editedTodos
    );

    updateLocalStorage(editedTodos)
    setOpenSnackbar(true);
    setSnackbarMessage('Todo Edited successfully');
    setEditTodoObject({ newEditTodoTitle: '', id: '', newEditTodoDescription: '' })
    setSnackBarError('')
    setOpenEditModal(false);
  };

  const clearAllTodos = () =>{
     setTodos([]);
     updateLocalStorage([]);
  }

  return (
    <Box>
      <Grid2 container>
        <Grid2 size={{ xs: 12 }}>

          <Typography gutterBottom variant='h5' textAlign={"start"} fontWeight={600} component={'h1'}>Todo List</Typography>

          <Box

            aria-label="Disabled button group"
            sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
          >
            <Button sx={{ margin: "20px 0" }} variant="contained" color="primary"
              onClick={() => setOpenAddModal(true)}>
              {todos.length <= 0 ? 'No Todos added Click to add your first' : 'Add Todo'}
            </Button>

           {todos.length >0 &&  <Button sx={{ margin: "20px 0" }} variant="contained" color="primary"
               onClick={clearAllTodos}>
              Clear All
            </Button>}
          </Box>



          {todos.length > 0 && 
            <DynamicTable todos={todos} handleToggleCompletion={handleToggleCompletion} handleEdit={handleEdit} handleDeleteTodo={handleDeleteTodo} />
          }


          <CustomModel type={'Add'} openModel={openAddModal} handleClose={() => setOpenAddModal(false)}
            handleTodoChange={handleTodoChange} todoObject={todoObject} handleClick={handleAddTodo}
          />

          <CustomModel type={'Update'} openModel={openEditModal} handleClose={() => setOpenEditModal(false)}
            handleTodoChange={handleTodoEditChange} todoObject={editTodoObject} handleClick={handleEditTodo} />

          <Snackbar variant="filled" anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
            <Alert variant='filled' severity={snackbarError ? snackbarError : 'success'}
              onClose={() => setOpenSnackbar(false)}>
              {snackbarMessage}
            </Alert>
          </Snackbar>


        </Grid2>
      </Grid2>
    </Box>

  );
}

export default TodoList;