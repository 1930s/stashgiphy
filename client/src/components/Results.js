import React, { Component } from 'react';
import '.././styles/Results.css';

import Result from './Result.js';


const Results = (props) => (
  <div className="results-container">
    {props.results.map(gif => <Result gif={gif}/>)}
  </div>
)

export default Results;