// backend/src/controllers/subscriberController.js
import Subscriber from "../models/Subscriber.js";

export const getSubscribers = async (req, res) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });
    res.status(200).json(subs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch subscribers" });
  }
};

export const createSubscriber = async (req, res) => {
  try {
    const { email } = req.body;
    const sub = await Subscriber.create({ email });
    res.status(201).json(sub);
  } catch (error) {
    res.status(500).json({ message: "Failed to create subscriber" });
  }
};
