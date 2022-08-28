import React from 'react';

import {
  Button,
  Container,
  FormControl,
} from 'react-bootstrap';

import Comment from './Comment';

const App = () => {

  const [
    state,
    setState,
  ] = React.useState({
    value: '',
    commentList: [
      'Hi, my name is Thato Sithole and I am a Software Engineer.',
    ],
  });

  /**
   * function for handling the value of the comment as it changes
   * */
  const onChangeComment = value => {

    setState(prevState => ({
      ...prevState,
      value: value,
    }));
  };

  /**
   * Add a new comment
   * */
  const onAddNewComment = () => {

    const newList = [...state.commentList];

    newList.push(state.value);

    setState(prevState => ({
      ...prevState,
      commentList: newList,
    }));
  };

  /**
   * Add a new comment everytime I click 'Submit' and rerender the comment list
   * */
  const renderComments = () => {

    const comments = [];

    for (let index = 0; index < state.commentList.length; index++) {

      comments.push(
        <Comment
          index={index}
          value={state.commentList[index]}/>
      );
    }
    return comments;
  };

  return (

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 'calc(10px + 2vmin)',
        padding: '30px',
        alignItems: 'flex-start',
        margin: '0',
        background: '#282c34',
        minHeight: '100vh',
        color: 'gray',
      }}>

      <h1
        style={{
          color: 'violet'
        }}>

          Your comments
      </h1>

      <Container
        style={{
          padding: '10px',
          height: 'auto',
          maxHeight: '300px',
          maxWidth: '100%',
          overflowY: 'scroll',
          margin: '0 0 30px'
        }}>

        { renderComments() }

      </Container>

      <h1
        style={{
          color: 'violet'
        }}>

          Create a comment
      </h1>

      <FormControl
        as ='textarea'
        onChange={event => onChangeComment(event.target.value)}
        value={state.value}/>

      <Button
        style={{
          margin: '20px 0 0'
        }}
        onClick={onAddNewComment}>

        Submit
      </Button>        
    </div>
  );
}

export default App;