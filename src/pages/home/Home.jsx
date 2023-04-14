import { useState, useEffect } from 'react';

import Leftbar from "../../components/leftbar/Leftbar";
import MovieList from "../../components/movieList/MovieList";
import PromotedMovie from "../../components/promotedMovie/PromotedMovie";
import Topbar from "../../components/topbar/Topbar";

import "./home.scss"

function FetchMovies({ setFunction }) {

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&sort_by=release_date.desc&primary_release_date.lte=2023-04-12`)
      .then((res) => res.json())
      .then((data) => {
        setFunction(data["results"])
      })
      .catch((err) => {
        console.log(err.message)
      })
  })
}

function Home() {
  const [movies, setMovies] = useState([{ original_title: "test", backdrop_path: "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg", id: "1" }]);
  FetchMovies({ setFunction: setMovies, movies: movies });
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="sideBar">
          <Leftbar />
        </div>
        <div className="mainPage">
          <Topbar />
          <PromotedMovie movie={movies[0]} />
          <h2 className="subheading">Les Films du moment</h2>
          <div className="homeMovieList">
            <MovieList movies={movies.slice(1)} />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Home
