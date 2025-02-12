import type { RequestHandler } from "express";
import eventRepository from "./eventRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const event = await eventRepository.readAll();
    res.json(event);
  } catch (err) {
    console.error(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const addEvent = await eventRepository.create(req.body);
    if (addEvent) {
      res
        .status(201)
        .send(`L'évènement ${req.body.title} a été ajouté à la BDD`);
    } else {
      res.status(404).send("An error occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add };
