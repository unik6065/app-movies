import { useParams } from "react-router-dom"
import ActorSmallCard from "../../components/actorSmallCard/ActorSmallCard"
import "./movie.scss"
import MovieInformations from "../../components/movieInformations/MovieInformations"

function Movie() {
  const { id } = useParams()
  return (
    <div className="movie">
      <div className="movieContainer">
        <div className="movieHeader">
          <img src="https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg" alt="" className="movieBackdrop" />
          <div className="movieHeaderInfos">
            <div className="movieHeaderPoster">
              <img src="https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" alt="" className="moviePoster" />
            </div>
            <div className="movieHeaderDetails">
              <div className="movieHeaderTitle">
                <h2 className="movieTitle">Fight Club</h2>
                <p>2002</p>
              </div>
              <div className="movieHeaderCategories">
                <p className="categories">Aventure, science fiction</p>
              </div>
              <div className="movieHeaderSynopsis">
                <h2>Synopsis</h2>
                <p className="movieSynopsis">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, sed inventore, dolore aliquam sit facilis praesentium qui fugiat modi doloremque a fugit, nostrum excepturi architecto ducimus! Dolores eligendi, illo eius, aspernatur a cupiditate ipsam id, ea velit magnam laudantium distinctio alias quasi dolore omnis! Est porro totam eius suscipit, cupiditate et labore, inventore natus laborum hic explicabo. Eum rerum, est sapiente ipsam dolor facilis vero enim velit, quibusdam, temporibus sequi obcaecati odio et aut at! Cumque sit vero odio distinctio dolorum? Quia omnis sed similique, laboriosam officia quos fugiat, saepe odit explicabo expedita recusandae, autem nihil sit voluptatem quod possimus doloremque! Aliquid aut commodi adipisci consectetur? Fugiat id, repellat dolorem neque voluptatum alias saepe vitae beatae, similique culpa veniam atque quam laboriosam amet, illo itaque.</p>
              </div>
              <p></p>
            </div>
          </div>
        </div>
        <h2 className="subheading">Cast</h2>
        <div className="movieCastContainer">
          < ActorSmallCard />
          < ActorSmallCard />
          < ActorSmallCard />
          < ActorSmallCard />
          < ActorSmallCard />
          < ActorSmallCard />
          < ActorSmallCard />
          < ActorSmallCard />
          < ActorSmallCard />
          < ActorSmallCard />
        </div>
        <div className="movieInformations">
          <h2 className="subheading">Movie infos</h2>
          < MovieInformations />
        </div>
      </div>
    </div>
  )
}

export default Movie
