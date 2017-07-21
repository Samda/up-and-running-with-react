import React from 'react'

class EventsExample extends React.Component {
  constructor() {
    super();
    this.state = { currentEvent: '---' },
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({ currentEvent: e.type })
  }

  render(){
    return(
      <div>
        <h3> Events analysis example </h3>
        <textarea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          onFocus={this.update}
          onBlur={this.update}
          onDoubleClick={this.update}
          onTouchStart={this.update}
          onTouchMove={this.update}
          onTouchEnd={this.update}
        >
        </textarea>
        <p>current-events : {this.state.currentEvent}</p>
        <hr />
      </div>
    )
  }
}

export default EventsExample
