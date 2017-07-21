import React from 'react'
import ReactDOM from 'react-dom'

class MountComponentExample extends React.Component {
  constructor() {
    super();
    this.state = { val: 0 }
    this.update = this.update.bind(this)
  }

  update() {
    this.setState({val: this.state.val + 1 })
  }

  componentWillMount(){
    console.log('componentWillMount')
    this.setState({m: 2})
  }

  componentDidMount() {
    console.log('componentDidMount')
    console.log(ReactDOM.findDOMNode(this))
    this.inc = setInterval(this.update, 500)

  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.inc)
  }

  render(){
    console.log('render')
    return(
      <button onClick={this.update}>{this.state.val * this.state.m}</button>
    )
  }

}

class MountComponentExampleWrapper extends React.Component {
  mount() {
    ReactDOM.render(<MountComponentExample />, document.getElementById('toggle_mount'))
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('toggle_mount'))
  }

  render(){
    return(
      <div>
        <h3> mount and unmount component example </h3>
        <button onClick={this.mount.bind(this)}> Mount </button>
        <button onClick={this.unmount.bind(this)}> Unmount </button>
        <div id="toggle_mount"> </div>
      </div>
    )
  }
}

export default MountComponentExampleWrapper
