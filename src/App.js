import React from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Todo />
      </React.Fragment>
    )
  }
}

export default App;
