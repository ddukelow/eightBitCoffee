import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navbar dark color="success">
          <div className="container">
              <NavbarBrand href="/">8-Bit Coffee</NavbarBrand>
          </div>
          </Navbar>
        </div>
    );
  }
}

export default App;
