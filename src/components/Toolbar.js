import React from 'react';
import ReactDOM from 'react-dom'
import vector1 from '../imagens/vector1.svg';
import vector2 from '../imagens/vector2.svg';
import vector3 from '../imagens/vector3.svg';
import Menu from '../imagens/Menu.svg';
  

const Toolbar = () => {

    return (
        <div id="toolbar" >              
            
           <div id="bloc1" > 
              <div id="icon" >
                  <img id="vector2" src={vector2} />
                  <img id="vector1" src={vector1} />               
                  <img id="vector3" src={vector3} />               
              </div>   
              <div id="nav">
                  <a id="explore" href="#" >Explore</a>
                  <a id="sobre" href="#" >Sobre nós</a>
                  <a id="seguros" href="#" >Seguros</a>
                  <a id="hoteis" href="#" >Hotéis</a>
              </div>
           </div>                            
           <div id="signin" >
              <div id="nav2" >
                  <a id="viagens" href="#" >Viagens</a>
              </div>
            
              <button id="loginButton" >Login</button>
           </div>      
          
           <img id="menu" src={Menu} />
                                

        </div>
    );
}

export default Toolbar;