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
} from '@mui/material';
import { useGlobalContext } from '../../context/auth-context';

const initialTodos = [
  { id: 1, title: 'Todo 1', description: 'This is the first todo.', completed: false },
  { id: 2, title: 'Todo 2', description: 'This is the second todo.', completed: false },
  // Add more initial todos here
];

function TodoList() {
  const { user } = useGlobalContext();


  const [todos, setTodos] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoDescription, setNewTodoDescription] = useState('');

  const [openEditModal, setOpenEditModal] = useState(false);
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoTitle, setEditTodoTitle] = useState('');
  const [editTodoDescription, setEditTodoDescription] = useState('');

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarError, setSnackBarError] = useState('');

  useEffect(() => {
    setTodos(user.todos)
  }, [])

  const updateLocalStorage = (todos) => {
    let newUser = { ...user, todos }
    localStorage.setItem('user', JSON.stringify(newUser))
  }



  const handleAddTodo = () => {
    if (!newTodoTitle || !newTodoDescription) {
      setSnackBarError('error')
      setSnackbarMessage('fill all feilds')
      setOpenSnackbar(true);
      return;
    }
    const newTodo = {
      id: todos.length + 1,
      title: newTodoTitle,
      description: newTodoDescription,
      completed: false,
    };
    setTodos([...todos, newTodo]);

    updateLocalStorage([...todos, newTodo]);

    setOpenAddModal(false);
    setSnackBarError('')
    setNewTodoTitle('');
    setNewTodoDescription('');
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
    setEditTodoId(id)
    setEditTodoTitle(modifiedTodo.title);
    setEditTodoDescription(modifiedTodo.description)
  }

  const handleEditTodo = () => {

    if (!editTodoDescription || !editTodoTitle) {
      setSnackBarError('error')
      setSnackbarMessage('fill all feilds')
      setOpenSnackbar(true);
      return;
    }
    let editedTodos = todos.map((todo) =>
      todo.id === editTodoId
        ? { ...todo, title: editTodoTitle, description: editTodoDescription }
        : todo
    )
    setTodos(
        editedTodos
    );
    updateLocalStorage(editedTodos)
    
    setOpenSnackbar(true);
    setSnackbarMessage('Todo Edited successfully');
    setSnackBarError('')
    setOpenEditModal(false);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <Button sx={{ marginBottom: "20px" }} variant="contained" color="primary" onClick={() => setOpenAddModal(true)}>
        {todos.length <= 0 ? 'No Todos added Click to add your first' : 'Add Todo'}
      </Button>
      {todos.length > 0 &&

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos && todos.map((todo) => (
              <TableRow key={todo.id} style={{ backgroundColor: todo.completed ? '#f2f2f2' : 'white' }}>
                <TableCell>{todo.title}</TableCell>
                <TableCell>{todo.description}</TableCell>
                <TableCell>
                  <Switch
                    checked={todo.completed}
                    onChange={(event) => handleToggleCompletion(todo.id)}
                    disabled={todo.completed}
                  />
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ marginRight: "5px" }}
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(todo.id)}
                    disabled={todo.completed}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteTodo(todo.id)}
                    disabled={todo.completed}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }


      <Modal sx={{ display: "flex", justifyContent: "center" }} open={openAddModal} onClose={() => setOpenAddModal(false)}>
        <Box sx={{ position: 'absolute', top: 50, width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography gutterBottom>Add a Todo</Typography>
          <TextField
            label="Title"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            fullWidth
          />
          <br /> <br />
          <TextField
            label="Description"
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
            fullWidth
            multiline
          />
          <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Box>
      </Modal>
      <Modal sx={{ display: "flex", justifyContent: "center" }} open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Box sx={{ position: 'absolute', top: 50, width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
          <Typography gutterBottom>Edit a Todo</Typography>

          <TextField
            label="Title"
            value={editTodoTitle}
            onChange={(e) => setEditTodoTitle(e.target.value)}
            fullWidth
          />
          <br /><br />
          <TextField
            label="Description"
            value={editTodoDescription}
            onChange={(e) => setEditTodoDescription(e.target.value)}
            fullWidth
            multiline
          />
          <Button sx={{ marginTop: '20px' }} variant="contained" color="primary" onClick={handleEditTodo}>
            Update
          </Button>
        </Box>
      </Modal>
      <Snackbar variant="filled" anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={openSnackbar} autoHideDuration={2000} onClose={() => setOpenSnackbar(false)}>
        <Alert variant='filled' severity={snackbarError ? snackbarError : 'success'}
          onClose={() => setOpenSnackbar(false)}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default TodoList;