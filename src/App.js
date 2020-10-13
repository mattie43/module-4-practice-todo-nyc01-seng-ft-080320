import React from 'react';
import './App.css';
import Categories from './Categories'
import Tasks from './Tasks'
import Form from './Form'

class App extends React.Component {

  state = {
    currentCategory: 'All',
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ]
  }

  changeCategory = (cat) => {
    this.setState({currentCategory: cat})
  }

  filterTasks = () => {
    if(this.state.currentCategory === 'All'){
      return this.state.tasks
    }else{
      return this.state.tasks.filter(task => task.category === this.state.currentCategory)
    }
  }

  removeTask = (obj) => {
    this.setState({tasks: this.state.tasks.filter(task => task.text !== obj.childNodes[1].innerText)})
  }

  newTask = (obj) => {
    this.setState({tasks: [...this.state.tasks, obj]})
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <h5>Category filters</h5>
        <Categories currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}/>
        <div className="tasks">
          <h5>Tasks</h5>
          <Form newTask={this.newTask}/>
          <Tasks removeTask={this.removeTask} tasks={this.filterTasks()}/>
        </div>
      </div>
    );
  }
}


export default App;
