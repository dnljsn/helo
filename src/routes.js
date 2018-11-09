import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './components/Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
// import Post from './components/post/Post';
import Form from './components/Form/Form';

export default (
  <Switch>
    <Route path='/' exact component={Auth} />
    <Route path='/dashboard' component={Dashboard} />
    {/* <Route path='/post/:id' component={Post} /> */}
    <Route path='/new' component={Form} />
  </Switch>
)