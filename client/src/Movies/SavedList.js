import React from 'react';
import { Link, Route } from 'react-router-dom'

const SavedList = props =>{
  console.log('from saved', props)
  return (
    <div className="saved-list">
      <div className="save-list-wrapper">
        <div onClick={() => props.setSavedList([])}className="reset-button">Reset</div>
        <h3>Saved Movies:</h3>
      </div>
      {props.list.map(movie => {
        return(
          <span className="saved-movie">
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </span>
      )})}
      <Link to="/" ><div className="home-button">Home</div></Link>
    </div>
  );


}



export default SavedList;
