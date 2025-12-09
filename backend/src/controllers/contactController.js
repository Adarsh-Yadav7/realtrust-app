// backend/src/controllers/contactController.js
import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
};

export const createContact = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const contact = await Contact.create({ fullName, email, mobile, city });
    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: "Failed to create contact" });
  }
};
