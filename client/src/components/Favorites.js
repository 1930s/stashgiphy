import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '.././styles/Favorites.css';

import Results from './Results';

const Favorites = () => (
  <div className='favorites-container'>
    <Results  results={Object.values(localStorage)}/>
    <Link to='/'><button className="favorites-btn btn">BACK TO HOME</button></Link>
  </div>
)

export default Favorites;