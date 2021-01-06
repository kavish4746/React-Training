import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'; 

export default class Class_component extends Component {
    constructor(props)
    {
        super(props);

        this.state={
            cnt:0
        }

        //this.counterfun=this.counterfun.bind(this);
    }

    //Its normal function , so we have to bind it 
            // counterfun(){
            //     let count=this.state.cnt;
            //     this.setState({
            //         cnt:++count
            //     })
            // }

    //if we use here Arrow function->no need to bind it
    counterfun=()=>{
        let count=this.state.cnt;
        this.setState({
            cnt:++count
        })
    }    
    render() {
        return (
            <Fragment>
                <h2>Hello from Class component</h2>
                <h3>Name : {this.props.name}</h3>
                <h4>Total vote : {this.state.cnt}</h4>
                <button onClick={this.counterfun}>Vote</button>
            </Fragment>
        )
    }
}
  
