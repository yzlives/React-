import React, {Component} from 'react'


export default class TodoFooter extends Component{
render () {
  const {list ,type} = this.props
  if (list.length === 0 ) {
    return null
  }
  const isShow = list.some(item => item.done)
      return (
        <footer className="footer">
    <span className="todo-count"><strong>{list.filter(item => !item.done).length}</strong> item left</span>
    <ul className="filters">
      <li>
        <a className={type === "all" ? "selected":""} href="#/" onClick={()=>this.handleClick("all")}>All</a>
      </li>
      <li>
        <a className={type === "active" ? "selected":""} href="#/active" onClick={()=>this.handleClick("active")}>Active</a>
      </li>
      <li>
        <a className={type === "completed" ? "selected":""} href="#/completed" onClick={()=>this.handleClick("completed")}>Completed</a>
      </li>
    </ul>
    {isShow && <button className="clear-completed" onClick={this.clearTodo}>Clear completed</button>}
  </footer>
    )
}
clearTodo=()=>{
  this.props.clearTodo()
}
handleClick=(type)=>{
  // console.log(type);
  this.props.changeType(type)
}
}