import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'
import UUID from 'uuid';

export default class MovieShowcase extends Component {


  generateMovieCards = () => {
    // map over your movieData array and return the correct
    return movieData.map(movie => <MovieCard key={UUID()} {...movie}/>)
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
