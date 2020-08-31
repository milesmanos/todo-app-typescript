import React from 'react'
import Todo from './Todo'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  todo: {
    height: 48,
  },
})

interface TodoListProps {
  todos: {
    id: string
    complete: boolean
    name: string
  }[]
  toggleComplete: (id: string) => void
}

const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, toggleComplete }) => {
  const classes = useStyles()
  return (
    <Grid container direction="column-reverse" justify="flex-end" alignItems="flex-start">
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Grid item className={classes.todo}>
              <Todo todo={todo} toggleComplete={toggleComplete} />
            </Grid>
            {/* <Grid item>
              <hr />
            </Grid> */}
          </div>
        )
      })}
    </Grid>
  )
}

export default TodoList
