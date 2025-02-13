import type { ChangeEvent } from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();
  const handleEvent = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const eventData = {
      title: data.title,
      theme: data.theme,
      poster: "",
      location: data.location,
      date_hour: data.date_hour,
      description: data.description,
      price: data.price,
      user_id: 1,
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/event/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => console.warn(res.ok))
      .catch((err) => console.error(err));
    toast.success("Merci pour ce nouvel évènement");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <main className="create-event">
        <h1>Ajouter vos évènements</h1>
        <form onSubmit={handleEvent}>
          <h2>Titre de l'évènement</h2>
          <input type="text" name="title" />
          <h2>Thème de l'évènement</h2>

          <select name="theme" id="theme">
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
          <button type="submit"> Valider </button>
        </form>
      </main>
    </>
  );
}

export default Create;
