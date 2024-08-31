import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Hello from home</div>}></Route>
        <Route path='/contact' element={<div>Hello from contact page</div>}></Route>
        <Route path='/help' element={<div>Hello from help page</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  