import React from 'react'

const person = (props) =>{

    return <p> I'm {props.name} and I am {props.age} years old! </p>

    /***Ponemos las llaves delante del método Math, para que 
    el jsx no lo interprete como un texto, sino como un javascript***/


}; 

export default person;