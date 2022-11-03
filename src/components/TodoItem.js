import React from 'react';

const TodoItem = (props) => {
  return (
    <li id = {props.item.id} >
      <input type = 'checkbox' checked = {props.item.check} onChange = {() => props.click(props.item.id)} />
      {props.item.title}
      <button onClick = {() => {props.deleteTodo(props.item.id)}}>Delete</button>
    </li>
  )
}

export default TodoItem;