import React from 'react'
import ReactDOM from 'react-dom'

class RefsExample extends React.Component {
  constructor() {
    super();
    this.state  = { a: '' }

    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({
      a: this.refs.a.value,
      b: this.b.value,
      c: ReactDOM.findDOMNode(this.c).value,
      d: this.d.refs.input.value
    })
  }

  render(){
    return(
      <div>
        <h3> Refs examples </h3>

        {/* by refs */}
        <input
          ref='a'
          type="text"
          onChange={this.update.bind(this)}
        /> - { this.state.a }
        <hr />

        {/* by ref node */}
        <input
          ref={ node => this.b = node }
          type="text"
          onChange={this.update.bind(this)}
        /> - { this.state.b }
        <hr />
        {/* by ref component */}
        <Input
          ref={ component => this.c = component }
          update={ this.update.bind(this) }
        /> - { this.state.c }
        <hr />
        {/* by ref nested component */}
        <NestedInput
          ref={ component => this.d = component }
          update={ this.update }
        /> - { this.state.d }
        <hr />
      </div>
    )
  }
}

class Input extends React.Component {
  render(){
    return(
      <input type='text' onChange={this.props.update} />
    )
  }
}

class NestedInput extends React.Component {
  render(){
    return(
      <div>
        <input ref='input' type='text' onChange={this.props.update} />
      </div>
    )
  }
}

export default RefsExample
