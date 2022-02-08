import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
        <React.Fragment>
          <Navbar sticky="top" expand="md">
            <div className="container">
              <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className="justify-content-center" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/shop">
                                <i className="fa fa-shopping-bag fa-lg" /> Shop
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <i className="fa fa-home fa-lg" /> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/food">
                                <i className="fa fa-coffee fa-lg" /> Food
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
          </Navbar>
          <Jumbotron fluid>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>8-bit coffee</h1>
                    </div>
                </div>
            </div>
          </Jumbotron>
        </React.Fragment>
    );
  }
}

export default Header;
