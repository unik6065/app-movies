import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faSliders } from "@fortawesome/free-solid-svg-icons";

import "./topbar.scss"

function Topbar() {
  return (
    <div className="topBar">
      <div className="topBarSearchBar">
        <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
        <input type="text" name="movieSearch" className="topBarInputField" placeholder="search a movie" />
        <FontAwesomeIcon icon={faSliders} className="topBarSliders" />
      </div>
      <div className="accountInfos">
        <FontAwesomeIcon icon={faMessage} />
        <FontAwesomeIcon icon={faUser} />
      </div>
    </div>
  )
}

export default Topbar
