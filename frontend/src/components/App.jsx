import Header from "./Header"
import Footer from "./Footer"
import Login from "./Login"
import CustomRouter from '../routes'
import { useState } from "react"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (<div>
    {(isLoggedIn)? 
      <>
        <Header/>
        <CustomRouter isLoggedIn={isLoggedIn} />
        <Footer/>
      </> : <>
        {/* <CustomRouter isLoggedIn={isLoggedIn} /> */}
        <Login/>
      </>
    }
  </div>);
}

export default App;
