import { Schema, model } from "mongoose";
import { IArticle } from "./article.interfaces";

const ArticleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    tags: { type: [String], required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Article = model<IArticle>("Article", ArticleSchema);

export default Article;
