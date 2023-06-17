import "./Application.css"
import { useState, useEffect } from "react"

function Calendar() {
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

  const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  const dayIndx = date.getDay()
  let currentDayOfWeek = weekdays[dayIndx]

  let currentDayOfMonth = date.getDate().toString().padStart(2, "0")
  return (
    <div className="app-wrapper">
      <div className="calendar-icon app-icon">
        <div className="day-of-week">{currentDayOfWeek}</div>
        <div className="day-of-month">{currentDayOfMonth}</div>
      </div>
      <div className="app-name">Calendar</div>
    </div>
  )
}

export default Calendar
