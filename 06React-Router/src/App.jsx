// It is library for adding routes in react where:
// ✅ BrowserRouter — Provide routing context 
// ✅ Routes — keep route definition 
// ✅ Route — path and its rendered component
// ✅ Link — routing without reloading (SPA)
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";   
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About'
import Users from "./Pages/Users";
import Login from './Pages/Login';
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";

function App() {

  return (
    <Router>
    <nav>
      <Link to = '/'>Home</Link>
      <Link to = '/about'> About</Link>
       <Link to="/users/1">User 1</Link>
        <Link to="/users/2">User 2</Link>
        <Link to="/login">Login</Link>
     
    </nav>

      <Routes>
         <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/:id" element={<Users />} />
           <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
       
      </Routes>
    </Router>
  )
}

export default App
