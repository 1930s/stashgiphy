
import React from 'react';
import '.././styles/Search.css';

const Search = (props) => (
  <div className="search-container">
  <button className="favorites-btn btn" type="submit">FAVORITES</button>
    <form className="search-form" onSubmit={props.handleSubmit}>
      <input
        type="text" className="search input"
        placeholder="Search all the GIFs"
        value={props.searchQuery}
        onChange={props.handleChange}
      />
    <button className="submit-btn btn" type="submit">SUBMIT</button>
  </form>
</div>
);

export default Search;