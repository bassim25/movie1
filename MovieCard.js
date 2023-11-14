import React from 'react'
import './moviecard.css'
const MovieCard = ({movie}) => {
  return (
    <div>
    <div class="movie_card" id="bright">
  <div class="info_section">
    <div class="movie_header">
    <img class="locandina" width="250" height="350" alt=" "src={movie.im}></img>
      
      
      <span class="minutes">{movie.duration}</span>
      <p class="type">{movie.gener}</p>
      
    </div>
    <div class="movie_tit">
    <h1 class="text">
    {movie.title}
    </h1>
  </div>
    <div class="movie_desc">
      <h3 class="text">
      {movie.description}
      </h3>
    </div>
    
    <div class="blur_back bright_back" width="250" height="320">
<img src={movie.back} width="870" height="380" alt='background' />
</div>
  </div>
  
  <button className="btn">Search</button>
  
</div>

<div>
</div>
    </div>
  )
}

export default MovieCard
