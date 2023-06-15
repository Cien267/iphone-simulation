import './Application.css'
import { useState, useEffect } from 'react'

function IphoneDate() {
  const [date, setDate] = useState(new Date())
  let interval
  useEffect(() => {
    interval = setInterval(() => {
      setDate(new Date())
    }, 3600000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const monthIndx =date.getMonth()
  let currentMonth = months[monthIndx]

  const dayIndx =date.getDay()
  let currentDayOfWeek = weekdays[dayIndx]

  let currentDayOfMonth = date.getDate().toString().padStart(2, '0');
  return (
    <div className='date-wrapper'>
        <div className='month'>{currentMonth}</div>
        <div className='day-of-week'>{currentDayOfWeek}</div>
        <div className='day'>{currentDayOfMonth}</div>
    </div>
  )
}

export default IphoneDate