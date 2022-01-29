import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";
import Characters from "../pages/Characters";
import Character from "../pages/Character";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn ? (
          <>
            <Route path="characters" element={<Characters />} />
            <Route path="characters/:characterId" element={<Character />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
