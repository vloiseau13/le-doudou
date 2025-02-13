import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";

interface User {
  pseudo: string;
  email: string;
  password: string;
}

class userRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");
    return rows as User[];
  }

  async create(user: User) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (pseudo,email, password) VALUES (?, ? ,?)",
      [user.pseudo, user.email, user.password],
    );
    return result.insertId;
  }
}

export default new userRepository();
