import { Routes, Route, Link } from "react-router-dom";
import Account from "./components/pages/account";
import Explore from "./components/pages/explore";
import Home from "./components/pages/home";
import Rankings from "./components/pages/rankings";

export default function CustomRouter() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/rankings" element={<Rankings />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  </>
}