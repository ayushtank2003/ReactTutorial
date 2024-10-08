import React from 'react'

const SampleEvent = () => {
    const handleClick=()=>{
        alert("Button clicked")
    }
    return (
        <div>
            <button onClick={handleClick}>Alert</button>
            <button onClick={()=>alert("Triggered Click")}>Click</button>
        </div>
    )
}

export default SampleEvent;
