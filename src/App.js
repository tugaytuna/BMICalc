import './App.css';
import BMIHesapla from './Components/BMIHesapla';
import BMINedir from './Components/BMINedir';
import Header from './Components/Header';

import "./Components/style.css"


function App() {
  return (
    <div className="App">
      <Header/>
      <div className='columnAll'>
      <BMIHesapla/>
      <BMINedir/>
      </div>
      <h6>Version 1.2.2</h6>
    </div>
  );
}

export default App;
