import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import useAuth from "../hooks/useAuth";
import Characters from "../pages/Characters";
import CharacterUpdateDetails from "../pages/CharacterUpdateDetails";
import CharacterUpdateRace from "../pages/CharacterUpdateRace";
import CharacterUpdateClass from "../pages/CharacterUpdateClass";
import CharacterUpdateAbilities from "../pages/CharacterUpdateAbilities";
import CharacterUpdateEquipment from "../pages/CharacterUpdateEquipment";
import CharacterUpdate from "../pages/CharacterUpdate";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {isLoggedIn ? (
          <>
            <Route path="/characters" element={<Characters />} />
            <Route
              path="/characters/:characterId/edit"
              element={<CharacterUpdate />}
            >
              <Route index element={<CharacterUpdateDetails />} />
              <Route path="race" element={<CharacterUpdateRace />} />
              <Route path="class" element={<CharacterUpdateClass />} />
              <Route path="abilities" element={<CharacterUpdateAbilities />} />
              <Route path="equipment" element={<CharacterUpdateEquipment />} />
            </Route>
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
