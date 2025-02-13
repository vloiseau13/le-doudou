import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { EventI } from "../../types/event";
import "./Random.css";

function Random() {
  const [events, setEvents] = useState<[] | EventI[]>([]);
  const [randomIndex, setRandomIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(
      "https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/244400404_agenda-evenements-nantes-metropole_v2@nantesmetropole/records?limit=100&refine=accueil_enfant%3Aoui",
    )
      .then((response) => response.json())
      .then((data) => {
        const results: EventI[] = data.results;

        const singleIds: Record<number, number> = {};

        const final = results.filter((event) => {
          if (!singleIds[event.id_manif]) singleIds[event.id_manif] = 0;

          singleIds[event.id_manif] += 1;

          if (singleIds[event.id_manif] <= 1) {
            return event;
          }
        });
        setEvents(final);
        setRandomIndex(Math.floor(Math.random() * final.length));
      });
  }, []);

  const handleRefresh = () => {
    if (events.length > 0) {
      setRandomIndex(Math.floor(Math.random() * events.length));
    }
  };

  if (randomIndex === null || !events[randomIndex]) {
    return <div>Loading...</div>;
  }

  const currentEvent = events[randomIndex];

  return (
    <>
      <div className="random">
        <h1 className="title">Pas d'idée de sortie ? </h1>
        <Link className="random-link" to={`/event/${currentEvent.id_manif}`}>
          <img
            src={currentEvent?.media_url}
            alt="Affiche évènement"
            className="event-poster"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/src/assets/images/poster_default.png";
            }}
          />
        </Link>
        <h2 className="event_title">{currentEvent.nom}</h2>
        <p className="event_info">{currentEvent.emetteur}</p>
        <p className="event_info">{currentEvent.date}</p>
        <button type="button" onClick={handleRefresh} className="cta-random">
          Relancer
        </button>
        <a
          href={currentEvent.lien_agenda}
          target="_blank"
          rel="noopener noreferrer"
          className="event_url"
        >
          Plus d'infos
        </a>
      </div>
      <img src=".\src\assets\images\lapin_1.png" alt="" />
    </>
  );
}

export default Random;
