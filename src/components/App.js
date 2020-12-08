import React from 'react';
import Header from './Header';
import Body from './Body';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Container>
        <Body/>
      </Container>
    </React.Fragment>
  )
}

export default App;