import Header from "./Header"
import Footer from "./Footer"
import CustomRouter from '../routes'
// import { Routes, Route, Link } from "react-router-dom";
// import {Home} from './pages/home'

function App() {
  return (<div>
    
    <Header/>
      <CustomRouter/>
    <Footer/>

  </div>);
}

export default App;
