import React from 'react'

class CompoentArrayData extends React.Component {
  constructor() {
    super();
    this.state = { items: [] }
  }

  componentWillMount() {
    fetch('http://swapi.co/api/people/?format=json')
      .then( response => response.json() )
      .then( ({results: items }) => this.setState({items}) )
  }

  filter(e){
    this.setState({filter: e.target.value })
  }

  render(){
    let items = this.state.items
    if(this.state.filter){
      items = items.filter( item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase())
      )
    }

    return(
      <div>
        <h3> Coponent array data example </h3>
        <h5> Star war names list </h5>
        <input type="text" placeholder="search name ..." onChange={this.filter.bind(this)} />
        <ul>
          {items.map(item =>
            <Person key={item.name} person={item} />
          )}
        </ul>
        <hr />
      </div>
    )
  }
}

const Person = (props) =>
  <li>
    <b>{props.person.name}</b>
  </li>

export default CompoentArrayData
