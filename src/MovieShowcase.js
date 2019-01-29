import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  // generateMovieCards = () => {
  //   // map over your movieData array and return the correct
  //   return movieData.map(data => {
  //     console.log(data)
  //     debugger
  //     return(
  //       <MovieCard title={data.title} IMDBRating={data.IMDBRating}
  //       genres={data.genres} poster={data.poster}/>
  //     )
  //   })
  // }

  generateMovieCards = () => {
    return movieData.map((data, idx) => {
      return <MovieCard key={idx} {...data} />
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  } // End of Render()
} // End of MovieShowcase component
