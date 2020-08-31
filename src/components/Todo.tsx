import React from 'react'
import { Checkbox, FormControlLabel } from '@material-ui/core'

interface TodoProps {
  todo: {
    id: string
    complete: boolean
    name: string
  }
  toggleComplete: (id: string) => void
}

const Todo: React.FunctionComponent<TodoProps> = ({ todo, toggleComplete }) => {
  function runTodoClick() {
    toggleComplete(todo.id)
  }

  return (
    <FormControlLabel
      control={<Checkbox checked={todo.complete} onChange={runTodoClick} name="todo" color="secondary" />}
      label={todo.name}
    />
  )
}

export default Todo
