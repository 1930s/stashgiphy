import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Favorites from './components/Favorites';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/favorites' component={Favorites} />
    </div>
  </Router>,
  document.getElementById('root'));
registerServiceWorker();
