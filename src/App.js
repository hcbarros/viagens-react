import React, { Component } from 'react';
import Hero from './components/Hero';
import Form from './components/Form';


class App extends Component {
  
  
  render() {             

    return (
           
      <div>
          <Hero/>
          <Form/>
      </div>
    );
  }
}

export default App;
