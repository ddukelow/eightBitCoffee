import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <Navbar dark color="success">
          <div className="container">
              <NavbarBrand href="/">8-Bit Coffee</NavbarBrand>
          </div>
          </Navbar>
    );
  }
}

export default Header;
