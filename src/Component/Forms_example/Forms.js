import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            name:'',
            address:'',
            phone:0,
            flag:false,
        }
    }

    submitfunc=(e)=>{
        this.setState({
            flag:true
        })
        e.preventDefault();
        
    }
    onChangeHandler=(e)=>{
        let key=e.target.name;
        this.setState({
            [key]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitfunc}>
                    <label>Name </label>
                    <input type="text" name="name" value={this.state.name} onChange={this.onChangeHandler} />
                    <label>Address </label>
                    <input type="text" name="address" value={this.state.address} onChange={this.onChangeHandler} />
                    <label>Phone </label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.onChangeHandler} />
                    <button type="submit">Submit</button>
                </form>
                {this.state.flag
                    ?<div>
                            <h3>{this.state.name}</h3>
                            <h3>{this.state.address}</h3>
                        </div>
                    :<div><h6>Please Fill the form</h6></div>
                }
            </div>
        )
    }
}
