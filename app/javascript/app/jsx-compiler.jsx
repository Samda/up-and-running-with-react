import React from 'react'

class JsxCompiler extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '/* Add your JSX */',
      output: '',
      err: ''
    }
  }

  update(e){
    let code = e.target.value;
    try{
      this.setState({
        output: window.Babel
        .transform(code, {presets: ['es2015', 'react']})
        .code,
        err: ''
      })
    }catch(err){
      this.setState({ err: err.message })
    }
  }

  render(){
    return(
      <div>
        <h3>JSX compiler</h3>
        <div>
          <header>{this.state.err}</header>
          <div className='container'>
            <textarea
            style={{height: '135px', width: '400px', background: '#ccc'}}
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}
            />
            <p>Output:</p>
            <pre style={{background: '#eee', padding: '10px'}}>
              {this.state.output}
            </pre>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default JsxCompiler
