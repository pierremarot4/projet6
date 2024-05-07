import "./Erreur.scss";
import { NavLink } from "react-router-dom";
import Footer from "../../footer"
import Navbar from "../../navbar.jsx";

function ErrorPage() {
  return (
    <div>
    <Navbar />
    <div className="message">
      <h1 className="message__h1">404</h1>
      <p className="message__error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="message__back">
        Retournez sur la page d'accueil.
      </NavLink>
    </div>
    <Footer />
    </div>
  );
}

export default ErrorPage;
