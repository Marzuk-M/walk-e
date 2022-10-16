import Header from "./Header"
import Footer from "./Footer"
import Login from "./Login"
import CustomRouter from '../routes'
// import { Routes, Route, Link } from "react-router-dom";
// import {Home} from './pages/home'

function App() {
  return (<div>

    {/* <Login/> */}
    <Header/>
      <CustomRouter/>
    <Footer/>

  </div>);
}

export default App;
