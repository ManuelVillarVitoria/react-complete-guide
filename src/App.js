//import React from 'react';
import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';

//function App() {

  //return (
   // <div className="App">
      
     // <h1> Hi, I'm React App </h1>
    //</div>
  //);

  class App extends Component{
    render(){

      //return React.createElement('div', null, 'h1','Hi, I\'m React App');

      /**** El h1 lo interpreta como un texto, por eso hay 
            que crear el método React.createElement como vemos abajo para que 
            el texto se vea en h1****/

      //return React.createElement('div', null, React.createElement ('h1',null, 'Does this work now?'));

      /**** Aquí al poner el null en vez del {className:'App'} como vemos abajo
            el texto no queda centrado****/

      //return React.createElement('div', {className:'App'}, React.createElement ('h1',null, 'Does this work now?'));


      /**** Con el código de arriba obtenemos el mismo resultado que usando HTML dentro del javacript (jsx)
             de forma más sencilla, sin tener que estar creando elementos, como podemos observar
             en el código de abajo****/

      return (
        <div className="App">
          <h1> Hi, I'm React App </h1>
          <p>This is really working</p>

          <Person/> 
          <Person/> 
          <Person/> 
          
        </div> 
        
        /*** colocando el componente <Person/> que hemos importado, 
        mostramos el texto que figura en el archivo Person.js ***/  
      );


    } 
}

export default App;
