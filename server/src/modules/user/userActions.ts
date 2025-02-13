import type { RequestHandler } from "express";
import userRepository from "./userRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const user = await userRepository.readAll();
    res.json(user);
  } catch (err) {
    console.error(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const addUser = await userRepository.create(req.body);
    if (addUser) {
      res
        .status(201)
        .send(`L'utilisateur ${req.body.pseudo} à été ajouté à la BDD`);
    } else {
      res.status(404).send("An error occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add };
