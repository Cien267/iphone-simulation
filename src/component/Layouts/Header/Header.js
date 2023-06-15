import { useState, useEffect } from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Header() {
  const [date, setDate] = useState(new Date())
  let interval
  useEffect(() => {
    interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const shownTime = ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)
  return (
    <div className='header-wrapper'>
      <div className='time'>{shownTime}</div>
      <div className='connection-info'>
      <FontAwesomeIcon icon={icon({name: 'signal'})} />
      <FontAwesomeIcon icon={icon({name: 'wifi'})} />
      <FontAwesomeIcon icon={icon({name: 'battery'})} />
      </div>
    </div>
  )
}

export default Header