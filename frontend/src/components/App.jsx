import Header from "./Header"
import Footer from "./Footer"
import Login from "./Login"
import SignUp from "./Register"
import CustomRouter from '../routes'
import Account from "./pages/account"

// import { Routes, Route, Link } from "react-router-dom";
// import {Home} from './pages/home'

function App() {
  return (<div>
    <Header title="Account"/>
    <Account/>

    {/* <SignUp/> */}
    <Footer/>
      {/* <CustomRouter/> */}
   
    

  </div>);
}

export default App;
