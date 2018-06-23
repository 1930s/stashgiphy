import React, { Component } from 'react';
import '.././styles/Results.css';

import Result from './Result.js';


const Results = (props) => (
  <div className="results-container">
    {props.results.map(gif => {
      if (typeof gif === 'string') {
        return <Result gif={JSON.parse(gif)}/>
      }
      return <Result gif={gif}/>
    })}
  </div>
)

export default Results;