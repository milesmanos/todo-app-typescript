import React from 'react'

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
    <>
      <div>
        <input type="checkbox" checked={todo.complete} onChange={runTodoClick} />
        <span>{todo.name}</span>
      </div>
    </>
  )
}

export default Todo
