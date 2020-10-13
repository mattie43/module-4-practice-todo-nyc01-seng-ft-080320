import React from 'react'

export default class Tasks extends React.Component {

  renderTasks = () => {
    return this.props.tasks.map(task => <div className="task"><div className="label">{task.category}</div><div className="text">{task.text}</div></div>)
  }

  render() {
    return(
      this.renderTasks()
    )
  }
}