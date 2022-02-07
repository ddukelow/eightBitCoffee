import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
import { MENU } from './shared/menu';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainComponent />
          {/* <MenuItem menu={this.state.menu} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
