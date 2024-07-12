
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/Signup';
import Basics from './pages/products/collagewear/Basics';
import Trendy from './pages/products/collagewear/Trendy';
import OldMoney from './pages/products/collagewear/OldMoney';
import Regular from './pages/products/hostelwear/Regular';
import NightSuite from './pages/products/hostelwear/NightSuite';
import LoungWear from './pages/products/hostelwear/LoungWear';



function App() {
  return (
    <Router>
      <div>
        <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="/login" element={<Login/>}/>
           <Route exact path="/SignUp" element={<Signup/>} />
           

           <Route exact path="/Basics" element={<Basics/>}/>
           <Route exact path="/Trendy" element={<Trendy/>}/>
           <Route exact path="/OldMoney" element={<OldMoney/>}/>

           <Route exact path="/Regular" element={<Regular/>}/>
           <Route exact path="/NightSuites" element={<NightSuite/>}/>
           <Route exact path="/LoungWear" element={<LoungWear/>}/>
         </Routes>
      </div>
    </Router>

  );
}

export default App;
