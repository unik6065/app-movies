

import Leftbar from "../../components/leftbar/Leftbar";
import MovieSmallCard from "../../components/movieSmallCard/MovieSmallCard";
import PromotedMovie from "../../components/promotedMovie/PromotedMovie";
import Topbar from "../../components/topbar/Topbar";

import "./home.scss"

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="sideBar">
          <Leftbar />
        </div>
        <div className="mainPage">
          <Topbar />
          < PromotedMovie />
          <h2 className="subheading">Les Films du moment</h2>
          <div className="homeMovieList">
            < MovieSmallCard />
            < MovieSmallCard />
            < MovieSmallCard />
            < MovieSmallCard />
            < MovieSmallCard />
            < MovieSmallCard />
            < MovieSmallCard />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Home
