import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home"
import Contact  from './Contact';
import About from './About';
import Error from "./Error"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='*' element={<Error/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  