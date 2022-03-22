import React, { Component } from "react";
import Header from "./HeaderComponent";
import Menu from "./FoodComponent";
import Home from "./HomeComponent";
import Shop from "./ShopComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    menu: state.menu,
    shop: state.shop,
  };
};

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/shop" render={() => <Shop shop={this.props.shop} />} />
          <Route path="/home" component={Home} />
          <Route
            exact
            path="/food"
            render={() => <Menu menu={this.props.menu} />}
          />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
