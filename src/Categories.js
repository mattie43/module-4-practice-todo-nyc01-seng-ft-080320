import React from 'react'
import { CATEGORIES } from './data'

export default class Categories extends React.Component {

  onClick = (e) => {
    this.props.changeCategory(e.target.innerText)
  }

  renderCategories = () => {
    return CATEGORIES.map(cat => {
      if(this.props.currentCategory === cat){
       return  <button className="selected" onClick={this.onClick}>{cat}</button>
      }else{
        return <button onClick={this.onClick}>{cat}</button>
      }
    })
      
  }

  render() {
    return(
      <div className="categories">
        {this.renderCategories()}
      </div>
    )
  }
}