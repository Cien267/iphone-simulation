import Result from './Result'
import OperationField from './OperationField';
import Header from '../../Header/Header';
import BottomLine from '../../Footer/BottomLine';
import '../../../App.css'
import { useState } from 'react';
import calculate from './calculate/calculate';

function Calculator() {

  let data = {
    result: null,
    next: null,
    operation: null
  }
  let [result, setResult] = useState(data)

  function handleClick(buttonType){
    setResult(calculate(result, buttonType))
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className='wrapper'>
        <Header/>
        <Result result={result.result || result.next || "0"}/>
        <OperationField clickHandler={handleClick}/>
        
        <BottomLine/>
        </div>
      </header>
    </div>
        
    
  )
}

export default Calculator;