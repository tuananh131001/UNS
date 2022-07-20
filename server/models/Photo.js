import mongoose from "mongoose";

const PhotoEle = new mongoose.Schema({
  name: String,
  url: String,
});
export const Photo = mongoose.model("Photo",PhotoEle)
 