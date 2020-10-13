import React from "react";

export default class Tasks extends React.Component {

  state = {
    text: '',
    category: 'Code'
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({text: ''})
    this.props.newTask(this.state)
  }

  render() {
    return(
      <form className="new-task-form" onSubmit={this.onSubmit}>
        <input placeholder="New Task" type="text" name="text" value={this.state.text} onChange={this.onChange}/>
        <select onChange={this.onChange} name="category" id="category">
          <option value="Code">Code</option>
          <option value="Food">Food</option>
          <option value="Money">Money</option>
          <option value="Misc">Misc</option>
        </select>
        <input type="submit" value="Add Task"/>
      </form>
    )
  }
}