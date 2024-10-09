import React from 'react'

class StateDemo extends React.Component {
    constructor(){
        super();
        this.state = {
            name:"Ayush",
            age:19,
            ShareData:0,
        }
    }
    updataData(){
        // this.setState({
        //     name:"Ayush Tank",
        //     ShareData:this.state.ShareData+1,
        // })
        this.setState((prevState)=>(console.log(prevState),{
            name:"Ayush Tank",
            ShareData:prevState.ShareData+1,
        }))
        this.setState((prevState)=>(console.log(prevState),{
            ShareData:prevState.ShareData+1,
        }))
        this.setState((prevState)=>(console.log(prevState),{
            ShareData:prevState.ShareData+1,
        }))
    }
    render(){
        return(
            <div>
                <h1>we are using class components</h1>
                <h2>Name: {this.state.name}</h2>
                <h2>Age: {this.state.age}</h2>
                <h2>contant Shared:{this.state.ShareData}</h2>
                <button onClick={()=>this.updataData()}>Shared</button>

            </div>
        )
    }
}

export default StateDemo