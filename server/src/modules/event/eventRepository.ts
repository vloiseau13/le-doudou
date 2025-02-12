import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

interface Events {
  id: number;
  title: string;
  theme: string;
  poster: string;
  location: string;
  date_hour: string;
  description: string;
  price: number;
  user_id: number;
}

class eventRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM event");

    // Return the array of items
    return rows as Events[];
  }
  async create(events: Events) {
    // Execute the SQL INSERT query to add a new item to the "item" table
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO event (title, theme, poster, location, date_hour, description, price, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        events.title,
        events.theme,
        events.poster,
        events.location,
        events.date_hour,
        events.description,
        events.price,
        events.user_id,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }
}

export default new eventRepository();
