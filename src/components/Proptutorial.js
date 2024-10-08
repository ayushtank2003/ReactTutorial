import React from 'react'

const Proptutorial = (props) => {
    const user=props.user;
  return (
    <>
        <h1>This is Prop tutorial</h1>
        <h4>{props.welcomemessage}</h4>
        <h5>{props.name}</h5>
        <h5>{props.age}</h5>
        <h2>the id is{user.id}</h2>
    </>
    
  )
}

//default props doesnt discepency with original value but id value is not provided the this is used as default value
Proptutorial.defaultProps = {
    age:33
}
export default Proptutorial