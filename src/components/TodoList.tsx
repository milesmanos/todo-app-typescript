import React from 'react'
import Todo from './Todo'

interface TodoListProps {
  todos: {
    id: string
    complete: boolean
    name: string
  }[]
  toggleComplete: (id: string) => void
}

const TodoList: React.FunctionComponent<TodoListProps> = ({ todos, toggleComplete }) => {
  return (
    <>
      <h1>To do</h1>
      <div>
        {todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} />
        })}
      </div>
    </>
  )
}

export default TodoList
