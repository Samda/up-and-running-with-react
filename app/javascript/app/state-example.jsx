import React from 'react'

class StateExample extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state text',
      cat: 2
    }
  }

  update( e ){
    this.setState({txt: e.target.value})
  }

  render(){
    return (
      <div>
        <h1> State example </h1>
        <p>
          text state change
          <i> {this.state.txt} </i>
          - { this.state.cat }
        </p>
        <Widget update={this.update.bind(this)}/>
        <hr />
      </div>
    )
  }
}

const Widget = (props) =>
  <input type='text' onChange={props.update} />

export default StateExample
