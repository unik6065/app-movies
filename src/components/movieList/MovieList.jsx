import MovieSmallCard from "../../components/movieSmallCard/MovieSmallCard";
import "./movieList.scss"


function MovieList({ movies }) {
  const listItems = movies.map(movie =>
    <MovieSmallCard key={movie.id} movie={movie} />
  )
  return (
    <div className="movieList">
      {listItems}
    </div>
  )
}

export default MovieList
