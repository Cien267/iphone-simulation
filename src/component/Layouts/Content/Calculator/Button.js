import './Button.css'

function Button(props) {
  function handleClick() {
    props.clickHandler(props.type)
  }
  return (
    <div className={'button button-' + props.colorType} onClick={handleClick}>{props.type}</div>
  )
}

export default Button