import mongoose from "mongoose";

export default function isValidValidObjectId(id: string): boolean {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  return isValid;
}
