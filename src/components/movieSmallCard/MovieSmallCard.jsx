import "./movieSmallCard.scss"

function MovieSmallCard() {
  return (
    <div className="movieSmallCard">
      <div className="movieSmallCardContainer">
        <div className="movieSmallCardImg">
          <img src="https://fr.web.img4.acsta.net/medias/nmedia/18/35/11/65/affiche.jpg" alt="" />
        </div>
        <div className="movieSmallCardInfos">
          <h2>
            Le seigneur des anneaux
          </h2>
          <p>Action, Aventure, Drama</p>
        </div>
      </div>
    </div>
  )
}

export default MovieSmallCard
