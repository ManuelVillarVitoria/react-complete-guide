import React from 'react'

const person = () =>{

    return <p> I'm a person and I am {Math.floor(Math.random() * 30)} years old! </p>
    
    /***Ponemos las llaves delante del método Math, para que 
    el jsx no lo interprete como TextDecoder, sino como un javascript***/


}; 

export default person;