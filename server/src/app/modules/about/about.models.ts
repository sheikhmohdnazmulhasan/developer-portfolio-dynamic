import { model, Schema } from "mongoose";
import { IAbout } from "./about.interfaces";

const aboutSchema = new Schema<IAbout>(
  {
    name: {
      type: String,
      default: "Sheikh Mohammad Nazmul Hasan",
    },
    bio: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: () => new Date().getFullYear() - 2003,
    },
    designation: {
      type: String,
      default: "Full Stack Developer",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const About = model<IAbout>("About", aboutSchema);
export default About;
