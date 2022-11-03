import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  const { click, todos, deleteTodo } = props;
  return (
    <ul className='Todo-list'>
      {todos.map((todo) => (
        <TodoItem click={ click } item={ todo } deleteTodo={ deleteTodo } />))}
    </ul>
  );
}

export default TodoList;