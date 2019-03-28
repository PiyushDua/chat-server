import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Buttons } from './components';
import { UserDetails } from '../src/UserDetails';

const App = () => (
  <>
    <Router>
      <Route exact path='/' component={Buttons} />
      <Route path='/UserList/:name' component={UserDetails} />
    </Router>
  </>
);
export default App;
