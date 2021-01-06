import React, { Component } from 'react'

export default class Render_Data_Example extends Component {
    state={
        arr:["Kavish","Varshil","Shrey","Meet"]
    }
    render() {
        return (
            <div>
                {this.state.arr.map((username)=>{
                    return <h1>{username}</h1>
                })}
            </div>
        )
    }
}
