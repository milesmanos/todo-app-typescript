import React, { useState } from 'react'
import TodoList from './TodoList'
import { v4 as uuid } from 'uuid'
import { Grid, Button, makeStyles, Typography, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles({
  masterWhiteSpace: {
    padding: 48,
    maxWidth: 850,
    //.toPoliticallyCorrect()
  },
  breathingRoom: {
    marginTop: 22,
    marginBottom: 6,
  },
  itemRowWidth: {
    width: 512,
  },
  inputRowSpacing: {
    height: 54,
    padding: 0,
    marginTop: 34,
  },
  marginRight: {
    margin: 4,
  },
})

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(baseTodos)
  const [todoText, setTodoText] = useState('')
  const classes = useStyles()

  function toggleComplete(id: string) {
    const newTodos = [...todos]
    const theChosenTodo = newTodos.find((t) => t.id === id)
    if (theChosenTodo != null) {
      theChosenTodo.complete = !theChosenTodo.complete
    }
    setTodos(newTodos)
  }
  function runAddTodo() {
    if (todoText === '') {
      return
    }
    const newTodo = {
      id: uuid(),
      complete: false,
      name: todoText,
    }
    setTodos([...todos, newTodo])
    setTodoText('')
  }
  function runClearComplete() {
    setTodos(todos.filter((t) => !t.complete))
  }

  return (
    //App grid
    <Grid container direction="column" justify="flex-start" alignItems="center">
      {/* Centered grid */}
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        className={classes.masterWhiteSpace}
      >
        <Grid item container direction="column" align-items="center" spacing={1}>
          <Grid item>
            <Typography variant="h1" color="textPrimary" align="center">
              Hi Hugh Janus,
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" color="textSecondary" align="center">
              Let's get started with your day.
            </Typography>
          </Grid>
        </Grid>

        {/* Add Item Row grid */}
        <Grid
          item
          container
          className={classes.inputRowSpacing}
          direction="row"
          justify="space-between"
          alignItems="flex-end"
          spacing={1}
        >
          <Grid item xs={8} sm={9}>
            <TextField
              id="standard-search"
              variant="standard"
              label="What's new?"
              fullWidth={true}
              value={todoText}
              onChange={(event) => setTodoText(event.target.value)}
              type="text"
            />
          </Grid>
          <Grid item xs={4} sm={3}>
            <Button variant="contained" color="primary" startIcon={<AddIcon />} fullWidth={true} onClick={runAddTodo}>
              Add To List
            </Button>
          </Grid>
        </Grid>

        {/* List grid */}
        <Grid item container direction="column" alignItems="flex-start">
          <Grid item className={classes.breathingRoom}>
            <TodoList todos={todos} toggleComplete={toggleComplete} />
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item xs={12}>
            <Button color="secondary" fullWidth={true} onClick={runClearComplete}>
              Clean Up List
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

const baseTodos = [
  {
    id: uuid(),
    complete: false,
    name: 'Toodaloo',
  },
  {
    id: uuid(),
    complete: false,
    name: 'Doodle too',
  },
]

export default App
