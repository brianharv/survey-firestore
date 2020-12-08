import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <React.Fragment>
      <Navbar>
        <Navbar.Brand href="#home">Navbar navbar navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">username</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default Header;