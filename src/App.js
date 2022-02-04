import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import MenuItem from './components/MenuItem';
import { MENU } from './shared/menu';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU
    };
  }

  render() {
    return (
        <div className="App">
          <Navbar dark color="success">
          <div className="container">
              <NavbarBrand href="/">8-Bit Coffee</NavbarBrand>
          </div>
          </Navbar>
          <MenuItem menu={this.state.menu} />
        </div>
    );
  }
}

export default App;
