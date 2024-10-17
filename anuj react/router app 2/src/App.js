import Home from "./components/Home";
import About from "./components/About";
import Lab from "./components/Lab";
import NotFound from "./components/NotFound";
import Support from "./components/Support";
import { Link, Route, Routes, NavLink } from "react-router-dom";
import MainHeader from "./components/MainHeader";



const App = () => {
  return(

    <div>
      <nav>
        <ul>

          <li>

            {/* navlink Add active class */}
            
            <NavLink to='/'>Home</NavLink>
          </li>

          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>

          <li>
            <NavLink to='/lab'>Lab</NavLink>
          </li>

          <li>
            <NavLink to='/about'>About</NavLink>
          </li>

          <li>
            <NavLink to='*'>NotFound</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>}>

        {/* this is default route*/}
        <Route index element={<Home/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/lab" element={<Lab/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;