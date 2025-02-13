import { useEffect, useState } from "react";
import type { CardI, EventI } from "../../types/event";
import CardThemes from "../CardThemes/CardThemes";
import "./Cards.css";

function Cards({ api }: CardI) {
  const [event, setEvent] = useState<EventI[]>([]);
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setEvent(data.results);
      });
  }, [api]);

  return (
    <>
      <article className="event-align">
        <CardThemes index={0} data={event} />
        <CardThemes index={1} data={event} />
        <CardThemes index={2} data={event} />
      </article>
    </>
  );
}

export default Cards;
