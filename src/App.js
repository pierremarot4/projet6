import "./App.css";
import {Routes, Route} from "react-router-dom";
import Accueil from "./components/Pages/Accueil/Accueil";
import Apropos from "./components/Pages/A propos/A propos";
import Logement from "./components/Pages/Logement/Logement";
import Erreur from "./components/Pages/Erreur/Erreur";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="/erreur" element={<Erreur />} />
          <Route path="/*" element={<Accueil />} />
        </Routes>
    </div>
  );
}

export default App;
