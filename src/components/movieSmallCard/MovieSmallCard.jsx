import { useNavigate } from "react-router-dom"
import "./movieSmallCard.scss"


function MovieSmallCard({ movie }) {
  const navigate = useNavigate()

  return (
    <div className="movieSmallCard" onClick={() => navigate(`movie/${movie.id}`)}>
      <div className="movieSmallCardContainer">
        <div className="movieSmallCardImg">
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
        </div>
        <div className="movieSmallCardInfos">
          <h2>
            {movie.original_title}
          </h2>
          <p>Action, Aventure, Drama</p>
        </div>
      </div>
    </div>
  )
}

export default MovieSmallCard
