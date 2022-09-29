import { movies } from './data/Movies'
import Movie from './Movie'
import './Movie.css'

const FetchMovieData = ()=> {
    return movies
}

const MovieComponent = () => {
    const MoviesData = FetchMovieData()
    return (
        <div className='Movie-container'>
            <h2>Movie Time</h2>
            <ul className='Movie-list'>
               {
                MoviesData.map((movie)=>(
                  <Movie movie={movie}  key={movie.id}/> 
                ))
               }
            </ul>
        </div>
    )
}

export default MovieComponent