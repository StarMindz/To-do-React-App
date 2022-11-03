import React from 'react';
import TodoList from './TodoList'
import InputBox from './Input';
import { v4 as uuidv4 } from "uuid";

class Todo extends React.Component {
  state = {
    todo: [
      {
        id: 1,
        title: 'Hello',
        check: false
      },
      {
        id: 2,
        title: 'Hi',
        check: false
      },
      {
        id: 3,
        title: "Let's fucking Go",
        check: false
      }
    ]
  };

  addTodo(text) {
    const task = {
      id: uuidv4(),
      title: text,
      check: false
    }
    this.setState((state) => ({ todo: [...state.todo, task] }))
  }

  changeState(id) {
    this.setState(state => ({
      todo: state.todo.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            check: !todo.check,
          }
        }
        return todo
      }),
    }))
  }

  deleteTodo(id) {
    this.setState(state => ({
      todo: [...state.todo.filter(todo => {
          return todo.id !== id;
      })]
    })
    )
  }

  render() {
    return (
      <div className = 'Todo' >
      <InputBox add = {this.addTodo.bind(this)} />
      <TodoList click = {this.changeState.bind(this)} todos={this.state.todo} deleteTodo = {this.deleteTodo.bind(this)} />
      </div>
    )
  }
}

export default Todo;