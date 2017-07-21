import React from 'react'

class NestedComponent extends React.Component {
  render(){
    return (
      <div>
        <h3> Access Nested data example</h3>
        <Button>I <Heart /> React</Button>
        <hr />
      </div>
    )
  }
}

const Button = (props) => <button>{props.children}</button>
const Heart = () => <span> &hearts; </span>

export default NestedComponent
