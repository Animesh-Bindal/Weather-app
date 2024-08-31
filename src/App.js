import './App.css';
import Frontpg from './Components/Frontpg';
import Weather from './Components/Weather';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [text, setText] = useState('');
  const changetext = (textt) => {
    setText(textt);
  }
  const API_KEY = process.env.REACT_APP_API_KEYY;
  return (
    <Router>
      <>
        <Navbar textt={text} />
        <Routes>
          <Route exact path='/' element={<Frontpg textt={text} setTextt={changetext} />}></Route>
          <Route exact path="/weather" element={<Weather textt={text} api={API_KEY}/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
