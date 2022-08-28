import logo from './logo.svg';
import './App.css';
import React from 'react'

import {
  Button,
  FormControl,
} from 'react-bootstrap';

const App = () => {

  return (
    <div className="App">
      <header className="App-header" 
        style={{
          padding: '30px',
          alignItems: 'flex-start'
        }}>

        <section
          id='comments-list'
          style={{
            height: 'auto',
          }}>

        </section>

        <h1
          style={{
            color: 'violet'
          }}>

            Create a comment
        </h1>
        <FormControl
          as ='textarea'/>

        <Button
          style={{
            margin: '20px 0 0'
          }}>

          Submit
        </Button>
      </header>
    </div>
  );
}

export default App;
