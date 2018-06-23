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
  
  handleFavorite(gif) {
    if (localStorage.getItem(gif.id)) {
      localStorage.removeItem(gif.id);
      this.setState({ isFavorite: false});
    } else {
      localStorage.setItem(gif.id, gif);
      this.setState({ isFavorite: true});
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