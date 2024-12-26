import { Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  image: string;
  tags: string[];
  description: string;
}
