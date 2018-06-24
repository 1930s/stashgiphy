import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Results from '../components/Results';


class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favorites: []
    }
    
    this.hydrateFavoritesState = this.hydrateFavoritesState.bind(this);
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
    this.hydrateFavoritesState();
  }
  
  hydrateFavoritesState() {
    this.setState({favorites: Object.values(localStorage)});
  }
  
  render() {
    return (
      <div className='App'>
        <Results  results={this.state.favorites} hydrateFavoritesState={this.hydrateFavoritesState}/>
        <Link to='/'><button className="favorites-btn">BACK TO HOME</button></Link>
      </div>
    );
  }
}

export default Favorites;