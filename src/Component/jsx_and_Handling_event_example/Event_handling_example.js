import React, { Component } from 'react'
import './jsx.css'

export default class Event_handling_example extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:"Kavish",
            id:201912043,
            cnt:0,
            flag:false,
        }
        this.clicked=this.clicked.bind(this);
    }

    clicked()
    {
        console.log(this.state.name);
    }

    onhoverfunction=()=>{
        let count=this.state.cnt;
        this.setState({
            cnt:++count
        })
    }

    btnclicked=()=>{
        this.setState({
            flag:!this.state.flag
        })
    }

    textwrittenfun=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    render() {
        return (
            <div>
                <h5>Press the button to print the details</h5>            
                <button onClick={this.clicked}>Click here</button>
                <h5>{this.state.cnt}</h5>   
                <button onMouseOver={this.onhoverfunction}>Couter</button>
                <br></br>
                {this.state.flag
                    ?<button className="bg" onClick={this.btnclicked}>Click me to change my color</button>
                    :<button className="bg1" onClick={this.btnclicked}> Click me to change my color</button>
                }
                <br></br>
                <input type="text" value={this.state.name} name="name" onChange={(e)=>this.textwrittenfun(e)} />
                <h6>{this.state.name}</h6>
            </div>
        )
    }
}
