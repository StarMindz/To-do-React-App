import React from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Todo />
      </>
    );
  }
}

export default App;
