import React from 'react'

const HOC = (InnerComponent) => class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 }
  }

  update(){
    this.setState({ count: this.state.count + 1 })
  }

  componentWillMount() {
    console.log('will mount')
  }

  render(){
    return(
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update.bind(this)}
      />
    )
  }
}

class HigherOrderComponent extends React.Component {
  render(){
    return(
      <div>
        <h4>Higher order component </h4>
        <Button>button</Button>
        <br />
        <LabelHOC>label</LabelHOC>
        <hr />
      </div>
    )
  }
}

const Button = HOC((props) =>
  <button onClick={props.update}> {props.children} - {props.count}</button>
)

class Label extends React.Component {

  componentDidMount() {
    console.log('Label will mount')
  }

  render(){
    return(
      <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count} </label>
    )
  }
}

const LabelHOC = HOC(Label)

export default HigherOrderComponent
