
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';



function App() {
  return (
    <Router>
      <div>
        <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/login" element={<Login/>}/>
           <Route exact path="/SignUp" element={<Signup/>} /> 
        </Routes>
      </div>
    </Router>

  );
}

export default App;
