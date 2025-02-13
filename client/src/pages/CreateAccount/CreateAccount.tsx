import { Link } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
  };

  return (
    <div className="create-account">
      <img src="..\src\assets\images\lapin_4.png" alt="" />
      <h1>Merci de rejoindre la communauté du Doudou</h1>
      <form onSubmit={handleSubmit} className="form-account">
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" placeholder="Votre e-mail" />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Votre mot de passe"
        />

        <button type="submit" className="signup-button">
          Je m'inscris
        </button>
        <Link to="/login">Déjà un compte? Connectez-vous</Link>
      </form>
    </div>
  );
}

export default CreateAccount;
