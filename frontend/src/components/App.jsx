import Header from "./Header"
import Footer from "./Footer"
import CustomRouter from '../routes'
// import { Routes, Route, Link } from "react-router-dom";
// import {Home} from './pages/home'

function App() {
  return <div>
    
    <Header/>
    {/* <h1>Bodys</h1> */}
      <CustomRouter/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    <Footer/>

  </div>;
}

export default App;
