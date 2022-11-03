import { Component } from "react"

class InputBox extends Component {
  constructor(props) {
    super(props)
    this.state ={
      task: ''
    };
  
  }
  
  noRefresh(e) {
    e.preventDefault();
    this.setState({task: ''})
  }

  inputText(element) {
    this.setState({task: element.target.value});
  }

  render() {
    return (
      <form onSubmit = {this.noRefresh.bind(this)}>
        <input type='text' onChange = {this.inputText.bind(this)} value = {this.state.task} placeholder = 'Add todo ...' />
        <button onClick = {() => {this.props.add(this.state.task)}} >Submit</button>
      </form>
    )
  }
}

export default InputBox