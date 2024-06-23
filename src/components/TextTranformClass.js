import React, { Component } from 'react'

export default class TextTranformClass extends Component {
  constructor(){
    super()
    this.state={
      text:"Hello"
    }

   this.HandleText=this.HandleText.bind(this)
   this.HandleUpperCase=this.HandleUpperCase.bind(this)
   this.HandleLowerCase=this.HandleLowerCase.bind(this)
  }
  HandleText(abc){
    this.setState({
      text:abc.target.value
    })
  }
  HandleUpperCase(){
  this.setState({
    text:this.state.text.toUpperCase()
  })
  }
  HandleLowerCase(){
    this.setState({
      text:this.state.text.toLowerCase()
    })
    }
  render() {
    
    return (
        <div>
        <div className=" container  m-5 ">
    <label for="exampleFormControlTextarea1" className="form-label">{this.props.title}</label>
    <textarea className="form-control" onChange={this.HandleText} id="exampleFormControlTextarea1" value={this.state.text} rows="3" placeholder='Enter your text here'></textarea>
  </div>
  <div className='text-center'>
  <button type="button"  onClick={this.HandleUpperCase}class="btn btn-success m-2">toUpperCase</button>
  <button type="button" onClick={this.HandleLowerCase}class="btn btn-danger m-2">toLowerCase</button>
  </div>
 
  </div>
    )
  }
}
