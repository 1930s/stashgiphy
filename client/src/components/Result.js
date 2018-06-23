import React, { Component } from 'react';
import '.././styles/Result.css';
import like from '.././like.svg'

class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: localStorage.getItem(this.props.gif.id)
    }
    this.handleFavorite = this.handleFavorite.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.gif !== this.props.gif) {
      this.setState({ isFavorite: localStorage.getItem(this.props.gif.id) });
    }
  }
  
  handleFavorite(gif) {
    if (localStorage.getItem(gif.id)) {
      localStorage.removeItem(gif.id);
      this.setState({ isFavorite: false});
      if (this.props.hydrateFavoritesState) {
        this.props.hydrateFavoritesState();
      }
    } else {
      localStorage.setItem(gif.id, JSON.stringify(gif));
      this.setState({ isFavorite: true});
      if (this.props.hydrateFavoritesState) {
        this.props.hydrateFavoritesState();
      }
    }
  }
  render() {
    return (
      <div className="result-container" onClick={() => this.handleFavorite(this.props.gif)}>
        {this.state.isFavorite ? <img className='result-like' src={like}/> : null}
        <img className="result-image" src={this.props.gif.url}/>
      </div>
    )
  }
}

export default Result;