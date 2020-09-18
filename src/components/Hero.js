import React from 'react';
import ReactDOM from 'react-dom'
import Toolbar from './Toolbar';
import Form from './Form';
 

const Hero = () => {

    return (
        <div id="hero" >           
               
               <Toolbar/>   
               <div id="line" ></div>

               <div id="texts" >
                  <a id="viaje" >Viaje pelo mundo inteiro</a>
                  <a id="aqui" >Aqui você encontra os melhores voos do mundo</a>     
               </div>

                
        </div>
    );
}

export default Hero;