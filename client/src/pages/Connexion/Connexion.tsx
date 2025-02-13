import { Link } from "react-router-dom";
import "./Connexion.css";

function Connexion() {
  return (
    <div className="connexion">
      <h1>Bienvenue sur le Doudou</h1>
      <Link to="/login">
        <button type="button">Se connecter</button>
      </Link>
      <Link to="/create-account">
        <button type="button">Créer un compte</button>
      </Link>
    </div>
  );
}

export default Connexion;
