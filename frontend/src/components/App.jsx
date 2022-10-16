import Header from "./Header"
import Footer from "./Footer"
import Login from "./Login"
import Register from "./Register"
import CustomRouter from '../routes'
import Account from "./pages/account"
import EditProfile from "./pages/editProfile"
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
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
