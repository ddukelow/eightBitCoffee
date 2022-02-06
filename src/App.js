import React, { Component } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
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
          <Header />
          <MenuItem menu={this.state.menu} />
        </div>
    );
  }
}

export default App;
