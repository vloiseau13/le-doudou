import { Link } from "react-router-dom";
import type { EventU } from "../../types/event";
import "./CardTheme.css";

interface CardsUserProps {
  data: EventU;
}

function CardThemesUser({ data }: CardsUserProps) {
  return (
    <>
      <section className="card-event-section">
        <Link to={`/user-event/${data?.id}`}>
          <img
            src={data?.poster || "/src/assets/images/poster_default.png"}
            alt="Affiche de l'événement"
            className="event-poster"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "/src/assets/images/poster_default.png";
            }}
          />
        </Link>
        <article className="event-details">
          <h3>{data?.title}</h3>
          <p>
            {data?.location} {data?.date_hour}
          </p>
          <details className="card-event-detail">
            <summary>Plus d'informations</summary>
            {data?.description}
          </details>
        </article>
      </section>
    </>
  );
}

export default CardThemesUser;
