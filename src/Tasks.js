import React from "react";

export default class Tasks extends React.Component {

  onClick = (e) => {
    this.props.removeTask(e.target.parentNode)
  }

  renderTasks = () => {
    return this.props.tasks.map((task, ind) => (
      <div key={ind} id={ind} className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button className="delete" onClick={this.onClick}>X</button>
      </div>
    ));
  };

  render() {
    return this.renderTasks();
  }
}
