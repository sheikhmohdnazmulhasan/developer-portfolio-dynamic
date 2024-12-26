import { model, Schema } from "mongoose";
import { IProject } from "./project.interfaces";

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    technologies: { type: [String], required: true },
    live_preview: { type: String, required: true },
    source: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Mongoose Model
const Project = model<IProject>("Project", ProjectSchema);

export default Project;
