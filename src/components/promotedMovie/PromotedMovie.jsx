import "./promotedMovie.scss"

function PromotedMovie() {
  return (
    <div className="promotedMovie">
      <div className="promotedMovieContainer">
        <div className="promotedMovieInfos">
          <h2 className="promotedMovieTitle">The Soul Conductor</h2>
          <div className="promotedMovieDetails">
            <div className="promotedMovieNote">
              <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                alt="tmbd icone"
                className="promotedMovieInfosLogo"
              />
              <p>7.8</p>
            </div>
            <p> - </p>
            <p>English</p>
          </div>
        </div>
        <div className="promotedMovieImage">
          <img src="https://imgsrc.cineserie.com/2018/04/54986.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default PromotedMovie
