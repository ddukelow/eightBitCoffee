import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './FoodComponent';
import Home from './HomeComponent';
import Shop from './ShopComponent';
import { MENU } from '../shared/menu';
import { SHOP } from '../shared/shop';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          menu: MENU,
          shop: SHOP
        };
      }    

    render() {
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/shop' render={() => <Shop shop={this.state.shop} />} />
                    <Route path='/home' component={Home} />
                    <Route exact path='/food' render={() => <Menu menu={this.state.menu} />} />
                    <Redirect to='/home' />
                </Switch>        
            </div>
        );
    }
}

export default withRouter(Main);
