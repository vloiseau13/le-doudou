import type { EventI } from "../../types/event";
import "./Event.css";
import { useLoaderData } from "react-router-dom";

interface DataProps {
  results: EventI[];
}

function Event() {
  const data = useLoaderData() as DataProps;
  return (
    <main className="page">
      <h1 className="event-global-title">{data?.results[0].nom}</h1>
      <img
        src={data.results[0]?.media_url}
        alt="Affiche évènement"
        className="event-poster"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "/src/assets/images/poster_default.png";
        }}
      />
      <h3 className="category">{data?.results[0].themes_libelles} </h3>
      <p className="event-description">{data?.results[0].description_evt} </p>
      <hr className="separation" />
      <address className="adresse">
        <p className="event-description event-other">{data.results[0].lieu}</p>
        <p className="event-description event-other">
          {data.results[0].adresse}
        </p>
        <p className="event-description event-other">
          {data.results[0].code_postal}
        </p>
      </address>
      <p>{data.results[0].date}</p>
      <hr className="separation" />
      <section className="cta">
        <p className="event-description event-other">
          Informations supplémentaires :{" "}
        </p>
        <a
          className="event-link"
          href={data.results[0].url_site}
          target="_blank"
          rel="noreferrer"
        >
          Cliquez ici
        </a>
      </section>
    </main>
  );
}
export default Event;
