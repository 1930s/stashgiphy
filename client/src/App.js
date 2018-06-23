import React, { Component } from 'react';
import axios from 'axios';
import './styles/App.css';

import Search from './components/Search';
import Results from './components/Results';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      results: []
    }
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get('/api/trending')
    .then(response => {
      let results = response.data;
      this.setState({ results });
    });
  }

  handleChange(e) {
    let searchQuery = e.target.value;
    this.setState({ searchQuery });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.searchQuery === '') return;
    
    let searchQuery = this.state.searchQuery.split(' ').join('+');
    axios.get(`/api/gifs?search=${searchQuery}`)
      .then(response => {
        let results = response.data;
        this.setState({ results });
      });
  }

  render() {
    return (
      <div className="App">
        <Search
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          search={this.state.searchQuery}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default App;