import React, { useState } from 'react'
import TodoList from './TodoList'
import { uuid } from 'uuidv4'

const baseTodos = [
  {
    id: uuid(),
    complete: true,
    name: 'poopie',
  },
  {
    id: uuid(),
    complete: false,
    name: 'peepie',
  },
]

function App() {
  const [todos, setTodos] = useState(baseTodos)
  const [todoText, setTodoText] = useState('')

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

  //components to render
  return (
    <>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <input value={todoText} onChange={(event) => setTodoText(event.target.value)} type="text" />
      <button onClick={runAddTodo}>add</button>
      <button onClick={runClearComplete}>clear complete</button>
    </>
  )
}

export default App
