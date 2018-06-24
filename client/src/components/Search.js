import React from 'react';
import { Link } from 'react-router-dom';
import '.././styles/Search.css';

const Search = (props) => (
  <div className="search-container">
  <Link to='/favorites'><button className="favorites-btn btn">FAVORITES</button></Link>
    <form className="search-form" onSubmit={props.handleSubmit}>
      <input
        type="text" className="search input"
        placeholder="Search all the GIFs"
        value={props.searchQuery}
        onChange={props.handleChange}
      />
    <button className="submit-btn" type="submit">SUBMIT</button>
  </form>
</div>
);

export default Search;