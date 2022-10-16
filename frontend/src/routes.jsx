import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Error404 from "./components/pages/404error";
import Account from "./components/pages/account";
import Explore from "./components/pages/explore";
import Home from "./components/pages/home";
import Rankings from "./components/pages/rankings";
import EditProfile from "./components/pages/editProfile";
import Register from "./components/Register";



export default function CustomRouter(props) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!props.isLoggedIn) navigate("/login")
  })

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/rankings" element={<Rankings />} />
      <Route path="/account" element={<Account />} />
      {(props.isLoggedIn)? 
        <></> 
        : 
        <> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </>
      }
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="*" element={<Error404/>} />
    </Routes>
  );
}