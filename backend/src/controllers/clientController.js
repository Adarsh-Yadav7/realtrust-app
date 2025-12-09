// backend/src/controllers/clientController.js
import Client from "../models/Client.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch clients" });
  }
};

export const createClient = async (req, res) => {
  try {
    const { imageUrl, name, designation, description } = req.body;
    const client = await Client.create({ imageUrl, name, designation, description });
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: "Failed to create client" });
  }
};
