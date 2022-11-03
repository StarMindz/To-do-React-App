import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList';
import InputBox from './Input';
import Header from './Header';
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [
        {
          id: 1,
          title: 'Hello',
          check: false,
        },
        {
          id: 2,
          title: 'Hi',
          check: false,
        },
        {
          id: 3,
          title: 'Let fucking Go',
          check: false,
        },
      ]
    };  
  }

  addTodo(text) {
    const task = {
      id: uuidv4(),
      title: text,
      check: false
    }
    this.setState((state) => ({ todo: [...state.todo, task] }));
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
    }));
  }

  deleteTodo(id) {
    this.setState(state => ({
      todo: [...state.todo.filter(todo => {
          return todo.id !== id;
      })]
    })
    );
  }

  render() {
    const { todo } = this.state;

    return (
      <div className = 'Todo' >
        <div className="inner">
          <Header />
          <InputBox add = {this.addTodo.bind(this)} />
          <TodoList click={this.changeState.bind(this)} todos={todo} deleteTodo={this.deleteTodo.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Todo;
