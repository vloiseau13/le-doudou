import { PiRabbitThin } from "react-icons/pi";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <>
      <header>
        <Link to="/">
          <img src="..\src\assets\images\logo.png" alt="" />
        </Link>
        <ul>
          <li>Thèmes</li>
          <Link to="/random">
            <li>Aléatoire</li>
          </Link>
          <li>Carte</li>
          <div className="cta-header">
            <Link to="/connexion">
              <div className="rabbit-connexion">
                <PiRabbitThin className="rabbit" />
                <p>Se connecter</p>
              </div>
            </Link>
            <Link to={"/create"}>
              <button type="button" className="creation-event">
                Créer un évènement
              </button>
            </Link>
          </div>
        </ul>
      </header>
    </>
  );
}

export default Header;
