import React, { useEffect }  from 'react';
import classes from './Cockpit.module.css';


const Cockpit= ( props ) => {

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //Http request...
    const timer = setTimeout(() => {
      alert('Saved data to cloud!');
    }, 1000);
    return () => {
      clearTimeout(timer);//Ejemplo de Cleanup con UseEffect(),
      //ya que a diferencia de antes, con este método si le damos al botón 
      //de Remove Cockpit antes que salga la alerta del tiempo, esta será limpiada
      //y no saldrá.
      console.log ('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log ('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log ('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });
  
  //useEffect();

    const assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }
 
    if (props.personsLength <=2){
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <=1){
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (

        <div className={classes.Cockpit}>
            <h1> {props.title} </h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className= {btnClass} onClick={props.clicked}>
            Toggle Persons 
            </button>
        </div>
             
    );
    
};
/*****
El React.memo memoriza lo que has renderizado antes y evita que se repita de nuevo
si la propiedad no cambia. Por tanto el mensaje que vemos abajo que sale
en la consola del navegador ya no se repite cuando modificamos el texto
dentro de cada componente Person:
[Cockpit.js] cleanup work in 2nd useEffect
[Cockpit.js] 2nd useEffect
******/
export default React.memo(Cockpit);