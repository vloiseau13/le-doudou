import { Link } from "react-router-dom";
import type { EventI } from "../../types/event";
import "./CardTheme.css";

interface CardsEventProps {
  index: number;
  data: EventI[];
}

function CardThemes({ index, data }: CardsEventProps) {
  const event = data[index];
  return (
    <>
      <section className="card-event-section">
        <Link to={`/event/${event?.id_manif}`}>
          {/* {event?.media_url ? ( */}
          <img
            src={event?.media_url}
            alt="Affiche évènement"
            className="event-poster"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/src/assets/images/poster_default.png";
            }}
          />
        </Link>
        <article className="event-details">
          <h3>{event?.nom}</h3>
          <p>
            {event?.lieu} {event?.date}
          </p>
          <details className="card-event-detail">
            <summary>Plus d'informations</summary>
            {event?.description_evt}
          </details>
        </article>
      </section>
    </>
  );
}

export default CardThemes;
