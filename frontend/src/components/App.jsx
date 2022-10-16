import Header from "./Header"
import Footer from "./Footer"
import Login from "./Login"
import CustomRouter from '../routes'

// import { Routes, Route, Link } from "react-router-dom";
// import {Home} from './pages/home'
import { useState } from "react"

function App() {
  const [isLoggedIn] = useState(true);
  
  return (<div>
    {(isLoggedIn)? 
      <>
        <Header title="TEST"/>
        <div className="mainContainer">
          <CustomRouter isLoggedIn={isLoggedIn} />
        </div>
        <Footer/>
      </> : <>
        <Login/>
      </>
    }
  </div>);
}

export default App;
