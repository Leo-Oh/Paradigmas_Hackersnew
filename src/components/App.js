import React from 'react';
import { Redirect } from 'react-router-dom';
import CreateLink from './CreateLink';
import Header from './Header';
import LinkList from './LinkList';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import Curriculum from './Curriculum';



const App = () => (
  <div className="center w85">
    <Header />
    <div className="ph3 pv1 background-gray">
      <Switch>
       
        <Route exact path="/" render={() => <Redirect to="/resume"/>} />
        <Route exact path="/resume" component={Curriculum} />

        <Route
          exact
          path="/create"
          component={CreateLink}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </div>
  </div>
);

export default App;
