import React, { Component } from 'react'
import './jsx.css'


//vaaribale
let name="kavish";

//Function
function show(){
    return name;
}

//we can use object also
let kavishdetails={
    firstname:"kavish",
    id:201912043
}



const el=<div>
            <h1>hello {show()}</h1>
            <h2>{kavishdetails.firstname}</h2>
            <h3>{kavishdetails.id}</h3>
        {/* Specifying attribute in JSX */}
            <h4 className="bg">{name}</h4>
        </div>;
export default el;
