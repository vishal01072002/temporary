import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const[IsLogedIn,SetIsLogedIn] = useState(false);

  return(

    <div>

      <Navbar IsLogedIn={IsLogedIn} SetIsLogedIn={SetIsLogedIn}/>

      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LogIn SetIsLogedIn={SetIsLogedIn} />}/>
        <Route path="/signup" element={<SignUp SetIsLogedIn={SetIsLogedIn} />}/>
        <Route path="/dashboard" element={
          <PrivateRoute IsLogedIn={IsLogedIn}>
            <Dashboard/>
          </PrivateRoute>
          }/>

      </Routes>
    </div>
  )
}

export default App;
