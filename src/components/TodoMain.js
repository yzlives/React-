import React, {Component} from "react";
import classNames from "classnames";
export default class TodoMain extends Component  {
    state = {
        // 当前状态
        currentId: "",
        currentName: ""
    }
    render() {
        const {list, type} = this.props
        let showList = []
        if (type === "active") {
          showList = list.filter((item) => !item.done)
        } else if(type === "completed") {
            showList = list.filter((item) => item.done)
        } else {
            showList = list
        }
        return(
            <section className="main">
    <input id="toggle-all" className="toggle-all" type="checkbox" checked={list.every((item)=>item.done)} onChange={this.handleCange} />
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
         {showList.map((item)=>{
            return (
        <li className={classNames({
            completed: item.done,
            editing: item.id === this.state.currentId
        })} key={item.id}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={item.done}  onChange={()=> this.updateDone(item.id)} />
          <label onDoubleClick={() =>this.showEdit(item)}>{item.name}</label>
          <button className="destroy" onClick={()=>this.delTodo(item.id)}></button>
        </div>
        <input className="edit" value={this.state.currentName} onChange={(e)=>this.setState({currentName: e.target.value}) }
         onKeyUp={this.handlekeyup}
        />
      </li>
            )
         })}
    </ul>
  </section>
        )
    }
    delTodo= (id) =>{
        console.log(id);
        this.props.delTodoById(id)
    }
    updateDone=(id)=>{
        this.props.updateDone(id)
    }
    showEdit=({id,name}) => {
        this.setState({
            currentId: id,
            currentName: name
        })
    }
    handlekeyup=e => {
        // 判断
        if(e.keyCode === 27) {
            // 按了esc，取消修改
            this.setState({
                currentId: '' ,
                currentName: ""
            })
        }
        if(e.keyCode === 13) {
            // 添加
            this.props.editTodo(this.state.currentId,this.state.currentName)
        //  关闭
        this.setState({
            currentId: "",
            currentName: ""
        })
        }
    }
    handleCange=(e)=>{
        // console.log(e.target.checked);
        this.props.checkAll(e.target.checked)
    }
 }

