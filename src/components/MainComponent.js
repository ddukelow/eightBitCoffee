import React, { Component } from 'react';
import Header from './HeaderComponent';
import Menu from './FoodComponent';
import Home from './HomeComponent';
import Shop from './ShopComponent';
import { MENU } from '../shared/menu';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
          menu: MENU
        };
      }    

    render() {
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/shop' component={Shop} />
                    <Route path='/home' component={Home} />
                    <Route exact path='/food' render={() => <Menu menu={this.state.menu} />} />
                    <Redirect to='/home' />
                </Switch>        
            </div>
        );
    }
}

export default withRouter(Main);
