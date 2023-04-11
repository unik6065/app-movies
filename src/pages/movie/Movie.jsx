import { useParams } from "react-router-dom"
import "./movie.scss"

function Movie() {
  const { id } = useParams()
  return (
    <div className="movie">
      <div className="movieContainer">
        <div className="movieHeader">
          <img src="https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg" alt="" className="movieBackdrop" />
          <div className="movieHeaderPoster">
            <img src="https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt="" className="moviePoster" />
          </div>
          <div className="movieHeaderInfos">
            <h2 className="movieTitle">Fight Club</h2>
            <span>2002</span>
          </div>
          <div className="movieHeaderSynopsis">
            <h2>Synopsis</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie
