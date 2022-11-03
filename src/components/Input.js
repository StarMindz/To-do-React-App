import { Component } from 'react';
import PropTypes from 'prop-types';

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  noRefresh(e) {
    e.preventDefault();
    this.setState({ task: '' });
  }

  inputText(element) {
    this.setState({ task: element.target.value });
  }

  render() {
    const { add } = this.props;
    const { task } = this.state;
    return (
      <form className="form-container" onSubmit={this.noRefresh.bind(this)}>
        <input className="input-text" type="text" onChange={this.inputText.bind(this)} value={task} placeholder="Add todo ..." />
        <button type="submit" className="input-submit" onClick={() => {add(task);}} >Submit</button>
      </form>
    );
  }
}

InputBox.propTypes = {
  add: PropTypes.func.isRequired,
}

export default InputBox;
