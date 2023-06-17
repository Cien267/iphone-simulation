import "./Application.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro"

function WeatherWidget() {
  return (
    <div className="date-wrapper weather-widget-wrapper">
      <div className="location">Ha Noi</div>
      <div className="temperature">29°</div>
      <FontAwesomeIcon
        icon={icon({ name: "cloud" })}
        className="weather-icon"
      />
      <div className="weather-name">Cloudy</div>
      <div className="temp-range">H:36° T:28°</div>
    </div>
  )
}

export default WeatherWidget
