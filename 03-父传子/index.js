import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'
class App extends Component {
  state = {
    wife: '',
  }
  render() {
    return (
      <div>
        <h1>我是App组件</h1>
        <div>
          配偶：
          <input
            type="text"
            placeholder="请输入配偶的名字"
            value={this.state.wife}
            onChange={this.handleChange}
          />
        </div>
        <hr />
        <Child wife={this.state.wife}></Child>
      </div>
    )
  }
  handleChange = (e) => {
    this.setState({
      wife: e.target.value,
    })
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
