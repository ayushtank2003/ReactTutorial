import React from 'react'

function MainBar() {
  const style={
    color:"red",
    backgroundColor:"yellow",
  }
  return (
    <div>
      <p style={style}>This is paragraph for Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at corrupti autem delectus libero quaerat veritatis itaque dignissimos. Nemo atque quas aut labore error non corporis quidem ex harum animi?</p>
      <form>
        <h1 style={{backgroundColor:"red",color:"yellowgreen"}}>This is headling tag</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default MainBar