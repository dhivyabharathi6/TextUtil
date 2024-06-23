import React, { useState } from 'react'

export default function TextTransform() {
  const [text, setText] = useState("Hello")
  const HandleChange =(event)=>{
    setText(event.target.value)
  }

  const HandleUpper= ()=>{
    setText(text.toUpperCase())
  }

  const HandleLower= ()=>{
    setText(text.toLowerCase())
  }
  return (
    <div>
        <div className=" container  m-5 ">
    <label for="exampleFormControlTextarea1" className="form-label">Enter your text</label>
    <textarea className="form-control" onChange={HandleChange} value={text} id="exampleFormControlTextarea1"  rows="3" placeholder='Enter your text here'></textarea>
  </div>
  <div className='text-center'>
  <button type="button" onClick={HandleUpper} class="btn btn-success m-2">toUpperCase</button>
  <button type="button" onClick={HandleLower} class="btn btn-danger m-2">toLowerCase</button>
  </div>
 
  </div>
  )
}
