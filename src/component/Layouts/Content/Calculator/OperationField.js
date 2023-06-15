import './OperationField.css'
import Button from './Button'

function OperationField(props) {

  function handleClick(buttonType) {
    props.clickHandler(buttonType)
  }
  return (
    <div className='operation-wrapper'>
      <div className='operation-row'>
        <Button type="AC" colorType="top-operation" clickHandler={handleClick}/>
        <Button type="+/-" colorType="top-operation" clickHandler={handleClick}/>
        <Button type="%" colorType="top-operation" clickHandler={handleClick}/>
        <Button type="÷" colorType="right-operation" clickHandler={handleClick}/>
      </div>
      <div className='operation-row'>
        <Button type="7" colorType="center-number" clickHandler={handleClick}/>
        <Button type="8" colorType="center-number" clickHandler={handleClick}/>
        <Button type="9" colorType="center-number" clickHandler={handleClick}/>
        <Button type="x" colorType="right-operation" clickHandler={handleClick}/>
      </div>
      <div className='operation-row'>
        <Button type="4" colorType="center-number" clickHandler={handleClick}/>
        <Button type="5" colorType="center-number" clickHandler={handleClick}/>
        <Button type="6" colorType="center-number" clickHandler={handleClick}/>
        <Button type="-" colorType="right-operation" clickHandler={handleClick}/>
      </div>
      <div className='operation-row'>
        <Button type="1" colorType="center-number" clickHandler={handleClick}/>
        <Button type="2" colorType="center-number" clickHandler={handleClick}/>
        <Button type="3" colorType="center-number" clickHandler={handleClick}/>
        <Button type="+" colorType="right-operation" clickHandler={handleClick}/>
      </div>
      <div className='operation-row'>
        <Button type="0" colorType="special-center-number" clickHandler={handleClick}/>
        <Button type="." colorType="center-number" clickHandler={handleClick}/>
        <Button type="=" colorType="right-operation" clickHandler={handleClick}/>
      </div>
    </div>
  );
}
export default OperationField