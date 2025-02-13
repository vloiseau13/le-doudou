import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
import eventActions from "./modules/event/eventActions";
import userActions from "./modules/user/userActions";

router.get("/api/event", eventActions.browse);
router.get("/api/event/latest", eventActions.latest);
router.get("/api/event/:id", eventActions.read);
router.post("/api/event/create", eventActions.add);
router.put("/api/event/:id", eventActions.edit);
router.delete("/api/event/:id", eventActions.destroy);

/* ************************************************************************* */

router.get("/api/user", userActions.browse);
router.post("/api/user", userActions.add);

/* ************************************************************************* */

export default router;
