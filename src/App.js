import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TextTransform from './components/TextTransform';
import TextTranformClass from './components/TextTranformClass';
import {BrowserRouter, Route, Routes} from'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header title={"Dhivya's Website"}/>
      <Routes >
        <Route path='/functionbased' element={<TextTransform/>}></Route>
        <Route path='/classbased' element={<TextTranformClass title={"My Website"} />}></Route>
      </Routes>
      </BrowserRouter>
      
    
    </div>
  );
}

export default App;
