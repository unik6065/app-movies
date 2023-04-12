import "./actorSmallCard.scss"

function ActorSmallCard() {
  return (
    <div className="actorSmallCard">
      <div className="actorSmallCardContainer">
        <img src="https://image.tmdb.org/t/p/original//8nytsqL59SFJTVYVrN72k6qkGgJ.jpg" alt="" className="actorImage" />
        <h2 className="actorName"> Edward Norton </h2>
      </div>
    </div>
  )
}

export default ActorSmallCard
