import React from 'react';
import styles from './stylings/TodoItem.module.css';

const TodoItem = (props) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const { click, item, deleteTodo } = props;

  return (
    <li className={styles.item} id={item.id} >
      <input type = "checkbox" className={styles.checkbox} checked={item.check} onChange={() => click(item.id)} />
      <span style={item.check ? completedStyle : null}>
        {item.title}
      </span>
      <button onClick={() => {deleteTodo(item.id);}}>Delete</button>
    </li>
  );
}

export default TodoItem;