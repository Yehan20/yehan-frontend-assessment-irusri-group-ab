import React, { useEffect, useState } from 'react';
import {
  Button,
  Box,
  TextField,
  Snackbar,
  Alert,
  Typography,
  Grid2,

} from '@mui/material';
import { useGlobalContext } from '../../context/auth-context';
import CustomModel from '../../components/common/alertModel';
import DynamicTable from '../../components/table/table';

/*
  Contains all operations of dodos starting from fetching it from a user to local storage to updating searching and clearning
  with the global context and snackbar notifies user actions
*/

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
  const [searchQuery, setSearchQuery] = useState('');
  
  // update and add logi
  const handleInput = (action,event) =>{
    const name = event.target.name;
    const value = event.target.value
    if(action === 'ADD') {
      setTodoObject((prev) => ({ ...prev, [name]: value }))

    } 
    if(action === 'UPDATE') {
      setEditTodoObject((prev) => ({ ...prev, [name]: value }))

    }  
  }
  
  // customized snack bar
  const toggleSnackBar = (message,status,error)=>{
    setSnackbarMessage(message)
    setOpenSnackbar(status);
    setSnackBarError(error)
  }
  
  // user logs in or register welcome message
  useEffect(() => {
    console.log(user)
    setTodos(user.todos)
    if (user.logged) {
      toggleSnackBar(`Welcome back ${user.name}`,true,'')
    }
  }, [])
 
  // helper function that updates the todos to the local storage
  const updateLocalStorage = (todos) => {
    let newUser = { ...user, todos }
    localStorage.setItem('user', JSON.stringify(newUser))
  }


   // Adding todo checks for validations
  const handleAddTodo = () => {
    
    if (!todoObject.newTodoTitle || !todoObject.newTodoDescription) {
      toggleSnackBar('Fill all feilds',true,'error')
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoObject.newTodoTitle,
      description: todoObject.newTodoDescription,
      completed: false,
    };
    console.log(newTodo,todos);
    
    setTodos([...todos, newTodo]);

    updateLocalStorage([...todos, newTodo]);
    setOpenAddModal(false);
    setTodoObject({ newTodoTitle: '', newTodoDescription: '' })
    toggleSnackBar('Todo added successfully',true,'')

  };
 
  // Remove the todo
  const handleDeleteTodo = (id) => {
    toggleSnackBar('Todo deleted successfully',true,'')

    setTodos(todos.filter((todo) => todo.id !== id));
    updateLocalStorage(todos.filter((todo) => todo.id !== id));

  };
  
  // Complete or Mark Uncomplete todo
  const handleToggleCompletion = (id) => {
    setSnackBarError('')

    let updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
   
    let inComplete =  !(updatedTodos.find(todo=>todo.id === id).completed);

    setTodos(
      updatedTodos
    );
    updateLocalStorage(updatedTodos)
    
    // check if all todoes are complete
    let isAllComplete = updatedTodos.filter((updatedTodo)=>!updatedTodo.completed)
   console.log(isAllComplete)
   
    if(isAllComplete.length === 0) {
      toggleSnackBar('Congratulations All of your Todos are Done',true,'')
       return 
    } 

    if(inComplete){
        toggleSnackBar('Todo Marked Incomplete Again',true,'error')
      return 
    }

    toggleSnackBar('Todo completed successfully',true,'')

  };
  
  // Edit todo check for validations first
  const handleEdit = (id) => {
    const modifiedTodo = todos.filter((todo) => todo.id === id)[0];
    setOpenEditModal(true)
    setEditTodoObject({ newEditTodoTitle: modifiedTodo.title, newEditTodoDescription: modifiedTodo.description, id: id })
  }

  const handleEditTodo = () => {

    if (!editTodoObject.newEditTodoDescription || !editTodoObject.newEditTodoTitle) {
      toggleSnackBar('Fill all feilds',true,'error')

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
    toggleSnackBar('Todo Edited successfully',true,'')

    setEditTodoObject({ newEditTodoTitle: '', id: '', newEditTodoDescription: '' })
    setSnackBarError('')
    setOpenEditModal(false);
  };
  
  // Clear todos
  const clearAllTodos = () =>{
     setTodos([]);
     updateLocalStorage([]);
     toggleSnackBar('Todos Cleared',true,'')

  }



  // Filter todos based on the search make sure applicatin doesnt
  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (

      <Grid2 container>
        <Grid2 size={{ xs: 12 }}>

          <Typography gutterBottom variant='h5' textAlign={"start"} fontWeight={600} component={'h1'}>Todo List</Typography>


          <TextField
          label="Search Todos"
          variant="outlined"
          fullWidth
          sx={{ margin:"10px 0" }}
          rows={1}
            size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

          <Box

            aria-label="Disabled button group"
            sx={{ display: "flex", gap: "20px", justifyContent: "space-between" }}
          >
            <Button sx={{ margin: "20px 0" }} variant="contained" color="primary"
              onClick={() => setOpenAddModal(true)}>
               Add Todo
            </Button>

           {(todos && todos.length >0) &&  <Button sx={{ margin: "20px 0" }} variant="contained" color="secondary"
               onClick={clearAllTodos}>
              Clear All
            </Button>}
          </Box>



          {(todos && todos.length > 0 ) && 
            <DynamicTable todos={filteredTodos} handleToggleCompletion={handleToggleCompletion} handleEdit={handleEdit} handleDeleteTodo={handleDeleteTodo} />
          }

          { (filteredTodos.length<=0 && searchQuery)  && <Typography sx={{ marginTop:'10px' }}>No Results found </Typography> }
{/* 
          {!todos &&   <CircularProgress color="black" />} */}


          <CustomModel type={'Add'} openModel={openAddModal} handleClose={() => setOpenAddModal(false)}
            handleTodoChange={handleInput} todoObject={todoObject} handleClick={handleAddTodo}
          />

          <CustomModel type={'Update'} openModel={openEditModal} handleClose={() => setOpenEditModal(false)}
            handleTodoChange={handleInput} todoObject={editTodoObject} handleClick={handleEditTodo} />

          <Snackbar style={{ height: 200, width: 350, flexGrow: 0 }}  anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
            <Alert variant='filled'   severity={snackbarError ? snackbarError : 'success'}
              onClose={() => setOpenSnackbar(false)}>
              {snackbarMessage}
            </Alert>
          </Snackbar>


        </Grid2>
      </Grid2>
  

  );
}

export default TodoList;