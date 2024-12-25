import { Document } from "mongoose";

export interface IAbout extends Document {
  name: string;
  bio: string;
  age: number;
  designation: string;
  description: string;
}
