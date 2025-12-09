// backend/src/controllers/projectController.js
import Project from "../models/Project.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};

export const createProject = async (req, res) => {
  try {
    const { imageUrl, name, description } = req.body;
    const newProject = await Project.create({ imageUrl, name, description });
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: "Failed to create project" });
  }
};
