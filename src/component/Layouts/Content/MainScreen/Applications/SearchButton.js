import "./Application.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

function SearchButton() {
  return (
    <div className="search-wrapper">
      <div>
        <FontAwesomeIcon
          icon={icon({ name: "search" })}
          className="search-icon"
        />
        Search
      </div>
    </div>
  )
}

export default SearchButton
