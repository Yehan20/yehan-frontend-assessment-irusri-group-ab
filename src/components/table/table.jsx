import React from 'react'
import { Button, Table, TableBody, TableCell, TableRow, TableHead, Switch, Typography } from '@mui/material'
import { tableRows } from '../../data/data'

/*
  Responsible for printng the todos has propss passed from parents to peform todo's operations
*/

const DynamicTable = ({ todos, handleToggleCompletion, handleDeleteTodo, handleEdit }) => {
  return (
    <Table>
      <TableHead>
        <TableRow  sx={{ display: { xs: 'block', sm: 'table-row' } }}>
          {tableRows.map((tableRow, index) => {
            return <TableCell  sx={{ display: { xs: 'block', sm: 'table-cell' } }} key={index}>{tableRow}</TableCell>
          })}

        </TableRow>
      </TableHead>

      <TableBody>
        {todos.map((todo) => (
          <TableRow sx={{ display: { xs: 'block', sm: 'table-row' } }} key={todo.id} style={{ backgroundColor: todo.completed ? '#f7f7f7' : 'white' }}>
        
            <TableCell sx={{ display: { xs: 'block', sm: 'table-cell' } }}>{todo.title}</TableCell>
            <TableCell sx={{ display: { xs: 'block', sm: 'table-cell' } }}>{todo.description}</TableCell>
            <TableCell sx={{ display: { xs: 'block', sm: 'table-cell' } }}>
              <Switch
                checked={todo.completed}
                onChange={() => handleToggleCompletion(todo.id)}
                // disabled={todo.completed}
                color='primary'
              />
              <Typography  variant="body2" sx={{ marginLeft: 1 ,display:'inline-block'}}>
                {todo.completed ?'Done' :'Pending'}
              </Typography>
            </TableCell>
            <TableCell  sx={{ display: { xs: 'block', sm: 'table-cell' } }}>
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