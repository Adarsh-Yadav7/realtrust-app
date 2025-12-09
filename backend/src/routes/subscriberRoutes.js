// backend/src/routes/subscriberRoutes.js
import express from "express";
import { getSubscribers, createSubscriber } from "../controllers/subscriberController.js";

const router = express.Router();

router.get("/", getSubscribers);
router.post("/", createSubscriber);

export default router;
