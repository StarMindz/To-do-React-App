import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <ul className='Todo-list'>
      {props.todos.map((todo) => (
        <TodoItem click = {props.click} item = {todo} deleteTodo = {props.deleteTodo} />))}
    </ul>
  )
}

export default TodoList;