import React from 'react'

class ChildrenUtilities extends React.Component {
  render(){
    return(
      <Parent>
        <b className="childA">1</b>
        <b className="childB">2</b>
      </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    let items = React.Children.map(this.props.children, child => child)
    // let items = React.Children.forEach(this.props.children, child => console.log(child.props.className))
    // let items = React.Children.toArray(this.props.children)
    // React.Children.only(this.props.children)
    console.log(items)

    return(
      <div>
        <h3>Children utilities example</h3>
        <b>{items.length}</b>
        <p>
          <b> childrens: </b>
          {this.props.children}
        </p>
        <hr />
      </div>
    )
  }
}

export default ChildrenUtilities
