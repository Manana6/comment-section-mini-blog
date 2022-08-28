import './App.css';

import React from 'react';

import {
  Container,
  FormText,
} from 'react-bootstrap';

const Comment = props => {

  return (

    <Container
      style={{
        borderBottom: '0.5px solid gray', 
        margin: '10px',
        padding: '10px',
        flexDirection: 'column',
        textAlign: 'left',
      }}>

      <Container>
        
        {props.index}
      </Container>
      <FormText
        style={{
          height: 'auto',
        }}>

        {props.value}
      </FormText>
    </Container>
  );
};

export default Comment;
