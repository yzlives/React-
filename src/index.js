import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/base.css'
import './styles/index.css'
import TodoHeader from './components/TodoHeader.js'
import TodoMain from './components/TodoMain.js'
import TodoFooter from './components/TodoFooter.js'
class App extends Component {
  state = {
    list: [
      {id: 1, name: "吃饭", done: false},
      {id: 2, name: "睡觉", done: true},
      {id: 3, name: "打豆豆", done: false}
    ],
    type: "all"
  }
  render() {
    const {list, type} = this.state
return (
  <section className="todoapp">
  <TodoHeader addTodo={this.addTodo} ></TodoHeader>
  <TodoMain list={list}  delTodoById={this.delTodoById}  updateDone={this.updateDoneById} editTodo={this.editTodo} type={type} checkAll={this.checkAll}></TodoMain>
  <TodoFooter list={list} type={this.state.type} clearTodo={this.clearTodo} changeType={this.changeType}></TodoFooter>
</section>
)

}
delTodoById = (id) =>{
  this.setState({
    list: this.state.list.filter((item) => item.id !==id)
  })
}
updateDoneById=(id)=>{
  this.setState({
    list: this.state.list.map((item)=>{ 
      if(item.id ===id) {
            return{
              ...item,
              done: !item.done
            }
      }else {
        return item
      }
  })
  })
}
addTodo =(name) => {
 this.setState({
  list: [
    {
      id: Date.now(),
      name,
      done:false
    },
    ...this.state.list,
  ]
 })
}
editTodo = (id,name) => {
  this.setState({
    list: this.state.list.map (item=> {
      if(item.id ===id ) {
        return {
          ...item,
        name
        }
      } else {
        return item
      }
    })
  })
}

clearTodo=() =>{
  this.setState({
    list:this.state.list.filter((item) =>!item.done)
  })
}
changeType = (type) => {
this.setState({
  type:type
})
}
checkAll=(check)=>{
 this.setState({
  list: this.state.list.map((item)=>{
    return {
      ...item,
      done:check
    }
  })
 })
}
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
