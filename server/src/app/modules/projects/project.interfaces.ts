import { Document } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  live_preview: string;
  source: string;
}
