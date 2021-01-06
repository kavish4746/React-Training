import React, { Component,useState } from 'react'

export default function Functioncomponent(props){
    const[cnt,setCount]=useState(0);
    
    return(
        <div>
            <h2>Hello from Function component</h2>
            <h3>Name : {props.name}</h3>
            <h4>Total vote : {cnt}</h4>
            <button onClick={()=>setCount(cnt+1)}>Vote here</button>
        </div>
    )
}
