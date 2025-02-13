import { toast } from "react-toastify";
import type { EventU } from "../../types/event";
import "../Event/Event.css";
import { useLoaderData, useNavigate } from "react-router-dom";

export type DataUserProps = EventU[];

function Uservent() {
  const navigate = useNavigate();
  const data = useLoaderData() as DataUserProps;
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/event/${data[0].id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      if (!response.ok) {
        throw new Error("An unknown error occurred.");
      }

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      toast.success((err as Error).message);
    }
  };

  return (
    <main className="page">
      <h1 className="event-global-title">{data[0]?.title}</h1>
      <img
        src={data[0]?.poster}
        alt="Affiche évènement"
        className="event-poster"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "/src/assets/images/poster_default.png";
        }}
      />
      <h3 className="category">{data[0]?.theme} </h3>
      <p className="event-description">{data[0]?.description} </p>
      <hr className="separation" />
      <p className="event-description event-other">{data[0]?.location}</p>
      <p>{data[0]?.date_hour}</p>
      <p>{data[0]?.price} Euros</p>
      <hr className="separation" />

      <button type="button" onClick={handleDelete}>
        Supprimer
      </button>
    </main>
  );
}
export default Uservent;
