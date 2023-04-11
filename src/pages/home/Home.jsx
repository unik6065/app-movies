

import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";

import "./home.scss"

function Home() {
  return (
    <div className="home">
      <div className="homeContainer">
        <Leftbar />
        <Topbar />
      </div >
    </div >
  )
}

export default Home
