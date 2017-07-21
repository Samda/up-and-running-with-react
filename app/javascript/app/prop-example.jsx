import React from 'react'
import PropTypes from 'prop-types'

class PropExample extends React.Component {
  render(){
    return (
      <div>
        <h3> Props example </h3>
        <b>{ this.props.name } </b>
        <p> Has {this.props.cat} cats </p>
        <hr />
      </div>
    )
  }
}

PropExample.propTypes = {
  name: PropTypes.string,
  cat: PropTypes.number.isRequired
}

PropExample.defaultProps = {
  name: 'Default name'
}

export default PropExample
