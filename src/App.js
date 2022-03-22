import React, { Component } from "react";
import MainComponent from "./components/MainComponent";
import { MENU } from "./shared/menu";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import "./App.css";

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <MainComponent />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
