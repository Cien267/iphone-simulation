import "./MainScreen.css"
import IphoneDate from "./Applications/IphoneDate"
import FaceTime from "./Applications/FaceTime"
import Calendar from "./Applications/Calendar"
import Photos from "./Applications/Photos"
import Camera from "./Applications/Camera"
import WeatherWidget from "./Applications/WeatherWidget"
import Settings from "./Applications/Settings"
import Files from "./Applications/Files"
import AppleTV from "./Applications/AppleTV"
import AppleStore from "./Applications/AppleStore"
import FaceBook from "./Applications/FaceBook"
import Instagram from "./Applications/Instagram"
import Messenger from "./Applications/Messenger"
import Twitter from "./Applications/Twitter"
import Calculator from "./Applications/Calculator"
import WeatherApp from "./Applications/WeatherApp"
import Notes from "./Applications/Notes"
import Health from "./Applications/Health"
import SearchButton from "./Applications/SearchButton"
import IosMessage from "./Applications/IosMessage"
import Mail from "./Applications/Mail"
import Safari from "./Applications/Safari"
import MyShortcuts from "./Applications/MyShortcuts"

function MainScreen() {
  return (
    <div>
      <div className="main-wrapper">
        <div className="app-row">
          <div>
            <IphoneDate />
          </div>
          <div className="app-row-col">
            <div className="app-row">
              <FaceTime />
              <Calendar />
            </div>
            <div className="app-row">
              <Photos />
              <Camera />
            </div>
          </div>
        </div>
        <div className="app-row" style={{ paddingTop: "20px" }}>
          <div>
            <WeatherWidget />
          </div>
          <div className="app-row-col">
            <div className="app-row">
              <Settings />
              <Files />
            </div>
            <div className="app-row">
              <AppleTV />
              <AppleStore />
            </div>
          </div>
        </div>
        <div className="app-row" style={{ paddingTop: "20px" }}>
          <div className="app-row-col">
            <div className="app-row">
              <Calculator />
              <WeatherApp />
            </div>
            <div className="app-row">
              <FaceBook />
              <Instagram />
            </div>
          </div>
          <div className="app-row-col">
            <div className="app-row">
              <Notes />
              <Health />
            </div>
            <div className="app-row">
              <Messenger />
              <Twitter />
            </div>
          </div>
        </div>
        <div
          className="app-row"
          style={{
            paddingTop: "85px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <SearchButton />
        </div>
      </div>
      <div className="hightlight-app-wrapper">
        <div className="app-row  highlight-app" style={{ paddingTop: "20px" }}>
          <div className="app-row-col">
            <div className="app-row">
              <IosMessage />
              <Mail />
            </div>
          </div>
          <div className="app-row-col">
            <div className="app-row">
              <Safari />
              <MyShortcuts />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen
