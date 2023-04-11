import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import "./leftbar.scss"

function handleOnClick(index, setFunction) {
  const list = [false, false, false];
  list[index] = true;
  setFunction(list)
}

function Leftbar() {
  const [activItems, setActivItems] = useState([true, false, false])
  return (
    <div className="leftbar">
      <div className="leftbarLogo">Acorn Movies</div>
      <p>News Feed</p>
      <div className="leftbarNewFeed">
        <div
          className={activItems[0] ? "leftbarFeedOption active" : "leftbarFeedOption"}
          onClick={() => handleOnClick(0, setActivItems)}
        >
          <FontAwesomeIcon icon={faCompass} />
          <span>Browse</span>
        </div>
        <div
          className={activItems[1] ? "leftbarFeedOption active" : "leftbarFeedOption"}
          onClick={() => handleOnClick(1, setActivItems)}
        >
          <FontAwesomeIcon icon={faHeart} />
          <span>Watchlist</span>
        </div>
        <div
          className={activItems[2] ? "leftbarFeedOption active" : "leftbarFeedOption"}
          onClick={() => handleOnClick(2, setActivItems)}
        >
          <FontAwesomeIcon icon={faPeopleGroup} />
          <span>groups</span>
        </div>
      </div>
    </div>
  )
}

export default Leftbar
