import './App.css';
import BottomLine from './Layouts/Footer/BottomLine'
import Header from './Layouts/Header/Header'
import MainScreen from './Layouts/Content/MainScreen/MainScreen'
// import { Link } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <div className='wrapper'>
        <Header/>
        <MainScreen/>
        {/* <Link to={`calculator`}>Calculator</Link>  */}
        <BottomLine/>
        </div>
      </header>
    </div>
  );
}

export default App;
