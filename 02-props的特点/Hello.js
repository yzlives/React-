import { Component } from 'react'

export default class Hello extends Component {
  constructor(props) {
    super(props)
    console.log(this.props)
    this.state = {
      money: this.props.money + 100,
    }
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>类组件</h3>
        <div>{this.state.money}</div>
      </div>
    )
  }
}
