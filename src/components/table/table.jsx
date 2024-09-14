import { Button, Table, TableBody, TableCell, TableRow, TableHead, Switch, Typography } from '@mui/material'
import React from 'react'
import { tableRows } from '../../data/data'

const DynamicTable = ({ todos, handleToggleCompletion, handleDeleteTodo, handleEdit }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {tableRows.map((tableRow, index) => {
            return <TableCell key={index}>{tableRow}</TableCell>
          })}

        </TableRow>
      </TableHead>

      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id} style={{ backgroundColor: todo.completed ? '#f7f7f7' : 'white' }}>
            <TableCell>{todo.title}</TableCell>
            <TableCell>{todo.description}</TableCell>
            <TableCell>
              <Switch
                checked={todo.completed}
                onChange={() => handleToggleCompletion(todo.id)}
                disabled={todo.completed}
                color='primary'
              />
              <Typography  variant="body2" sx={{ marginLeft: 1 ,display:'inline-block'}}>
                {todo.completed ?'Done' :'Pending'}
              </Typography>
            </TableCell>
            <TableCell>
              <Button
                sx={{ marginRight: "5px", marginBottom: '5px' }}
                variant="contained"
                color="primary"
                onClick={() => handleEdit(todo.id)}
                disabled={todo.completed}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                sx={{ marginRight: "5px", marginBottom: '5px' }}
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
  )
}

export default DynamicTable