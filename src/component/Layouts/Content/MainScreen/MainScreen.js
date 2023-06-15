import './MainScreen.css'
import IphoneDate from './Applications/IphoneDate'
import FaceTime from './Applications/FaceTime'
import Calendar from './Applications/Calendar'
import Photos from './Applications/Photos'
import Camera from './Applications/Camera'

function MainScreen() {
  return (
    <div className='app-row main-wrapper'>
        <div>
          <IphoneDate/>
        </div>
      <div className='app-row-col'>
        <div className='app-row'>
          <FaceTime/>
          <Calendar/>
        </div>
        <div className='app-row'>
          <Photos/>
          <Camera/>
        </div>
      </div>
  </div>
  )
}

export default MainScreen