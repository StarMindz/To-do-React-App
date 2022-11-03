import { Component } from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  noRefresh(e) {
    e.preventDefault();
    this.setState({ task: '' })
  }

  inputText(element) {
    this.setState({ task: element.target.value });
  }

  render() {
    const { add } = this.props;
    const { task } = this.state;
    return (
      <form className="form-container" onSubmit={ this.noRefresh.bind(this) }>
        <input className="input-text" type='text' onChange={ this.inputText.bind(this) } value={ task } placeholder="Add todo ..." />
        <button className="input-submit" onClick={ () => { add(task) }} >Submit</button>
      </form>
    )
  }
}

export default InputBox;
