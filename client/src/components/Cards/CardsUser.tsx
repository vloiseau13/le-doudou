import { useEffect, useState } from "react";
import type { EventU } from "../../types/event";
import "./Cards.css";
import CardThemesUser from "../CardThemes/CardThemesUser";

function CardsUser() {
  const [userEvent, setUserEvent] = useState<EventU[]>([]);
  useEffect(() => {
    // fetch(`${import.meta.env.VITE_API_URL}/api/event`)
    fetch(`${import.meta.env.VITE_API_URL}/api/event/latest`)
      .then((response) => response.json())
      .then((data) => {
        setUserEvent(data);
      });
  }, []);

  return (
    <>
      <article className="event-align">
        {userEvent?.slice(0, 3).map((el) => {
          return <CardThemesUser key={el.id} data={el} />;
        })}
        {/* <CardThemesUser index={0} data={userEvent} />
        <CardThemesUser index={1} data={userEvent} />
        <CardThemesUser index={2} data={userEvent} /> */}
      </article>
    </>
  );
}

export default CardsUser;
