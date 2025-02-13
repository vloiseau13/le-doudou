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

const read: RequestHandler = async (req, res, next) => {
  try {
    const eventId = Number(req.params.id);
    const event = await eventRepository.read(eventId);

    if (event === null) {
      res.sendStatus(404);
    } else {
      res.send(event);
    }
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

const latest: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await eventRepository.lastEvent();

    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const deleteEvent = await eventRepository.destroy(id);
    if (deleteEvent) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const {
      title,
      theme,
      poster,
      location,
      date_hour,
      description,
      price,
      user_id,
    } = req.body;

    const updateEvent = await eventRepository.update({
      title,
      theme,
      poster,
      location,
      date_hour,
      description,
      price,
      user_id,
      id,
    });

    if (updateEvent) {
      res.sendStatus(204);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add, edit, read, destroy, latest };
