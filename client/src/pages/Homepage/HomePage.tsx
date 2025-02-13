import Cards from "../../components/Cards/Cards";
import CardsUser from "../../components/Cards/CardsUser";
import "./HomePage.css";

function HomePage() {
  const api = {
    music:
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=20&refine=types_libelles%3A%22Concert%20-%20Musique%22&refine=accueil_enfant%3A%22oui%22",

    conte:
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=100&refine=accueil_enfant%3A%22oui%22&refine=types_libelles%3A%22Contes%20-%20Lecture%20-%20Po%C3%A9sie%22",
    projection:
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=100&refine=accueil_enfant%3A%22oui%22&refine=types_libelles%3AProjection",
    // user: `${import.meta.env.VITE_API_URL}/api/event/`,
  };

  return (
    <>
      <main>
        <section className="event-theme">
          <div className="nav">
            <h2>Vos évènements</h2>
            <p>Voir plus</p>
          </div>
          <CardsUser />
        </section>

        <section className="event-theme">
          <div className="nav">
            <h2>Evenement Musicaux</h2>
            <p>Voir plus</p>
          </div>
          <Cards api={api.music} />
        </section>

        <section className="event-theme">
          <div className="nav">
            <h2>Contes et Lectures</h2>
            <p>Voir plus</p>
          </div>
          <Cards api={api.conte} />
        </section>
        <section className="event-theme">
          <div className="nav">
            <h2>Projection</h2>
            <p>Voir plus</p>
          </div>
          <Cards api={api.projection} />
        </section>
        <img src="..\src\assets\images\lapin_2.png" alt="" />
      </main>
    </>
  );
}

export default HomePage;
