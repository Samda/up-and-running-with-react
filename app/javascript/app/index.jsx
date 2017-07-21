import React from 'react'
import PropExample from './prop-example'
import StateExample from './state-example'
import NestedComponent from './nested-component'
import EventsExample from './events-example'
import RefsExample from './refs-example'
import MountComponentExampleWrapper from './mount-component-example'
import CompoentArrayData from './component-array-data'
import HigherOrderComponent from './higher-order-component'
import JsxCompiler from './jsx-compiler'
import ChildrenUtilities from './children-utilities'
// #Seris
// class App extends React.Component {
//   react(){
//     return <h1> Hello Series </h1>
//   }
// }

// #state less
// const App = () => <h1> stateless </h1>

class App extends React.Component {
  render(){
    return (
      <div>
        <h1> App Examples </h1>
        <PropExample name="prop name" cat={ 2 } />
        <StateExample />
        <NestedComponent />
        <EventsExample />
        <RefsExample />
        <MountComponentExampleWrapper />
        <CompoentArrayData />
        <HigherOrderComponent />
        <JsxCompiler />
        <ChildrenUtilities />
      </div>
    )
  }
}

export default App
