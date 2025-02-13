import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="login">
        <h1>Se connecter</h1>
        <h2>Votre E-mail</h2>
        <input type="email" name="email" />
        <h2>Votre mot de passe</h2>
        <input type="password" name="password" id="" />
      </div>
      <img src="..\src\assets\images\lapin_1.png" alt="" />
      <p>
        Pas de Compte ? Créez en un en cliquant
        <Link to="/create-account">
          <span> ici</span>
        </Link>
      </p>
    </>
  );
}

export default Login;
