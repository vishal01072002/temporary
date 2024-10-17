import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Support from "./components/Support";
import Lab from "./components/Lab";
import NotFound from "./components/NotFound";
import About from "./components/About";
import { Link } from "react-router-dom";

const App = () => {
  return(
    <div>

      <nav>
        <ul>

          <li>
            <Link to='/'>Home</Link>
          </li>

          <li>
            <Link to='/support'>Support</Link>
          </li>

          <li>
            <Link to='/lab'>Lab</Link>
          </li>

          <li>
            <Link to='/about'>About</Link>
          </li>

          <li>
            <Link to='*'>NotFound</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/lab" element={<Lab/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;