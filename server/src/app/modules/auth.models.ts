import { model, Schema } from "mongoose";
import { IUser } from "./auth.interfaces";

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);
export default User;
