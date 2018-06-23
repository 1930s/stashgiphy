import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/index.css';
import Home from './containers/Home';
import Favorites from './containers/Favorites';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/favorites' component={Favorites} />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
