import type { ChangeEvent } from "react";
import "./Create.css";

function Create() {
  const handleEvent = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <main className="create-event">
        <h1>Ajouter vos évènements</h1>
        <form onSubmit={handleEvent}>
          <h2>Titre de l'évènement</h2>
          <input type="text" name="title" required />
          <h2>Thème de l'évènement</h2>

          <select name="theme" id="theme" required>
            <option value="">-- Sélectionner --</option>
            <option value="Musique">Concert</option>
            <option value="Cinéma">Projection</option>
            <option value="Conte">Conte</option>
            <option value="Sport">Sport</option>
            <option value="Educatif">Educatif</option>
          </select>
          <div className="add-poster">
            <h2>Ajouter une image</h2>
          </div>
          <input type="file" name="poster" id="" />
          <h2>Adresse</h2>
          <input type="text" name="location" id="location" />
          <h2>Date</h2>
          <input type="datetime-local" name="date_hour" id="" />
          <h2>Description</h2>
          <textarea
            name="description"
            id=""
            placeholder="Entrez ici la description de l'évènement"
          >
            {" "}
          </textarea>
          <h2>Prix</h2>
          <input type="number" name="price" id="" />
        </form>
      </main>
    </>
  );
}

export default Create;
