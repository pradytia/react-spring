import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import NavbarPage from './2.component/Navbar/NavbarHeader';
import Home from './1.pages/Home/Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage/>
          <Switch>
            <Route path='/home' component={Home} exact/>

          </Switch>
      </div>
    )
  }
}
