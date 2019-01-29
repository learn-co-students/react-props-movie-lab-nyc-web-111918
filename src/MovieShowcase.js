import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array
   return movieData.map(movie => {
        return <MovieCard key={movie.title} title={movie.title} IMDBRating={movie.IMDBRating}
        genres={movie.genres} poster={movie.poster} />
        // console.log(movie);
      })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
